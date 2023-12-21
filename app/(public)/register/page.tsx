"use client"
// import Footer from '../components/Footer';

import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";

const Register = () => {
  // const props = "position-absolute bottom-0";
  // const { loading } = useSelector((state) => state.auth)
  const router = useRouter()
  
  return (
    <main className="d-flex justify-content-center flex-column align-items-center">
    
        <RegisterForm />
        <h3 className="text-center mb-2 text-dark">
          Have an account?{" "}
          <span
            className="text-danger"
            role="button"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </h3>
        
  </main>
   
  )
}

export default Register