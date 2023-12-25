import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>

    <div className='mx-4 mb-3 p-3 border rounded-5 shadow-lg bg-white'>

    <Skeleton count={5} />


    </div>
     
</> }