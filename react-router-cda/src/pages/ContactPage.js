function ContactPage({ username }) {
    return (
        <>
            <h1>Contact Page</h1>
            <p>
                Sorry, <strong>{username}</strong>. We are not accepting messages at
                this time.
            </p>
        </>
    );
}

export default ContactPage;