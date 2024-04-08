import *  as yup from 'yup'
import { useFormik } from 'formik'
import background from '../assets/loginBackground.png'
import { motion } from 'framer-motion'
import { useLoginMutation } from '../APIs/auth/auth.api'
import { useDispatch } from 'react-redux'
import { SetCredentials } from '../states/authSlice/auth'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [Login] = useLoginMutation()
    const ValidationSchema = yup.object().shape({
        email: yup.string().email(),
        password: yup.string(),
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            try {
                const User = await Login(values).unwrap()
                Dispatch(SetCredentials(User))
                Navigate('/manager')
            } catch (error) {
                console.log(error)
            }

        }
    })
    return <>
        <div>
            <div className=' flex justify-between pr-40 pl-24 items-center'>
                <motion.div initial={{ translateY: -100, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className=' pt-14'>
                    <img src={background} />
                </motion.div>
                <motion.div initial={{ translateX: 100, opacity: 0 }}
                    animate={{ translateX: 50, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className=' flex flex-col gap-4 justify-center items-center border-2 p-11 rounded-2xl'>
                    <div>
                        <h1 className=' text-xl font-extrabold'>Login</h1>
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} className=' flex flex-col gap-9'>
                            <input
                                placeholder='Email'
                                type='email'
                                name='email'
                                defaultValue={formik.initialValues.email}
                                onChange={formik.handleChange}
                                className=' p-3 rounded-2xl w-96 border'>
                            </input>
                            <input
                                placeholder='Password'
                                type='password'
                                name='password'
                                defaultValue={formik.initialValues.password}
                                onChange={formik.handleChange}
                                className=' p-3 rounded-2xl w-96 border'>
                            </input>
                            <input type='submit' className=' bg-green-500 text-white p-3 rounded-xl hover:cursor-pointer hover:bg-orange-500 hover:duration-300' value='Login' />
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>

    </>
}