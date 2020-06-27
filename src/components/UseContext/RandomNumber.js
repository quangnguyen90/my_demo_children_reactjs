import React, { useContext } from "react";
import { RandomNumberContext } from "./RandomNumberContext";

export default function () {
    const { number, updateNumber } = useContext(RandomNumberContext);

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={updateNumber}>Update Number</button>
        </div>
    );
}
