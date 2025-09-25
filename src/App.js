import { use, useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
/*import
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/


// let name = "Ishleen 28";
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  let toggleMode =()=>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
     // document.title ="TxtUtilities - DarkMode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      //document.title ="TxtUtilities - LightMode";
    }
  }
  return (
    <>
    {/* <Router>  */}
  {<Navbar title = 'TxtUtilities' mode={mode} toggleMode={toggleMode} AboutText = "About" />}
  {/*<Navbar/>*/}
  <Alert alert ={alert}/>
  <div className="container my-3">
    {/* <Routes>
     <Route exact path="/about" element ={<About mode={mode}/>}/> 
      <Route exact path="/" element={<TextForm showAlert ={showAlert} heading = "Enter the text to analyse" mode={mode}/>}/> */}
      <TextForm showAlert ={showAlert} heading = "Enter the text to analyse" mode={mode}/>
    {/* </Routes> */} {/*switch has been changed to Routes and is written in the above syntax */}
 {/* <About/> */}
  </div>
  {/*</Router>*/}
  </>
  );
}

export default App;
