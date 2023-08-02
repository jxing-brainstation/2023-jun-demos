import "./LocalStoragePage.scss";
import { useState } from "react";

export default function LocalStoragePage() {
    const [prefersDark, setPrefersDark] = useState(false);
    // let containerClass = "page-container"

    function handleVisualModeToggle() {
        // key: mode value: dark or light
        // key: prefersDark value: true <---- this
        // if (prefersDark) {
        localStorage.setItem("prefersDark", !prefersDark);
        setPrefersDark(!prefersDark);
        // } else {
        //     localStorage.setItem("prefersDark", true);
        //     setPrefersDark(true);
        // }

    }

    function determineContainerClass() {
        if (JSON.parse(localStorage.getItem("prefersDark")) === true) {
            return "page-container--dark"
        } else {
            return "page-container"
        }
    }
    return (
        <div className={determineContainerClass()}>
            <p>Local Storage: dark/light mode</p>
            <button className="light-dark-mode-toggle" onClick={handleVisualModeToggle}>Toggle Visual Mode</button>
        </div>

    )
}