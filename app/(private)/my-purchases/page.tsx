"use client"

import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useSelector } from "react-redux";
import EmptyPage from "@/components/EmptyPage";
import Footer from "@/components/Footer";


const MyPurchases = () => {

  const { axiosToken } = useAxios()
  const {user} = useSelector((state:any)=>state.auth)
  const [purchases, setPurchases] = useState([]);
  const props = purchases.length>1?"":"position-absolute bottom-0"

  const getPurchases = async () => {

    try {
      const { data } = await axiosToken.get(`/users/${user._id}`, 
      );
    //   toastSuccessNotify("The reservation has been created.")
      // console.log(data);
      setPurchases(data.data.purchases)
    } catch (error) {
      // console.log(error.message);
    //   toastErrorNotify(error.response.data.messsage)
    }
  };

  useEffect(() => {
    getPurchases();
  }, []);
  
  // console.log(purchases);

  return (

    <>
    {!purchases?.length? (<EmptyPage description="There is nothing in your purchases."/>) : (<>
    <main className='pt-3' >
      {purchases?.reverse().map((item:any, i:number)=>( 
        <div key={i} className="mx-4 mb-3 p-3 border rounded-5 shadow-lg bg-white" style={{width:"20rem"}}>
          <img role="button" src={item?.image} alt="img" width={"100px"} height={"100px"} />
        <p className="fs-5">{item.title}</p>
        <p className="fs-5">{item.price} $</p>
        <p className="fs-5">{item.piece} Piece</p>
        <p className="fs-5">Purchase Date : {item.date.slice(0, 10)}</p>
      </div>))}
    </main>
    <Footer props={props}/>
    </>)}
    </>
  )
}

export default MyPurchases