export default function AddStudentForm(props) {

    return (
        <form onSubmit={props.handleAddStudent}>
            <label>
                Student Name:
                <input type="text" name="studentName"></input>
            </label>
            <label>
                Student Image URL:
                <input type="text" name="studentImageURL"></input>
            </label>
            <button>Add student!</button>
        </form>
    )
}