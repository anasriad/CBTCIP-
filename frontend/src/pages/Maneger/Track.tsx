import { useSelector } from "react-redux";
import { useGetAssociationEventsQuery } from "../../APIs/events/events.api";
import Header from "../../components/Header";
import { getCurrentUser } from "../../states/authSlice/auth";

export default function Tracker() {
    const User = useSelector(getCurrentUser)
    const [getAssociationEvents] = useGetAssociationEventsQuery()
    const { data, isLoading } = getAssociationEvents(User?.associaltionId)
    return <>
        <div className=" flex flex-col gap-9">
            <div>
                <Header />
            </div>
            <div>
                <div>
                    <div>
           
                    </div>
                </div>
            </div>
        </div>
    </>
}