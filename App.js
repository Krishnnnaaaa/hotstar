import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header'
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

function App() {
  const login= useGoogleLogin({
    onSuccess:(tokenResponse)=>console.log(tokenResponse),

  });
  
  return (
   
   
   <div className="App">
   
<Router>
<Header/>
<Routes>
  
  <Route exact path="/login" element={<Login />} />
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<Home />} />
  

</Routes>

</Router>
   </div>
  );
}

export default App;
