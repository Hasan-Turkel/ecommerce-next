
// import { useSelector } from "react-redux";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import Footer from "@/components/Footer";

const Register = () => {
  // const { loading } = useSelector((state) => state.auth)

  return (

    <>
    <main className="d-flex justify-content-center flex-column align-items-center">
    
        <RegisterForm />
        <h3 className="text-center mb-2 text-dark">
          Have an account?{" "}
          <Link href="/login"
            className="text-danger nav-link"
            role="button" prefetch={false}
          >
            Login
          </Link>
        </h3>
        
  </main>
  <Footer props="position-absolute bottom-0"/>

  </>
   
  )
}

export default Register