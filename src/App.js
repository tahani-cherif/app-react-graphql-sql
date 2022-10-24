import { Ajoutuser } from './ajoutuser';
import './App.css';
// import { Qetuser } from './getuser';
 import { Query } from './getusers';
function App() {

  return (
    <div className="App">
      <h1>Users</h1>
     <Query/>
     <Ajoutuser/>
    </div>
  );
}

export default App;