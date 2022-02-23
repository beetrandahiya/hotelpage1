import './App.css';
import Header from './Header';
import Aboutheader from './Aboutheader';
import Abouttext from './Abouttext';
import Enquire from './Enquire';
import Footer from './Footer';

function About() {
  return (
    <div className="App">
     <Header />  
     <Aboutheader /> 
     <Abouttext />
     <Enquire />
     <Footer />
    </div>
  );
}

export default About;
