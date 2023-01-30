
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App text-blue-500">
        <Nav/>
      <p>Hello AAC</p>
      
      {/* <AboutUs/> */}
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
