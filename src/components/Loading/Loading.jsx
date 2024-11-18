import "./Loading.css"

const Loading = () => {

    return (
        <div className="loading-container">
            <img className="loading-image" src="/img/ht-ig-300x300.png" alt="loading" />
            <div className="loader"></div>
        </div>
    );
};
export default Loading