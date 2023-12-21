

import { getProducts } from "@/helpers/getProducts";
import Card from '@/components/Card';

type item = { price: number; title: string; image: string }


const Home = async () => {

  const products = await getProducts();
  // console.log(products)
  return (
    <main className="m-4 row flex-wrap justify-content-center gap-3">

      {
        products.map((item:item, i:number)=><Card key={i} item={item}/>)
      }

    
    </main>
  )
}


export default Home;