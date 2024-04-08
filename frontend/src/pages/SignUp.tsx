import { motion } from "framer-motion"
import background from '../assets/loginBackground.png'
import { useFormik } from "formik"
import * as yup from 'yup'
import { useGetAllAssociationsQuery } from "../APIs/associations/association.api"
import Select from 'react-select'
import { useSignUpMutation } from "../APIs/auth/auth.api"
import { useDispatch } from "react-redux"
import { SetCredentials } from "../states/authSlice/auth"
import toast from "react-hot-toast"


export default function SignUp() {
    const Dispatch = useDispatch()
    const { data } = useGetAllAssociationsQuery(null)
    const [signUp] = useSignUpMutation()
    const ValidationSchema = yup.object().shape({
        FirstName: yup.string().required("First Name is required"),
        LastName: yup.string().required("Last Name is required"),
        PhoneNumber: yup.string().required("Phone Number is required"),
        Email: yup.string().email("Invalid email").required("Email is required"),
        Password: yup.string().required("Password is required"),
        AssociationId: yup.object().shape({
            value: yup.string(),
            label: yup.string()
        }).nullable().required("Association is required"),
        Role: yup.string().required("User Type is required")
    })

    const formik = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            Email: "",
            Password: "",
            associationId: null,
            Role: null
        },
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            try {
                const NewUser = await signUp(values).unwrap()
                Dispatch(SetCredentials(NewUser))
                toast.success('Welcome!!!')
            } catch (error) {
                toast.error('There has been an error signing you Up')
            }
        }
    })

    const associationOptions = data ? data.map((association: { id: string; name: string }) => ({
        value: association.id,
        label: association.name
    })) : [];

    const userTypeOptions = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Member', label: 'Member' }
    ];

    return (
        <div>
            <div className='flex justify-between pr-40 pl-24 items-center'>
                <motion.div initial={{ translateY: -100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='pt-14'>
                    <img src={background} alt="background" />
                </motion.div>
                <motion.div initial={{ translateX: 100, opacity: 0 }}
                    animate={{ translateX: 50, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='flex flex-col gap-4 justify-center items-center border-2 p-11 rounded-2xl'>
                    <div>
                        <h1 className='text-xl font-extrabold'>Sign Up</h1>
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
                            <input
                                placeholder='First Name'
                                type='text'
                                name='FirstName'
                                value={formik.values.FirstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='p-3 rounded-2xl w-96 border'
                            />
                            {formik.touched.FirstName && formik.errors.FirstName && <div className="text-red-600">{formik.errors.FirstName}</div>}

                            <input
                                placeholder='Last Name'
                                type='text'
                                name='LastName'
                                value={formik.values.LastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='p-3 rounded-2xl w-96 border'
                            />
                            {formik.touched.LastName && formik.errors.LastName && <div className="text-red-600">{formik.errors.LastName}</div>}

                            <input
                                placeholder='Phone Number'
                                type='text'
                                name='PhoneNumber'
                                value={formik.values.PhoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='p-3 rounded-2xl w-96 border'
                            />
                            {formik.touched.PhoneNumber && formik.errors.PhoneNumber && <div className="text-red-600">{formik.errors.PhoneNumber}</div>}

                            <Select
                                placeholder='Select Association'
                                options={associationOptions}
                                value={formik.values.associationId}
                                onChange={(selectedOption) => formik.setFieldValue('association', selectedOption)}

                                className='w-96'
                            />
                            {formik.touched.associationId && formik.errors.associationId && <div className="text-red-600">{formik.errors.associationId}</div>}

                            {formik.values.associationId && (
                                <Select
                                    placeholder='Select User Type'
                                    options={userTypeOptions}
                                    value={formik.values.Role}
                                    onChange={(selectedOption) => formik.setFieldValue('userType', selectedOption)}

                                    className='w-96'
                                />
                            )}
                            {formik.touched.Role && formik.errors.Role && <div className="text-red-600">{formik.errors.Role}</div>}

                            <input
                                placeholder='Email'
                                type='email'
                                name='email'
                                value={formik.values.Email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='p-3 rounded-2xl w-96 border'
                            />
                            {formik.touched.Email && formik.errors.Email && <div className="text-red-600">{formik.errors.Email}</div>}

                            <input
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={formik.values.Password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='p-3 rounded-2xl w-96 border'
                            />
                            {formik.touched.Password && formik.errors.Password && <div className="text-red-600">{formik.errors.Password}</div>}

                            <input type='submit' className='bg-green-500 text-white p-3 rounded-xl hover:cursor-pointer hover:bg-orange-500 hover:duration-300' value='Sign Up' />
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
