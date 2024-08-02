import "./List.css";
import Item from "./Item";
import { useState } from "react";

const List = ({todo, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    }
    return (
        <div className="TodoList">
            <h3>List 📜</h3>
            <input className="searchbar" 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" />
            <div className="list_wrapper"> 
                {getSearchResult().map((it) => (
                    <Item key={it.id}{...it} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </div>   
        </div>
    );
}

export default List;