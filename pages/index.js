
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Under from '../components/underhero'
import Collection from '../components/collections'
import Products from '../components/products'
import News from '../components/news'
import Hero from '../components/herosection'
import Newsletter from '../components/newsletter'
import SectionOut from '../components/Sectionout'
import Rights from '../components/Rights'

  export default   function Home() {
  return (
    <>
  
  <SectionOut/>
   <Navbar/>
   <Hero/>
   <Under/>
   <Products/>
   <Collection/>
   <News/>
   <Newsletter/>
   <Footer/>
   <Rights/>
    </>
 
   
  
   )
}

