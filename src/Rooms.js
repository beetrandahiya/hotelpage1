import './App.css';
import Header from './Header';
import Roomslist from './Roomslist';
import Footer from './Footer';

function Rooms() {
  return (
    <div className="App">
     <Header /> 
     <Roomslist />
     <Footer />
    </div>
  );
}

export default Rooms;
