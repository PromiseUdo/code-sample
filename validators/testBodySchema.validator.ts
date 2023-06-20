import { array, boolean, lazy, mixed, object, string } from 'yup'
const testBodySchema = (step: number) =>
  object().shape({
    title: string().required().min(2),
    description: string().required().min(2).max(120),
    questions: lazy(() => {
      if (step > 1) {
        return array()
          .min(10)
          .max(10)
          .of(
            object().shape({
              description: string().required().min(3).max(250),
              options: array()
                .min(4)
                .max(4)
                .of(
                  object().shape({
                    description: string().required().min(2),
                    correct: boolean().default(false),
                  })
                ),
            })
          )
      }
      return mixed().notRequired()
    }),
  })

export default testBodySchema
