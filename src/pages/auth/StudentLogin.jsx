import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  loginStudent,
  loginTeacher,
  registerStudent,
  registerTeacher,
} from "../../redux/authslice";
import studentBigImage from "../../assets/Svgs/studentBigImage.svg";
import teacherBIgImage from "../../assets/Svgs/teacherBIgImage.svg";
import eyeIcone from "../../assets/Svgs/eyeIcone.svg";
import mailIcon from "../../assets/Svgs/mailIcon.svg";
import studentImage from "../../assets/Svgs/student.svg";
import teacherImage from "../../assets/Svgs/teacher.svg";
import "./Auth.css";
import "./StudentLogin.css";

const StudentLogin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const [student, setStudent] = useState(true);
  const [register, setRegister] = useState(false);

  const handleStudentClick = () => {
    setStudent(true);
  };

  const handleTeacherClick = () => {
    setStudent(false);
  };

  const onSubmit = (data) => {
    const registrationAction = student ? registerStudent : registerTeacher;
    const loginAction = student ? loginStudent : loginTeacher;

    if (register) {
      dispatch(registrationAction(data));
    } else {
      dispatch(loginAction(data));
    }
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
            <h3>Login to your account to continue</h3>
            {register && (
              <div className="fullname">
                <Controller
                  name="firstname"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      className="contact-input auth-input"
                      {...field}
                      placeholder="First Name"
                    />
                  )}
                />
                <Controller
                  name="lastname"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      className="contact-input auth-input"
                      {...field}
                      placeholder="Last Name"
                    />
                  )}
                />
              </div>
            )}
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
              <img
                src={mailIcon}
                alt="icon"
                className={"mail-icon" + (!register ? "-login" : "")}
              />
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
              <img
                src={eyeIcone}
                alt="icon"
                className={"eye-icon" + (!register ? "-login" : "")}
              />
              <p>{errors.password?.message}</p>
            </div>

            {register && (
              <div>
                <Controller
                  name="confirmpassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="phone"
                      className="contact-input auth-input"
                      {...field}
                      placeholder="Phone Number"
                    />
                  )}
                />

                <p>{errors.password?.message}</p>
              </div>
            )}
            {!register && <p>I forgot my password !</p>}
            <button type="submit" className="primary-button">
              {register ? "Register" : "Login"}
            </button>
          </form>

          {!register ? (
            <p
              className="last-p"
              onClick={() => {
                setRegister(true);
              }}
            >
              I don’t have an account !
            </p>
          ) : (
            <p
              className="last-p"
              onClick={() => {
                setRegister(false);
              }}
            >
              I already have an account
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
