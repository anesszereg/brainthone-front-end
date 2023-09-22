import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import studentBigImage from "../../assets/Svgs/studentBigImage.svg";
import teacherBIgImage from "../../assets/Svgs/teacherBIgImage.svg";
import eyeIcone from "../../assets/Svgs/eyeIcone.svg";
import mailIcon from "../../assets/Svgs/mailIcon.svg";
import studentImage from "../../assets/Svgs/student.svg";
import teacherImage from "../../assets/Svgs/teacher.svg";
import "./Auth.css";
import "./StudentLogin.css";
import { useState } from "react";
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const StudentLogin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const [student, setStudent] = useState(true);
  //   const [teacher, setTeacher] = useState(false);
  const handleStudentClick = () => {
    setStudent(true);
  };

  const handleTeacherClick = () => {
    setStudent(false);
  };
  return (
    <>
      <div className="auth-container">
        <div className="big-image">
          <img
            src={student ? studentBigImage : teacherBIgImage}
            alt="big image"
          />
        </div>
        <div className="auth-content">
          {/* <AuthShared></AuthShared> */}
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
              className={student ? "grey" : "active"}
              onClick={handleTeacherClick}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{student ? "Students" : "Teachers"} Platform</h1>
            <h3>Login to you account to continue</h3>
            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    className="contact-input auth-input"
                    {...field}
                    placeholder="Email"
                  />
                )}
              />
              <img src={mailIcon} alt="icon" className="mail-icon" />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    className="contact-input auth-input"
                    {...field}
                    placeholder="Password"
                  />
                )}
              />
              <img src={eyeIcone} alt="icon" className="eye-icon" />
              <p>{errors.password?.message}</p>
            </div>
            <p>I forget my password !</p>

            <button type="submit" className="primary-button">
              Login
            </button>
          </form>
          <p className="last-p">I don’t have an account !</p>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
