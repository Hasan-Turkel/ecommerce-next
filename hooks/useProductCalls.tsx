"use client";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import useAxios from "./useAxios";
import { useSelector } from "react-redux";

const useProductCalls = () => {
  const { axiosToken } = useAxios();
  const { user } = useSelector((state: any) => state.auth);


  const updateBasket = async (values: any) => {
    try {
      const { data } = await axiosToken.put(`/users/${user._id}`, values);

      let note=""

      if(values.process=="add"){
           note = "The product has been added."
      }else if (values.process=="remove"){
         note = "The product has been removed."
      }else if (values.process=="delete"){
         note = "The product has been deleted."
      }else {
        note = "The products have been bought succesfully.."
      }
        toastSuccessNotify(note)
      // console.log(data);
    } catch (error:any) {
      // console.log(error.message);
        toastErrorNotify(error.response.data.messsage)
    }
  };

  return { updateBasket };
};

export default useProductCalls;
