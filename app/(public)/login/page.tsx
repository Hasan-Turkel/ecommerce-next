"use client"

import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Login = () => {
  // const props = "position-absolute bottom-0";
  // const navigate = useNavigate();
  // const { loading } = useSelector((state) => state.auth);
  const router = useRouter()
  return (
   
    <main className="d-flex justify-content-center flex-column align-items-center">
    
          <LoginForm />
          <h3 className="text-center m-2 text-dark">
            Don't you have an account?{" "}
            <span
              className="text-danger"
              role="button"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </h3>
         
    </main>
   
  );
};

export default Login;