import FormGroup from '@/common/Input/FormGroup'
import InputWithAdornment from '@/common/Input/InputWithAdornment'
import RadioButton from '@/common/Input/RadioButton'
import Textarea from '@/common/Input/Textarea'
import Typography from '@/common/Typography'
import Button from '@/common/button'

import React, { FormEvent, forwardRef, useImperativeHandle } from 'react'
import iconComponents from '@/assets/icons/iconComponents'
import useStepper from '@/hooks/useStepper'
import { FormikErrors } from 'formik'
import { Question } from '@/apis/testApis'
import { useTranslation } from 'react-i18next'

type TestQuestionStage = {
  goToNextQuestion: () => void
  getStep: () => number
  areAllQuestionsVisited: () => boolean
  getWarnings: () => Record<
    number,
    ('NOT_SELECTED' | 'OPTIONS_EMPTY' | 'NO_QUESTION')[]
  >
}
type TestQuestionsProps = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<any>>
  values: any
  visitedQuestions: boolean[]
  setVisitedQuestions: React.Dispatch<React.SetStateAction<boolean[]>>
}

const Questions = new Array(10).fill(2)

const TestQuestions = forwardRef<TestQuestionStage, TestQuestionsProps>(
  (props, forwardedRef) => {
    const { t } = useTranslation()

    const { setFieldValue, values, visitedQuestions, setVisitedQuestions } =
      props
    const { step, goToNextStep, setStep } = useStepper(1)

    useImperativeHandle(
      forwardedRef,
      () => ({
        goToNextQuestion: () => {
          setVisitedQuestions((prev) =>
            prev.map((el, idx) => (idx + 1 === step ? true : el))
          )
          if (step <= 10) goToNextStep()
        },
        getStep: () => step,
        areAllQuestionsVisited: () => {
          return step === 10
            ? visitedQuestions.filter((el) => el).length >= 9
            : visitedQuestions.filter((el) => el).length === 10
        },
        getWarnings: () => {
          return Questions.reduce((acc, _, idx) => {
            if (!values.questions[idx].description) {
              acc[idx + 1] = (acc[idx + 1] || []).concat('NO_QUESTION')
            }
            if (
              !values.questions[idx]?.options?.some(
                (option: any) => option.correct
              )
            )
              acc[idx + 1] = (acc[idx + 1] || []).concat('NOT_SELECTED')

            if (
              !values.questions[idx]?.options?.every(
                (option: any) => !!option.description
              )
            )
              acc[idx + 1] = (acc[idx + 1] || []).concat('OPTIONS_EMPTY')

            return acc
          }, {})
        },
      }),
      [goToNextStep, step, visitedQuestions, values, setVisitedQuestions]
    )

    const handleQuestionChange = (
      ind: number,
      e: FormEvent<HTMLTextAreaElement>
    ) => {
      const {
        currentTarget: { value },
      } = e

      setFieldValue(
        'questions',
        values.questions.map((question: Question, idx: number) =>
          ind === idx ? { ...question, description: value } : question
        )
      )
    }
    const handleOptionChange = (
      stepIndex: number,
      optionIndex: number,
      optionValue: string
    ) => {
      const updatedQuestions = JSON.parse(JSON.stringify(values.questions))
      updatedQuestions[stepIndex].options = updatedQuestions[
        stepIndex
      ]?.options.map((o: any, i: number) =>
        i === optionIndex
          ? {
              ...o,
              description: optionValue,
            }
          : o
      )
      setFieldValue('questions', updatedQuestions)
    }
    const showWarning =
      visitedQuestions[step - 1] &&
      (!values.questions[step - 1].description ||
        !values.questions[step - 1]?.options?.some(
          (option: any) => option.correct
        ) ||
        !values.questions[step - 1]?.options?.every(
          (option: any) => !!option.description
        ))

    return (
      <main className='w-full flex-1 flex flex-col gap-4'>
        <header className='w-full flex flex-col justify-center items-start py-0.5 gap-1'>
          <Typography as='h5' className='lg font-medium text-jaa-shades-black'>
            {t('app.test.questions')}
          </Typography>
          <Typography
            as='p'
            className='text-jaa-shades-gray-2.5 md font-normal'
          >
            {t('app.test.test_question_prompt')}
          </Typography>
        </header>
        <section className='flex w-full px-2 md:px-4 gap-4 items-center justify-between overflow-x-auto scrollbar-thin pb-1'>
          {Questions.map((_, idx) => {
            const hasNoOptionSelected =
              !values.questions[idx].description ||
              !values.questions[idx]?.options?.some(
                (option: any) => option.correct
              ) ||
              !values.questions[idx]?.options?.every(
                (option: any) => !!option.description
              )

            return (
              <Button
                key={idx}
                variant={step === idx + 1 ? 'primary' : 'empty'}
                className='!h-[29px] !w-[29px] min-w-[28px]  relative !p-1'
                label={
                  <>
                    {visitedQuestions[idx] && hasNoOptionSelected && (
                      <iconComponents.test.WarningIcon className='absolute top-0 right-0 h-[12px] w-[13px]' />
                    )}
                    <Typography
                      className={
                        step === idx + 1
                          ? 'text-jaa-shades-white'
                          : 'text-jaa-shades-gray-2.5 xs font-bold'
                      }
                    >{`${idx + 1}`}</Typography>
                  </>
                }
                onClick={() => {
                  setStep(idx + 1)
                  setVisitedQuestions((prev) =>
                    prev.map((el, idx) => (idx + 1 === step ? true : el))
                  )
                }}
              />
            )
          })}
        </section>
        <section className='w-full flex-1 flex flex-col gap-4'>
          <FormGroup
            id='description'
            label=''
            className=' item-start'
            subtext={` ${
              (values.questions[step - 1]?.description || '').length
            } / 250`}
          >
            <Textarea
              name='description'
              className='md !rounded-lg !border !border-solid !border-opacity-50 !border-[#d9d9d9] !normal-case !bg-jaa-shades-white focus:!rounded-none focus:!border-b  active:!rounded-none'
              rows={3}
              placeholder={`${t('app.test.test_question_placeholder')}`}
              value={values.questions[step - 1]?.description || ''}
              onChange={(e) => handleQuestionChange(step - 1, e)}
              error={
                (values.questions[step - 1]?.description || '').length > 250
                  ? `${t('app.test.question_limit_prompt')}`
                  : ''
              }
            />
          </FormGroup>
          <section className='w-full flex flex-col justify-center items-start py-0.5 px-4 md:px-6 gap-4'>
            <header className='w-full flex flex-col justify-center items-start py-0.5 gap-1'>
              <Typography
                as='h5'
                className='lg font-medium text-jaa-shades-black'
              >
                {t('app.test.options')}
              </Typography>
              <Typography
                as='p'
                className='text-jaa-shades-gray-2.5 md font-normal'
              >
                {t('app.test.test_options_prompt')}
              </Typography>
            </header>
            <main className='flex flex-col gap-2 w-full'>
              {(values.questions[step - 1].options as any[]).map(
                (option, optionIndex) => {
                  return (
                    <div
                      key={step + '' + optionIndex}
                      className='flex gap-4 items-center justify-start w-full'
                    >
                      <RadioButton
                        className='h-[20px] w-[20px]'
                        id={`option_${optionIndex}`}
                        name={`question_${step}_options`}
                        checkComponent={
                          <iconComponents.test.TestRadiocheckedIcon className='w-5 h-5' />
                        }
                        uncheckedComponent={
                          <iconComponents.profile.RadioUncheckboxIcon className='w-5 h-5' />
                        }
                        checked={option.correct}
                        onChange={() => {
                          const updatedQuestions = JSON.parse(
                            JSON.stringify(values.questions)
                          )
                          updatedQuestions[step - 1].options = updatedQuestions[
                            step - 1
                          ]?.options.map((o: any, i: number) => ({
                            ...o,
                            correct: i === optionIndex,
                          }))
                          setFieldValue('questions', updatedQuestions)
                        }}
                      />
                      <InputWithAdornment
                        key={step + '' + optionIndex}
                        className='h-[37px] flex-1'
                        style={{
                          height: '37px',
                        }}
                        name={`question_options`}
                        placeholder={`Option ${optionIndex + 1}`}
                        value={option?.description}
                        onChange={(e) =>
                          handleOptionChange(
                            step - 1,
                            optionIndex,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  )
                }
              )}
            </main>

            {showWarning && (
              <footer className='mt-4 flex items-center gap-1'>
                <iconComponents.test.WarningIcon />

                <Typography className='text-[#FFA500] font-normal flex flex-col gap-1'>
                  <span>
                    {' '}
                    {!values.questions[step - 1].description &&
                      `${t('app.test.no_question_prompt')}`}
                  </span>
                  <span>
                    {!values.questions[step - 1]?.options?.some(
                      (option: any) => option.correct
                    ) && `${t('app.test.no_correct_option_prompt')}`}
                  </span>
                  <span>
                    {' '}
                    {!values.questions[step - 1]?.options?.every(
                      (option: any) => !!option.description
                    ) && `${t('app.test.missed_answer_prompt')}`}
                  </span>
                </Typography>
              </footer>
            )}
          </section>
        </section>
      </main>
    )
  }
)

TestQuestions.displayName = 'TestQuestions'

export default TestQuestions
