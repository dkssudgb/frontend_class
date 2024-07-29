const Controller = ({onIncrease, onDecrease}) => {
    return (
        <div className="Controller">
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};
export default Controller;