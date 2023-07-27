import "./StudentList.scss";
import Student from "../Student/Student";
const StudentList = (props) => {

    const studentComponents = [
        <Student studentInfo={props.studentData[0]} />,
        <Student studentInfo={props.studentData[1]} />,
        <Student studentInfo={props.studentData[2]} />,
    ]

    // myArray.map() returns an array
    return (
        <section className="student-list">
            {props.studentData.map(student => {
                return <Student key={student.id} studentInfo={student} />;
            })}
        </section>
    )
}

export default StudentList;
