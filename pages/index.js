
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Under from '../components/underhero'
import Collection from '../components/collections'
import Products from '../components/products'
import News from '../components/news'
import Hero from '../components/herosection'
import Newsletter from '../components/newsletter'

  export default   function Home() {
  return (
    <>
    
   <Navbar/>
   <Hero/>
   <Under/>
   <Products/>
   <Collection/>
   <News/>
   <Newsletter/>
   <Footer/>
    </>
 
   
  
   )
}

