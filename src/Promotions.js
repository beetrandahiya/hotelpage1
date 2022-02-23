import './App.css';
import Header from './Header';
import Promoheader from './Promoheader';
import PerfectHoliday from './PerfectHoliday';
import Footer from './Footer';

function Promotions() {
  return (
    <div className="App">
     <Header />
        <Promoheader />
        <PerfectHoliday />
     <Footer />
    </div>
  );
}

export default Promotions;
