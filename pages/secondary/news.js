import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import SectionOut from '../../components/Sectionout'
import Rights from '../../components/Rights'
import Divider from '../../components/divider'
import News from '../../components/news'
export default function NewsPage() {
    return (
        <>
   
  <SectionOut/>
   <Navbar/>
   <Divider title="Latest News"/>
    <News/>
   <Footer/>
   <Rights/>
    </>
 
    );
  }