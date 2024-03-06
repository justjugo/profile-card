import logo from './logo.svg';
import './App.css';
import Info from './component/Info';
import About from './component/About';
import Interest from './component/Interest';
import Footer from './component/Footer';

function App() {
  return (
    <div className="profile-card">
     <Info/>
     <About/>
     <Interest/>
     <Footer/>
    

    </div>

  )
}

export default App;
