import Button from '@/common/button'
import Modal from '@/common/modal/Modal'
import ModalHeader from '@/common/modal/ModalHeader'
import Typography from '@/common/Typography'

import { FormikHelpers, useFormik } from 'formik'
import { useCallback, useMemo, useRef, useState } from 'react'

import iconComponents from '@/assets/icons/iconComponents'

import { withAsync } from '@/helpers/withAsync'

import { ToastNotify } from '@/common/toastManager'
import TestQuestions from './TestQuestions'

import {
  useCreateSkillTestMutation,
  useCreateSkillTestQuestionMutation,
  useSkillTestDetailQuery,
  useUpdateSkillsTestMutation,
} from '@/store/testSlice'
import { SkillTestDTO, TestCategory, Question, Image } from '@/apis/testApis'
import profilePic from './ProfilePic'
import testBodySchema from '../validators/testBodySchema.validator'
import useStepper from '@/hooks/useStepper'
import FormGroup from '@/common/Input/FormGroup'
import InputWithAdornment from '@/common/Input/InputWithAdornment'
import Textarea from '@/common/Input/Textarea'
import { useTranslation } from 'react-i18next'

type IUpdateProps = {
  open: boolean
  onClose: () => void
  data?: Test
  category?: TestCategory
}

type Test = SkillTestDTO & { questions: Question[]; image?: Image }

