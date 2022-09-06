import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import SectionOut from '../../components/Sectionout'
import Rights from '../../components/Rights'
import Divider from '../../components/divider'
import Products from '../../components/products'
export default function ProductsPage() {
    return (
        <>
   
  <SectionOut/>
   <Navbar/>
   <Divider title="Featured Products"/>
 <Products/>
   <Footer/>
   <Rights/>
    </>
 
    );
  }