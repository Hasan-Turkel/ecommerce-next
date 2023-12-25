"use client";
import { useRouter } from "next/navigation";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios";
import { useSelector } from "react-redux";

const useProductCalls = () => {
  const { axiosToken } = useAxios();
  const { user } = useSelector((state: any) => state.auth);

  const updateBasket = async (values: any) => {
    try {
      const { data } = await axiosToken.put(`/users/${user._id}`, values);
      //   toastSuccessNotify("The reservation has been created.")
      // router.push("/my-reservations")
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
      //   toastErrorNotify(error.response.data.messsage)
    }
  };

  return { updateBasket };
};

export default useProductCalls;
