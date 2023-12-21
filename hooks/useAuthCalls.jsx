import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../lib/features/authSlice";
import useAxios from "./useAxios";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
const useAuthCalls = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { axiosSimple } = useAxios();
  const { axiosToken } = useAxios();

  const login = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosSimple.post(`users/auth/login`, values);
      dispatch(loginSuccess(data));
      //   toastSuccessNotify("Login performed.")
      router.push("/");
      // console.log(data);
    } catch (error) {
      // console.log(error);
      dispatch(fetchFail());
      //   toastErrorNotify(error.response.data.message)
    }
  };

  const register = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosSimple.post(`users/auth/register`, values);
      dispatch(registerSuccess(data));
      //   toastSuccessNotify("Register performed.")
      router.push("/");
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      //   toastErrorNotify(error.response.data.message.includes("duplicate")&&"Register failed. Username or email already in use." || error.response.data.message)
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`users/auth/logout`);
      dispatch(logoutSuccess());
      //   toastSuccessNotify("Logout performed.")
      router.push("/");
    } catch (error) {
      // console.log(error.message);
      dispatch(fetchFail());
      //   toastErrorNotify("Logout failed.")
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
