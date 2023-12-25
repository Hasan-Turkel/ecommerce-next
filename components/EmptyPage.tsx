import Link from "next/link"
import Footer from "./Footer"

interface EmptyProps {
    description: string
}


const EmptyPage:React.FC<EmptyProps> = ({description}) => {
  return (
    <>
    
   
    <h1 className="text-dark text-center mt-5 mb-4">{description}</h1>
    <Link href="/" className="nav-link text-dark fs-4 border rounded-5 text-center p-2 m-auto " style={{maxWidth:"16rem"}}>Go on Shopping</Link>

    <Footer props="position-absolute bottom-0"/>
    
    </>
  )
}

export default EmptyPage