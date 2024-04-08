import { ChildrenNode } from "./types";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "../states/store";
export default function Providers({ children }: ChildrenNode) {
    return <Provider store={store}>
        <Toaster position="top-center" />
        {children}
    </Provider>

}