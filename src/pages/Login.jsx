import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const {logIn} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin =(e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(result =>{
      const user = result.user;
      // console.log(user)
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error =>{
      const errorCode = error.code;
      setError(errorCode)
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center my-4">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-xs">Email or Password is Wrong</p>}

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="py-4 font-semibold text-center">
              Don't Have An Account?{" "}
              <Link to="/auth/register" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
