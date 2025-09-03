import Footer from '../Components/Footer/Footer.jsx';
import Header from "./Header/Header.jsx";
import ImgCom from './ImgCom/ImgCom.jsx';
import './MinutesPage.css'
import TopDeals from './TopDeals/TopDeals.jsx';


function MinutesPage() {
  return (
    <div className='page'>
      <Header />
      <div className="main w-3/4  bg-gray-300">
        <ImgCom />
        <TopDeals/>
      </div>
      <Footer />
    </div>
  )
}

export default MinutesPage