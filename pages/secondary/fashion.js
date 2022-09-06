import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import SectionOut from '../../components/Sectionout'
import Rights from '../../components/Rights'
import Divider from '../../components/divider'
import Collection from '../../components/collections'
export default function FashionPage() {
    return (
        <>
   
  <SectionOut/>
   <Navbar/>
   <Divider title="Featured Products"/>
    <Collection/>
   <Footer/>
   <Rights/>
    </>
 
    );
  }