const initialValues: Test = {
  title: '',
  description: '',
  questions: new Array(10).fill({
    description: '',
    options: new Array(4).fill({
      description: '',
      correct: false,
    }),
  }),
}
const ProfilePic = profilePic()
const AddNewTest = (props: IUpdateProps) => {
  const { t } = useTranslation()

  const { open, onClose, category, data } = props
  const { data: testDetail } = useSkillTestDetailQuery(Number(data?.id), {
    skip: !data,
  })
  const [createTestSkill, { isLoading: isCreatingSkillTest }] =
    useCreateSkillTestMutation()
  const [
    createSkillTestQuestions,
    { isLoading: isCreatingSkillTestQuestions },
  ] = useCreateSkillTestQuestionMutation()
  const [updateSkillsTest, { isLoading: isUpdatingSkills }] =
    useUpdateSkillsTestMutation()
  const { step, goToNextStep, goToPrevStep, setStep } = useStepper(1)
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>(() =>
    data ? new Array(10).fill(true) : new Array(10).fill(false)
  )
  const TestQuestionsRef = useRef<{
    goToNextQuestion: () => void
    getStep: () => number
    areAllQuestionsVisited: () => boolean
    getWarnings: () => Record<
      number,
      ('NOT_SELECTED' | 'OPTIONS_EMPTY' | 'NO_QUESTION')[]
    >
  }>(null)
  const initialData = useMemo(() => {
    if (!data) return initialValues
    return {
      ...initialValues,
      ...data,
      ...(testDetail ? testDetail : {}),
      image: {
        src: data.image as string,
      },
    }
  }, [data, testDetail])
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    isValid,
    dirty,
  } = useFormik({
    validationSchema: testBodySchema(step),
    initialValues: initialData as any,
    onSubmit: submitHandler,
    enableReinitialize: true,
  })
  async function submitHandler(
    values: Test,
    { setSubmitting, resetForm }: FormikHelpers<Test>
  ) {
    const skillTest = new FormData()
    if (values.image?.file) skillTest.set('image', values.image?.file as Blob)
    skillTest.set('category', category?.id as unknown as string)
    skillTest.set('title', values.title)
    skillTest.set('description', values.description)
    const { error, response } = await withAsync(() =>
      data
        ? updateSkillsTest({
            id: data.id!,
            test: skillTest,
          }).unwrap()
        : createTestSkill(skillTest).unwrap()
    )
    if (error) {
      return ToastNotify('error', {
        message: (error as any)?.message || 'Ooops... Could not create test.',
      })
    }
    if (response) {
      const questions = values.questions
      const { error: questionsError } = await withAsync(() =>
        createSkillTestQuestions({
          id: response.data.id,
          questions,
        })
      )
      if (questionsError) {
        return ToastNotify('error', {
          message:
            (questionsError as any)?.message ||
            'Ooops... Could not create questions for this test.',
        })
      }
      goToNextStep()
      setSubmitting(false)
      resetForm()
    }
  }
  const closeHandler = useCallback(() => {
    onClose()
    setStep(1)
    resetForm()
    setVisitedQuestions(new Array(10).fill(false))
  }, [onClose, resetForm, setStep])

  const file = values.image?.src
  const { areAllQuestionsVisited, getWarnings } = TestQuestionsRef.current || {}
  const warningObject = getWarnings?.() || {}
  const isThereWarning =
    Object.keys(warningObject).length > 0 || Object.keys(errors).length > 0
  const incomplete = isThereWarning
  const content = (() => {
    if (step > 3 || step < 1) return <></>
    if (step === 1) {
      return (
        <article className='w-full flex flex-col h-full'>
          <main className='flex-1 pb-4 overflow-x-hidden flex flex-col  gap-8 w-full overflow-auto scrollbar !scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-jaa-dark-teal-80 scrollbar-track-gray-100'>
            <FormGroup
              id='title'
              label={t('app.form_labels.test_title')}
              required
              className=' !text-jaa-shades-black'
            >
              <InputWithAdornment
                name='title'
                placeholder={`${t('app.form_labels.enter_test_title')}`}
                value={values.title}
                error={
                  errors?.title &&
                  (touched?.title as unknown as string) &&
                  (errors.title as unknown as string)
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup
              id='description'
              required
              label={t('app.form_labels.description')}
              className='px-1 !text-jaa-shades-black'
              subtext={` ${values.description.length} / 120`}
            >
              <Textarea
                name='description'
                className='select md !normal-case'
                rows={3}
                placeholder={`${t('app.form_labels.enter_test_description')}`}
                value={values.description}
                error={
                  errors.description &&
                  (touched.description as unknown as string) &&
                  (errors.description as unknown as string)
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
            <ProfilePic
              title={`${t('app.form_labels.cover_image')}`}
              {...{
                setFieldValue: setFieldValue,
                handleBlur: handleBlur,
                handleChange: handleChange,
                values: values,
                errors: errors,
              }}
            />
          </main>

          <footer className='w-full flex items-center pt-3 pb-1 gap-2'>
            <Button
              label={t('app.button.continue')}
              onClick={goToNextStep}
              className='!uppercase flex-1 sm:flex-none md:min-w-[200px]'
              disabled={!isValid || (dirty && !file)}
            />
            <Button
              label={t('app.button.cancel')}
              onClick={closeHandler}
              className='!uppercase flex-1 sm:flex-none md:min-w-[200px]'
              variant='cancel'
            />
          </footer>
        </article>
      )
    }
    if (step === 2) {
      const warningObject = getWarnings?.() || {}
      const isThereWarning =
        Object.keys(warningObject).length > 0 || Object.keys(errors).length > 0
      return (
        <article className='flex flex-col w-full h-full gap-2'>
          <header className='flex py-0.5 items-center'>
            <Button
              onClick={goToPrevStep}
              variant='empty'
              className='!p-0 !justify-start'
              label={
                <span className='flex gap-1 items-center w-full'>
                  <iconComponents.util.ArrowLeftIcon className='w-5 h-5 stroke-jaa-shades-gray-2.5' />
                  <Typography
                    as='h5'
                    className='h5 md:h4 text-jaa-shades-gray-2.5'
                  >
                    {' '}
                    {values.title}
                  </Typography>
                </span>
              }
            />
          </header>
          <TestQuestions
            setFieldValue={setFieldValue}
            values={values}
            ref={TestQuestionsRef}
            visitedQuestions={visitedQuestions}
            setVisitedQuestions={setVisitedQuestions}
          />
          <footer className='w-full flex items-center pt-3 pb-1 gap-2'>
            <Button
              label={t('app.button.save')}
              type={isThereWarning ? 'button' : 'submit'}
              onClick={isThereWarning ? goToNextStep : () => {}}
              className='!uppercase flex-1 sm:flex-none md:min-w-[200px]'
              loading={
                isCreatingSkillTest ||
                isCreatingSkillTestQuestions ||
                isUpdatingSkills
              }
              disabled={
                !areAllQuestionsVisited?.() ||
                isCreatingSkillTest ||
                isCreatingSkillTestQuestions ||
                isUpdatingSkills
              }
            />
            <Button
              label={t('app.button.cancel')}
              disabled={
                isCreatingSkillTest ||
                isCreatingSkillTestQuestions ||
                isUpdatingSkills
              }
              onClick={closeHandler}
              className='!uppercase flex-1 sm:flex-none md:min-w-[200px]'
              variant='cancel'
            />
          </footer>
        </article>
      )
    }
    if (step === 3) {
      const warningObject = getWarnings?.() || {}
      const isThereWarning =
        Object.keys(warningObject).length > 0 || Object.keys(errors).length > 0
      if (
        Object.keys(warningObject).length === 0 &&
        Object.keys(errors).length > 0
      ) {
        ToastNotify('warn', {
          message: `${t('app.test.fields_warning_msg')}`,
        })
      }
      if (
        Object.keys(warningObject).length &&
        Object.keys(warningObject).includes('10') &&
        !visitedQuestions[9]
      ) {
        setVisitedQuestions((prev) =>
          prev.map((el, idx) => (idx === 9 ? true : el))
        )
      }
      if (isThereWarning)
        return (
          <article className='w-full flex  flex-col h-full gap-2'>
            <Typography
              as='h5'
              className='!lg font-normal text-jaa-shades-black'
            >
              {t('app.test.incomplete_test_msg')}
            </Typography>
            <main className='flex flex-col gap-3 w-full'>
              {Object.keys(warningObject).map((key) => {
                const reasons = warningObject[Number(key)]

                return (
                  <section key={key} className='mt-4 flex items-center gap-1'>
                    <iconComponents.test.WarningIcon />

                    <Typography className='text-[#FFA500] font-normal flex flex-col gap-1'>
                      <span>
                        {reasons.includes('NO_QUESTION') &&
                          `${t('app.test.no_question_reason')} ` + key + '.'}
                      </span>
                      <span>
                        {reasons.includes('NOT_SELECTED') &&
                          `${t('app.test.not_selected_reason')} ` + key + '.'}
                      </span>
                      <span>
                        {' '}
                        {reasons.includes('OPTIONS_EMPTY') &&
                          `${t('app.test.options_empty_reason')} ` + key + '.'}
                      </span>
                    </Typography>
                  </section>
                )
              })}
            </main>
            <footer className='w-full flex items-center pt-3 pb-1 gap-2'>
              <Button
                label={t('app.button.go_back')}
                onClick={() => {
                  goToPrevStep()
                  if (!Object.keys(warningObject).includes('10'))
                    setVisitedQuestions((prev) =>
                      prev.map((el, idx) => (idx === 9 ? true : el))
                    )
                }}
                className='!uppercase flex-1 sm:flex-none'
                variant='cancel'
              />
            </footer>
          </article>
        )
      return (
        <article className='w-full flex  flex-col h-full gap-2'>
          <Typography as='h5' className='!lg font-normal text-jaa-shades-black'>
            {data
              ? `${t('app.test.edit_test_success_msg')}`
              : `${t('app.test.test_success_msg')}`}
          </Typography>
          <footer className='w-full flex items-center pt-3 pb-1 gap-2'>
            <Button
              label={t('app.button.go_back')}
              onClick={closeHandler}
              className='!uppercase flex-1 sm:flex-none'
              variant='cancel'
            />
          </footer>
        </article>
      )
    }
  })()

  const Titles = [
    data ? `${t('app.test.edit_test')}` : `${t('app.test.add_test')}`,
    data ? `${t('app.test.edit_test')}` : `${t('app.test.add_test')}`,
    incomplete
      ? `${t('app.test.test_incomplete')}`
      : data
      ? `${t('app.test.saved')}`
      : `${t('app.test.test_added_success_msg')}`,
  ]
  const SubText = [
    data ? (
      ''
    ) : (
      <span key={0}>
        {t('app.test.add_test_to')}{' '}
        <span className='font-semibold'>&ldquo;{category?.title}&rdquo;</span>
      </span>
    ),
    data ? (
      ''
    ) : (
      <span key={1}>
        {t('app.test.add_test_to')}{' '}
        <span className='font-semibold'>&ldquo;{category?.title}&rdquo;</span>
      </span>
    ),
    '',
  ]
  console.log(values, 'VL', data)

  return (
    <>
      <Modal
        disableBackdrop={true}
        open={open}
        onClose={closeHandler}
        className='p-4 sm:p-6 relative rounded-[18px]'
        variant='md'
        reEvaluate
      >
        <ModalHeader
          title={Titles[step - 1]}
          subText={SubText[step - 1]}
          onClose={closeHandler}
        />
        <form onSubmit={handleSubmit} className='w-full flex-1'>
          {content}
        </form>
      </Modal>
    </>
  )
}

export default AddNewTest
