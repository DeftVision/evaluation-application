import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Announcements, Home, Evaluations, Login, Error, Loading, Admin} from "./pages/_indexPages";
import { Sidebar, Footer} from "./layout/_indexLayout";
import { PrivateRoutes, UserContext, EvaluationForm } from './components/_indexComponents';

function App() {
  const [user, setUser] = useState(null);
  return (
   <UserContext.Provider value={{user, setUser}}>
     <Router>
       <div className="App">
         <div className="page-content">
             <Routes>
                 <Route>
                     <Route path="/" element={<Home />} />

                     <Route path="/new" element={<EvaluationForm newEvaluation/>}/>
                     <Route path="/editevaluation/:id" element={<EvaluationForm />}/>
                     <Route path="/evaluation" element={<Evaluations />} />


                     <Route path="/announcement" element={<Announcements />} />
                     <Route path="/admin" element={<Admin />} />
                 </Route>
                 <Route path="/login" element={<Login />} />
                 <Route path="/loading" element={<Loading />} />
                 <Route path="*" element={<Error />} />
             </Routes>
         </div>
           <Footer />
       </div>
     </Router>
   </UserContext.Provider>
  );
}

export default App;
