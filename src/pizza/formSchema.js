import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().trim().min(2, "name must be at least 2 characters"),
    custom: yup.string(),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'Please select a valid size'),
    bacon: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    peppers: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
})

export default formSchema