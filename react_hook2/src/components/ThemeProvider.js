import React, {useState} from "react";
import ThemeContext from "./ThemeContext";
import ThemedContent from "./ThemedContent";

const ThemeProvider = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dart" : "light"));
    };
    return (
        0
    );
}

export default ThemeProvider;