import './App.css';
import Header from './Header';
import Hero from './Hero';
import Content1 from './Content1';
import Cards from './Cards';
import Lifeat from './Lifeat';
import Amenities from './Amenities';
import Enquire from './Enquire';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Content1 />
     <Cards />
     <Lifeat />
     <Amenities />
     <Enquire />
   <Footer />
    </div>
  );
}

export default Home;
