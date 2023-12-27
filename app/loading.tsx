"use client"

import { Hourglass } from 'react-loader-spinner'


export default function Loading() {
   
    return <>

    <div className='text-center m-5'>

    <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />


    </div>
     
</> }