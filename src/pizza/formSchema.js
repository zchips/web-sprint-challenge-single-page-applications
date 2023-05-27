import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Name for order is required').min(1,'Name must be at least 1 character'),
    custom: yup.string(),
    size: yup.string(),
    bacon: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    peppers: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
})

export default formSchema