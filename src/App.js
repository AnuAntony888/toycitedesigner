import logo from "./logo.svg";
import "./App.css";
import Navigate from "./Navigate/Navigate";
import Popups from "./Popups";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

        <Navigate />
      <Popups/>
      <ToastContainer />
    </div>
  );
}

export default App;
