import { useSelector } from "react-redux";
import axios from "axios"

const useAxios = () => {

  const {token} = useSelector((state)=>state.auth)
  const baseurl = process.env.NEXT_PUBLIC_baseurl;
  

  const axiosSimple = axios.create({
    baseURL:`${baseurl}`
  })
  const axiosToken = axios.create({
    baseURL: `${baseurl}`,
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosSimple, axiosToken}
}

export default useAxios