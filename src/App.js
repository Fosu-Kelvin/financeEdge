import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Menu from "./menu/menu";
import Nav from "./nav/Nav";
import Enroll from "./enroll/Enroll"
import  Company from "./company/company"


function App() {

  
  return (
    <main className="App">
     <Nav/>
     
     <Routes>
      <Route index path="/" element={<Menu/>}/>
      <Route path="/company" element={<Company/>}/>
      <Route path="/enroll" element={<Enroll/>}/>
     </Routes>
    
     <Footer/>
    </main>
  );
}

export default App;
