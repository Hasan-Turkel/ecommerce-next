import React from 'react'

interface CardProps {
    item: {
        price:number,
        title:string,
        image:string
    };
}

const Card:React.FC<CardProps>  = ({item}) => {
  return (
    <div className="col-lg-3 col-md-6 text-center border rounded-5 p-2" >
    <img role="button" src={item?.image} alt="img" width={"200px"} height={"200px"} />
    <h3>{item?.price} $</h3>
    <p>{item?.title.slice(0, 30)}...</p>
    <button className=" btn btn-primary">Add to Basket</button>
</div>
  )
}

export default Card