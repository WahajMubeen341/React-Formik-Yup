import './App.css';
import {Signup} from './components/Signup.js'
function App() {
  return (
    <div className="container mt-3">
     <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-8">
        <Signup/>     
      </div>     
      <div className="col-md-4"></div>
     </div>
    </div>
  );
}

export default App;
