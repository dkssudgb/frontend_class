const Viewer = ({count}) => {
    return (
        <div className="Viewer">
            <h2> 현재 카운트 : </h2>
            <h3>{count}</h3>
        </div>
    );
};
export default Viewer;