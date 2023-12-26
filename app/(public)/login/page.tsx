

import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Footer from "@/components/Footer";

// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Login = () => {

  // const { loading } = useSelector((state) => state.auth);
  return (
   
    <>
    <main className="d-flex justify-content-center flex-column align-items-center">
    
          <LoginForm />
          <h3 className="text-center m-2 text-dark">
            Don't you have an account?{" "}
            <Link href="register "
              className="text-danger nav-link"
              role="button" prefetch={false}
            >
              Register
            </Link>
          </h3>
         
    </main>
    <Footer props="position-absolute bottom-0"/>
    </>
   
  );
};

export default Login;