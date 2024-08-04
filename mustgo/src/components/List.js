import "./List.css";
import Item from "./Item";
import { useState } from "react";

const List = ({goto, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
            ? goto
            : goto.filter((it) =>
                (it.name && it.name.includes(search)) ||
                (it.location && it.location.includes(search)) ||
                (it.memo && it.memo.includes(search))
            );
    };
    return (
        <div className="List">
            <h3>🔎 맛집 리스트</h3>
            <input className="searchbar" 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="list_wrapper"> 
                {getSearchResult().map((it) => (
                    <Item key={it.id} {...it}
                          memo={it.memo}
                          onUpdate={onUpdate}
                          onDelete={onDelete}/>
                ))}
            </div>   
        </div>
    );
}

export default List;