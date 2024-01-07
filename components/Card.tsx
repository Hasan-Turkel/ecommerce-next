"use client";
import React from "react";
import useProductCalls from "@/hooks/useProductCalls";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface CardProps {
  item: {
    price: number;
    title: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const values = { process: "add", item };
  // console.log(values);

  const { updateBasket } = useProductCalls();
  const { user } = useSelector((state: any) => state.auth);
  const router = useRouter();

  return (
    <div className="col-lg-3 col-md-6 text-center border rounded-5 p-2">
      <img
        role="button"
        src={item?.image}
        alt="img"
        width={"200px"}
        height={"200px"}
        loading="lazy"
      />
      <h3>{item?.price} $</h3>
      <p>{item?.title.slice(0, 30)}...</p>
      <button className=" btn btn-primary" onClick={() => user?updateBasket(values):router.push("/login")}>
        Add to Basket
      </button>
    </div>
  );
};

export default Card;
