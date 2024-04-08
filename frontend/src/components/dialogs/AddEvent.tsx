import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../states/authSlice/auth";
import * as yup from 'yup'
import { useAddEventMutation } from "../../APIs/events/events.api";
import toast from "react-hot-toast";
interface Props {
    onClose: () => void
}
export default function AddEvent(props: Props) {

    const { onClose } = props;
    const [addEvent] = useAddEventMutation()
    const Creator = useSelector(getCurrentUser)
    const Validation = yup.object().shape({
        Name: yup.string().matches(/^(?=(.*\d){1})(?=(.*[!@#$%^&*()_+{}|:"<>?]){1})[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?]*$/),
        startDate: yup.string().datetime(),
        endDate: yup.string().datetime(),
        Description: yup.string().matches(/[a-zA-Z]/)
    })
    const formik = useFormik({
        initialValues: {
            Name: '',
            startDate: '',
            endDate: '',
            Description: '',
            associationId: Creator?.associaltionId,
            userId: Creator?.Id
        },
        validationSchema: Validation,
        onSubmit: async (values) => {
            console.log(values)
            try {
                await addEvent(values)
                onClose()
                toast.success(`Event is Successfully Scheduled on ${values.startDate}`)
            } catch (error) {
                onClose()
                toast.error('Error has occurred, Please try later')
            }
        }
    })
    return (
        <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-40">
                {/* Dialog */}
                <div className="bg-white rounded-lg shadow-lg w-full md:max-w-md mx-auto">
                    {/* Header */}
                    <div className="bg-gray-200 py-4 px-6 flex justify-between items-center rounded-t-lg">
                        <h3 className="text-lg font-semibold text-gray-900">Schedule New Event</h3>
                        {/* Close Button */}
                        <button type="button" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Form */}
                    <form className="p-4 md:p-5" onSubmit={formik.handleSubmit}>
                        {/* Form Fields */}
                        {/* Name */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="Name" className="bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400" placeholder="Type Event Name" defaultValue={formik.initialValues.Name} onChange={formik.handleChange} />
                        </div>
                        {/* Start Date */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
                            <input type="datetime-local" name="startDate" className="bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400" defaultValue={formik.initialValues.startDate} onChange={formik.handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
                            <input type="datetime-local" name="endDate" className="bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400" defaultValue={formik.initialValues.endDate} onChange={formik.handleChange} />
                        </div>
                        {/* Event Description */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Event Description</label>
                            <textarea name="Description" className="bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400" placeholder="Write Event description here" defaultValue={formik.initialValues.Description} onChange={formik.handleChange}></textarea>
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5">Add new Event</button>
                    </form>
                </div>
            </div>
        </>
    );
}
