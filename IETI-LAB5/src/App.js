import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Task from "./components/Task";

function App() {

  
  
  return (
    <BrowserRouter>
      <Routes>
        hello
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/task" element={<Task />}>
        </Route>
      </Routes>
    </BrowserRouter> 
  );

  }

export default App;
