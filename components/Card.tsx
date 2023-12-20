import React from 'react'

const Card = () => {
  return (
    <div className="col-lg-3 col-md-6" >
    <img role="button" src={"item?.image"} alt="img" width={"200px"} height={"200px"} />
    <h3>{"item?.price"} $</h3>
    <p>{"item?.title"}</p>
</div>
  )
}

export default Card