import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/app-logo.svg";
import Loading from "../../components/Loading";

const eye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="bi bi-eye"
    viewBox="0 0 16 16"
  >
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
  </svg>
);

const eyeSlash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="bi bi-eye-slash"
    viewBox="0 0 16 16"
  >
    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
  </svg>
);


function Login() {
  const [hiddenPass, setHiddenPass] = useState(true);
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => action("LOGIN_REQ", data);

  const action = (type, payload) => dispatch({ type, payload });

  useEffect(() => {
    if (authReducer.isLoggedIn) navigate("../", { replace: true });
  }, [authReducer]);

  return (
    <div className="app app-login p-0">
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
                <div className="app-logo">
                  <img className="logo-icon me-2" src={Logo} alt="logo" />
                </div>
              </div>

              <h2 className="auth-heading text-center mb-5">
                Log in to Portal 👋
              </h2>

              <div className="auth-form-container text-start">
                {authReducer.isFailed && (
                  <div className="alert alert-danger" role="alert">
                    {authReducer.message}
                  </div>
                )}

                <form
                  className="auth-form login-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signin-email">
                      EMAIL
                    </label>
                    <input
                      id="signin-email"
                      name="signin-email"
                      type="text"
                      className="form-control signin-email"
                      placeholder="Email address"
                      required="required"
                      {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                    />
                    <p className="small text-danger">{errors.email?.message}</p>
                  </div>
                  {/*//form-group*/}
                  <div className="password mb-3">
                    <label className="sr-only" htmlFor="signin-password">
                      PASSWORD
                    </label>
                    <div className="input-group">
                      <input
                        id="signin-password"
                        name="signin-password"
                        type={hiddenPass ? "password" : "text"}
                        className="form-control signin-password"
                        placeholder="············"
                        required="required"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 4,
                            message: "Length must be 4 or more",
                          },
                        })}
                      />
                      <button
                        className="btn btn-outline-light border"
                        type="button"
                        onClick={() => setHiddenPass(!hiddenPass)}
                      >
                        {hiddenPass ? eyeSlash : eye}
                      </button>
                    </div>
                    <p className="small text-danger">
                      {errors.password?.message}
                    </p>

                    <div className="extra mt-3 row">
                      <div className="col">
                        <div className="forgot-password text-end">
                          {/* <a href="#">Forgot password?</a> */}
                        </div>
                      </div>
                      {/*//col-6*/}
                    </div>
                    {/*//extra*/}
                  </div>
                  {/*//form-group*/}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 theme-btn mx-auto"
                      disabled={authReducer.isFetching ? true : false}
                    >
                      {authReducer.isFetching ? <Loading /> : "Log In"}
                    </button>
                  </div>
                </form>
              </div>
              {/*//auth-form-container*/}
            </div>
            {/*//auth-body*/}
            <footer className="app-auth-footer">
              <div className="container text-center py-3">
                {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
                <small className="copyright">
                  Copyright
                  <i
                    className="fas fa-heart"
                    style={{ color: "#fb866a" }}
                  /> by{" "}
                  <a
                    className="app-link"
                    href="http://www.etneca.co.th/"
                    target="_blank"
                  >
                    ETNECA
                  </a>{" "}
                </small>
              </div>
            </footer>
            {/*//app-auth-footer*/}
          </div>
          {/*//flex-column*/}
        </div>
        {/*//auth-main-col*/}
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder"></div>
          <div className="auth-background-mask" />
          <div className="auth-background-overlay p-3 p-lg-5">
            <div className="d-flex flex-column align-content-end h-100">
              <div className="h-100" />
              <div className="overlay-content p-3 p-lg-4 rounded">
                <h5 className="mb-3 overlay-title">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, laboriosam!
                </h5>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae officiis distinctio sunt vitae, quas quod minus, neque delectus natus aliquam. Accusamus, nulla. Quisquam explicabo saepe non incidunt assumenda qui?
                </div>
              </div>
            </div>
          </div>
          {/*//auth-background-overlay*/}
        </div>
        {/*//auth-background-col*/}
      </div>
      {/*//row*/}
    </div>
  );
}

export default Login;
