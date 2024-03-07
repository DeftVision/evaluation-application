import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Announcements, Home, Evaluations, Login } from "./pages/_indexPages";
import { Sidebar, Footer} from "./layout/_indexLayout";
import { PrivateRoutes, UserContext } from './components/_indexComponents';

function App() {
  const [user, setUser] = useState(null);
  return (
   <UserContext.Provider value={{user, setUser}}>
     <Router>
       <div className="App">
         <div className="page-content">

         </div>
       </div>
     </Router>
   </UserContext.Provider>
  );
}

export default App;
