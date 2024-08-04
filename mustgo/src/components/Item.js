import "./Item.css";
import React from "react";

const Item = ({id, name, rating, location, memo, onUpdate, onDelete}) => {
    const onClickDelete = () => {
        onDelete(id);
    }

    const filledStars = Array.from({ length: rating }, (_, index) => (
        <div key={`filled-${index}`} className="star_filled"></div>
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
        <div key={`empty-${index}`} className="star_empty"></div>
    ));

    return (
        <div className="Item">
            <div>
                <div className="first_line">
                    <div className="name_col">{name}</div>
                    <div className="rating_col">
                        {filledStars}
                        {emptyStars}
                    </div>
                </div>
                <div className="second_line">
                    <div className="location_col">위치 : {location}</div>
                    <div className="memo_col">  메모 : {memo}</div>
                </div>
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default Item;