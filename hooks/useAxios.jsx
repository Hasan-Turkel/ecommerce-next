import { useSelector } from "react-redux";
import axios from "axios"

const useAxios = () => {

  const {token} = useSelector((state)=>state.auth)
  

  const axiosSimple = axios.create({
    baseURL: `http://127.0.0.1:8000`
  })
  const axiosToken = axios.create({
    baseURL: `${process.env.base_url}`,
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosSimple, axiosToken}
}

export default useAxios