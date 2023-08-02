import { useState } from "react";
import "./SessionStoragePage.scss";

function SessionStoragePage() {
    const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
    const [password, setPassword] = useState(sessionStorage.getItem("password") || "");
    const [confirmPassword, setConfirmPassword] = useState(sessionStorage.getItem("password-confirm") || "");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        sessionStorage.setItem("email", event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        sessionStorage.setItem("password", event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        sessionStorage.setItem("password-confirm", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // This is where we would make an axios request
        // to our backend to add the user to our database.
        alert("Signed up successfully");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form with State</h2>
            <label>
                Email: <input type="text" name="email" onChange={handleChangeEmail} value={email} />
            </label>
            <label>
                Password: <input type="password" name="password" onChange={handleChangePassword} value={password} className="form__input" />
            </label>
            <label>
                Confirm Password: <input type="password" name="confirmPassword" onChange={handleChangeConfirmPassword} value={confirmPassword} />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SessionStoragePage;
