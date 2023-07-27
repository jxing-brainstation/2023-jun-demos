import "./Student.scss";

export default function Student(props) {

    function handleBarkClick(event) {
        console.log(event)
        alert("woof");
    }

    // we have access to props.studentInfo
    // { name : "asdfasdf"
    //   image: "asdfa"}
    return (
        <div className="student">
            <div className="student__content">
                <img
                    className="student__image"
                    src={props.studentInfo.image}
                    alt="Test Student Account Image" />
            </div>
            <h4 className="student__title">{props.studentInfo.name}</h4>
            <button onClick={handleBarkClick}>Bark!</button>
        </div>
    )
}