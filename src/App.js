import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Achievement from './Components/Achievement/Achievement';
import Footer from './Components/Footer/Footer';
import Foundation from './Components/Foundation/Foundation';
import Foundation2 from './Components/Foundation2/Foundation2';
import HomePage from './Components/HomePage/HomePage';
import JoinHand from './Components/JoinHand/JoinHand';
import Navbar from './Components/Navbar/Navbar';
import Protecting from './Components/Protecting/Protecting';
import RescueVan from './Components/Rescue/RescueVan';
import Stories from './Components/Stories/Stories';
import Story from './Components/Strory/Story';

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <HomePage/>
     <Foundation/>
     <Foundation2/>
     <RescueVan/>
     <Story/>
     <Stories/>
     <Achievement/>    
     <Protecting/> 
    
     <JoinHand/>
      <Footer/> */}
     <AboutUs/>
    </div>
  );
}

export default App;
