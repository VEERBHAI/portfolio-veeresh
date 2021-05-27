
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Particles
      className="particles-canvas"
        params={{
          Particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900

              }
            },
            shape:{
              type:"star",
              stroke:{
                width:6,
                color:"#DD9933"
              }
            }


          }

        }}
      />
     <Navbar />
     <Header />
    </div>
     
  );
}

export default App;
