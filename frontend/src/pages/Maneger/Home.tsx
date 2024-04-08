import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { getCurrentUser } from "../../states/authSlice/auth";
import { MdAddToPhotos, MdCancel } from 'react-icons/md'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import { FaCalendarAlt } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import { useState } from "react";
import AddEvent from "../../components/dialogs/AddEvent";
import { motion } from 'framer-motion'
export default function ManagerHome() {
    const CurrentUser = useSelector(getCurrentUser)
    const [AddDialog, setDialog] = useState(false)

    return <> {
        AddDialog && <motion.div initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ delay: 0.5, velocity: 200 }}>
            <AddEvent onClose={() => setDialog(false)} />
        </motion.div>
    }
        <div className=" flex flex-col gap-9">
            <div>
                <Header />
            </div>
            <div className=" flex justify-center items-center">
                <h1 className=" font-extrabold">Hello...{CurrentUser?.FirstName}</h1>
            </div>
            <div className=" flex flex-col gap-6">
                <div className=" flex flex-col gap-2 border-2 pt-3 pb-3">
                    <div className=" flex justify-center items-center">
                        <h1>EVENTS</h1>
                    </div>
                    <div className=" pl-20 pr-20">
                        <Swiper spaceBetween={28}
                            slidesPerView={4}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation
                            direction="horizontal">
                            <SwiperSlide>
                                <div className=" flex flex-col justify-center items-center p-6 rounded-2xl border-2 gap-7 w-56 h-56 hover:duration-200 hover:cursor-pointer hover:bg-orange-500 hover:scale-110 hover:text-white" onClick={() => setDialog(true)}>
                                    <div>
                                        <h1 className=" font-bold text-3xl text-center">Schedule New Events</h1>
                                    </div>
                                    <div>
                                        <MdAddToPhotos className=" animate-pulse text-3xl" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" flex flex-col justify-center items-center p-6 rounded-2xl border-2 gap-7 w-56 h-56 hover:duration-200 hover:cursor-pointer hover:bg-orange-500 hover:scale-110 hover:text-white">
                                    <div>
                                        <h1 className=" font-bold text-2xl text-center">Track Current Events</h1>
                                    </div>
                                    <div>
                                        <TbPlayerTrackNextFilled className=" animate-pulse text-3xl" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" flex flex-col justify-center items-center p-6 rounded-2xl border-2 gap-7 w-56 h-56 hover:duration-200 hover:cursor-pointer hover:bg-orange-500 hover:scale-110 hover:text-white">
                                    <div>
                                        <h1 className=" font-bold text-2xl text-center">Cancel Events</h1>
                                    </div>
                                    <div>
                                        <MdCancel className=" animate-pulse text-3xl" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" flex flex-col justify-center items-center p-6 rounded-2xl border-2 gap-7 w-56 h-56 hover:duration-200 hover:cursor-pointer hover:bg-orange-500 hover:scale-110 hover:text-white">
                                    <div>
                                        <h1 className=" font-bold text-2xl text-center">Calendar</h1>
                                    </div>
                                    <div>
                                        <FaCalendarAlt className=" animate-pulse text-3xl" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" flex flex-col justify-center items-center p-6 rounded-2xl border-2 gap-7 w-56 h-56 hover:duration-200 hover:cursor-pointer hover:bg-orange-500 hover:scale-110 hover:text-white">
                                    <div>
                                        <h1 className=" font-bold text-2xl text-center">Past Events</h1>
                                    </div>
                                    <div>
                                        <MdAddToPhotos className=" animate-pulse text-3xl" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

            </div>
        </div>
    </>
}