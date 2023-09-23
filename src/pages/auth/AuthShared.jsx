import { useState } from "react";
import studentImage from "../../assets/Svgs/student.svg";
import teacherImage from "../../assets/Svgs/teacher.svg";
import "./Auth.css";

const AuthShared = () => {
  const [student, setStudent] = useState(true);
  const [teacher, setTeacher] = useState(false);

  const handleStudentClick = () => {
    setStudent(true);
    setTeacher(false);
  };

  const handleTeacherClick = () => {
    setStudent(false);
    setTeacher(true);
  };

  return (
    <>
      <div className="auth-icons">
        <img
          src={studentImage}
          alt="Student"
          className={student ? "active" : "grey"}
          onClick={handleStudentClick}
        />
        <img
          src={teacherImage}
          alt="Teacher"
          className={teacher ? "active" : "grey"}
          onClick={handleTeacherClick}
        />
      </div>
    </>
  );
};

export default AuthShared;
