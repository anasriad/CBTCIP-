import { useSelector } from "react-redux";
import { useGetAssociationEventsQuery } from "../../APIs/events/events.api";
import Header from "../../components/Header";
import { getCurrentUser } from "../../states/authSlice/auth";
import { EventPost } from "../../utils/types";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import UpdateEvent from "../../components/dialogs/UpdateEvents";
import DeleteEvent from "../../components/dialogs/deletEvent";
export default function Tracker() {
    const User = useSelector(getCurrentUser)

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const { data, refetch } = useGetAssociationEventsQuery(User?.associationId!)
    const [update, setUpdate] = useState(false)
    const [dataToBeUpdated, setData] = useState<EventPost>()
    const [Deletion, setDeletion] = useState(false)
    const [Id, setId] = useState<string>()
    useEffect(() => {
        refetch()
    }, [refetch, update, Deletion])
    return <>
        {update && <motion.div initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ delay: 0.5, velocity: 200 }}>
            <UpdateEvent onClose={() => setUpdate(false)} Id={dataToBeUpdated?.Id} Name={dataToBeUpdated?.Name} startDate={dataToBeUpdated?.startDate} endDate={dataToBeUpdated?.endDate} Description={dataToBeUpdated?.Description} />
        </motion.div>}
        {
            Deletion && <motion.div initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 0.5, velocity: 50 }}>
                <DeleteEvent onClose={() => setDeletion(false)} eventId={Id} />
            </motion.div>
        }
        <div className=" flex flex-col gap-9">
            <div>
                <Header />
            </div>
            <div className=" flex flex-col gap-14">
                {data?.map((event: EventPost, index: number) => {
                    return <motion.div initial={{ translateY: -100, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 * index }}>
                        <div key={event?.Id} className=" border p-3 flex flex-col gap-4 ml-3 mr-3 rounded-xl shadow-lg">
                            <div>
                                <h1 className=" text-2xl font-bold">{event.Name}</h1>
                                <div>
                                    <h2 className=" font-semibold">Starts at: {event.startDate}</h2>
                                    <h2 className=" font-semibold">Ends at: {event.endDate}</h2>
                                </div>
                                <p>{event.Description}</p>
                            </div>
                            <div className="flex justify-between">
                                <button className=" bg-orange-500 p-3 text-white rounded-xl w-20 hover:bg-green-500 hover:duration-300" onClick={() => {
                                    setData(event)
                                    setUpdate(true)
                                }}>Update</button>
                                <button className=" bg-black p-3 text-white rounded-xl w-20 hover:bg-white hover:duration-300 hover:text-black hover:border" onClick={() => {
                                    setId(event.Id)
                                    setDeletion(true)
                                }}>Delete</button>
                            </div>
                        </div>
                    </motion.div>
                })}
            </div>
        </div >
    </>
}