"use client"
import { useRouter } from "next/navigation";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"
import { useSelector } from "react-redux";

const useProductCalls = () => {

    const router = useRouter()
    const { axiosToken } = useAxios()
    const {user} = useSelector((state:any)=>state.auth)
 
  
  const updateReservation = async (values:any) => {
   
    try {
        const { data } = await axiosToken.put(`/reservations/${values.id}/`,values,
        );
    //   toastSuccessNotify("The reservation has been updated.")
     
      console.log(values);
      // console.log(id);
      
    } catch (error) {
    //   console.log(error.message);
      // console.log(id);
    
    //   toastErrorNotify(error.response.data.messsage)
    }
  };

  const cancelReservation = async (id:any) => {
   
    try {
        const { data } = await axiosToken.put(`/reservations/${id}/`,{situation:"canceled"},
        );
    //   toastSuccessNotify("The reservation has been canceled.")
     
      // console.log(data);
      // console.log(id);
      
    } catch (error) {
    //   console.log(error.message);
      // console.log(id);
    
    //   toastErrorNotify(error.response.data.messsage)
    }
  };


  const sendReservation = async (values:any) => {

    try {
      const { data } = await axiosToken.post(`/reservations`, values, 
      );
    //   toastSuccessNotify("The reservation has been created.")
    router.push("/my-reservations")
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
    //   toastErrorNotify(error.response.data.messsage)
    }
  };



  return { updateReservation, sendReservation, cancelReservation };
};

export default useProductCalls;