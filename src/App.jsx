import './App.css';
import Advantages from './Components/Advantages/Advantages';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Advantages />
      <Contact/>
    </>
  );
}

export default App;
