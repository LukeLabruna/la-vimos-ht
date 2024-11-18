import { useEffect } from "react";
import "./Loading.css"

const Loading = () => {

    return (
        <div className="loading-container">
            <img className="loading-image" src="/img/footer-oti.jpg" alt="loading" />
            <div className="loader"></div>
        </div>
    );
};
export default Loading