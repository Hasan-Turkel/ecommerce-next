"use client"

import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useSelector } from "react-redux";
import Link from "next/link";
import useProductCalls from "@/hooks/useProductCalls";


const MyBox = () => {

  const { axiosToken } = useAxios()
  const {user} = useSelector((state:any)=>state.auth)
  const [products, setProducts] = useState([{name:"saat", price:100, piece:2}, {name:"saat", price:100, piece:3}]);
  // console.log(values);
  

  const { updateBox } = useProductCalls()

  const handleAdd = (item:any)=>{

    updateBox({process:"add", item});
    setTimeout(() => {
      getProducts();
    }, 1000);
  }
  const handleRemove = (item:any)=>{

    item.piece>=2?updateBox({process:"remove", item}):updateBox({process:"delete", item})
    setTimeout(() => {
      getProducts();
    }, 1000)
    ;
  }
  const handleDelete = (item:any)=>{

   updateBox({process:"delete", item}); 
    setTimeout(() => {
      getProducts();
    }, 1000)
    ;
  }

  const getProducts = async () => {

    try {
      const { data } = await axiosToken.get(`/users/${user._id}`, 
      );
    //   toastSuccessNotify("The reservation has been created.")
    // router.push("/my-reservations")
      // console.log(data);
      setProducts(data.data.box)
    } catch (error) {
      // console.log(error.message);
    //   toastErrorNotify(error.response.data.messsage)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  console.log(products);

  const totalAmount = products.reduce( ( sum, { price, piece } ) => sum + price*piece , 0)

  return (
    <main className='pt-3' >

      {products?.map((item:any, i:number)=>( 
        <div key={i} className="mx-4 mb-3 p-3 border rounded-5 shadow-lg bg-white position-relative" style={{width:"20rem"}}>
        <p className="fs-5">Product Name : {item.title}</p>
        <p className="fs-5">Price : {item.price} $</p>
        <button className="fs-3 bg-white border-0 text-danger fw-bolder position-absolute top-0 end-0" onClick={()=>handleDelete(item)}>X</button>
        <div className="border bg-light d-flex justify-content-between border-1 rounded-5" style={{width:"8rem"}}>
          <button className="rounded-end rounded-5 border-0 fs-2" onClick={()=>handleRemove(item)}>-</button>
          <span className="fs-2">{item.piece}</span>
          <button className="rounded-start rounded-5 border-0 fs-2" onClick={()=>handleAdd(item)}>+</button>
        </div>
      </div>))}

        <div className="m-auto mb-3 p-3  rounded-5  bg-white shadow-lg text-center" style={{width:"20rem"}}>

        <p className="mx-2 fs-4">Total Amount:{totalAmount.toFixed(2)} $ </p>
        <button type="button" className="btn btn-warning rounded-4 text-dark fs-4">BUY</button>
        <p className="mx-2 fs-5 m-1">or </p>
        <Link className=" nav-link text-dark fs-4 border rounded-5 m-0" href="/">Go on Shopping</Link>

        </div>
      

    </main>
  )
}

export default MyBox