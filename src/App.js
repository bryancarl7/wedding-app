//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import HeaderContainer from './components/HeaderContainer'
import MasonryImageList from './components/MasonryImageList'
import ResponsiveAppBar from './components/ResponseAppBar';

export default function App() {
  return (
  <Router>
    <div className="App">
	<ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/product" element={<Product />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
    </div>
  </Router>
  );
}

function Home(){
  return (
    <header>
      <MasonryImageList />
    </header>
  );
}

function About(){
  return <h2>About Us</h2>;
}

function Product(){
  return <h2>Product</h2>;
}
