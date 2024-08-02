import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

const ThemedContent = () => {
    const theme = useContext(ThemeContext);
    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "5px"
    };
    
    return (
        <div>
            <h4>Context 연습</h4>
            <div style={style}>The current theme is {theme}.</div>
        </div>
    );
}

export default ThemedContent;