import { AiOutlineLoading3Quarters } from "react-icons/ai"
import "../styles/loading.scss";

const Loading = () => {
    return (
        <div className="spinner-wrap">
            <div className="spinner">
                <AiOutlineLoading3Quarters />
            </div>
        </div>
    );
}

export default Loading;