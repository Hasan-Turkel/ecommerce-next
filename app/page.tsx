
import { getProducts } from "@/helpers/getProducts";
import Card from '@/components/Card';
import Footer from "@/components/Footer";


type item = { price: number; title: string; image: string }

const Home = async () => {

  const products = await getProducts();
  // console.log(products)
  return (

    <>
    <main className="m-4 row flex-wrap justify-content-center gap-3">

      {
        products.map((item:item, i:number)=><Card key={i} item={item}/>)
      }

    
    </main>

    <Footer props=""/>

    </>
  )
}


export default Home;