import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const InfoUser = () => {
    const { isLogged } = useContext(AppContext);

    const isLoggedInfo = isLogged ? 'zalogowany' : 'niezalogowany';
    return (
        <div>Użytnownik jest: {isLoggedInfo}</div>
    )

}

export default InfoUser;