import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Button = () => {
    const { isLogged, toggleIsLogged } = useContext(AppContext);

    const btnInfo = isLogged ? 'Wyloguj' : 'Zaloguj';

    return (
        <button onClick={toggleIsLogged}>{btnInfo}</button>
    )
}


export default Button;