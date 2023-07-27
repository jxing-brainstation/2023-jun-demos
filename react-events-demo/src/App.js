import "./App.scss";
import Header from "./components/Header/Header";
import StudentList from "./components/StudentList/StudentList";
import studentData from "./data/studentData.json"
import AddStudentForm from "./components/AddStudentForm/AddStudentForm";

function App() {
  function handleAddStudent(event) {
    event.preventDefault();
    console.log("add this student: ");
    console.log(event.target.studentName.value);
    console.log(event.target.studentImageURL.value);
    // this is where we would add a student
    // i.e. studentData.push[{}]? 
  }

  return (
    <>
      <Header />
      <AddStudentForm handleAddStudent={handleAddStudent} />
      <StudentList studentData={studentData} />
    </>
  );
}

export default App;