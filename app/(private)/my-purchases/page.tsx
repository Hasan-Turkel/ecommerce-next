"use client"

import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useSelector } from "react-redux";


const MyBox = () => {

  const { axiosToken } = useAxios()
  const {user} = useSelector((state:any)=>state.auth)
  const [purchases, setPurchases] = useState([{name:"saat", price:100, piece:2, date:"15.02.2022" }]);

  const getPurchases = async () => {

    try {
      const { data } = await axiosToken.get(`/users/${user._id}`, 
      );
    //   toastSuccessNotify("The reservation has been created.")
    // router.push("/my-reservations")
      // console.log(data);
      setPurchases(data.data.purchases)
    } catch (error) {
      // console.log(error.message);
    //   toastErrorNotify(error.response.data.messsage)
    }
  };

  // useEffect(() => {
  //   getPurchases();
  // }, []);
  
  console.log(purchases);

  return (
    <main className='pt-3' >

      {purchases?.map((item:any, i:number)=>( 
        <div key={i} className="mx-4 mb-3 p-3 border rounded-5 shadow-lg bg-white" style={{width:"20rem"}}>
        <p className="fs-5">Product Name : {item.name}</p>
        <p className="fs-5">Price : {item.price} $</p>
        <p className="fs-5">Piece : {item.piece}</p>
        <p className="fs-5">Purchase Date : {item.date}</p>
      </div>))}

      <div className="mx-4 mb-3 p-3 border rounded-5 shadow-lg bg-white" style={{width:"18rem"}}>
        <p>Produt Name</p>
        <p>Price</p>
        <p>Piece</p>
      </div>

    </main>
  )
}

export default MyBox