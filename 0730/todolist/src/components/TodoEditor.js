import "./TodoEditor.css";

const TodoEditor = () => {
    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 📝</h4>
            <div className="editor_wrapper">
                <input placeHolder="새로운 Todo..." />
                <button>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;