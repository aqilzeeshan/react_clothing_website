//Import Ract Rounter
import { Routes, Route } from "react-router-dom";

//Import css
import './App.css'

//Import images
import dress3 from './images/dress3.jpg'

//Import components
import Landing from './Landing'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Shop from './Shop'
import Legal from './Legal'
import UserProfile from './UserProfile'
import Calculator from './Calculator'

//App component contains all other components
//Routes (Rules of Routing) are defind in this 
//component using React Router
function App() {
  return (
    <main>
      <Header logoText="A&H" isLoggedIn={false} />
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Landing text="Sustainable, Beautiful, Ethical" image={dress3}/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/calculate" element={<Calculator />} />
      </Routes>
      <Footer text="A&H"/>
    </main>
  );
}
//Export App so it can be used by Index
export default App;
