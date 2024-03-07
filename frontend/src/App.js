import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Announcements, Home, Evaluations, Login, Error, Loading, Admin} from "./pages/_indexPages";
import { Sidebar, Footer} from "./layout/_indexLayout";
import cookies from 'js-cookie'
import { PrivateRoutes, UserContext, EvaluationForm } from './components/_indexComponents';

function App() {
    const userCookie = cookies.get("userCookie");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function getUser() {
            const response = await fetch(`http://localhost:8000/api/user/${userCookie}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const _response = await response.json();
            if(!response.ok) {
                console.log(_response.error);
            }
            if(response.ok) {
                setUser(_response.user);
            }
            setLoading(true);

        }
        if(userCookie) {
            getUser();
        } else {
            setLoading(false);
        }
    }, []);

    if(loading) {
        return <Loading />;
    }

  return (
   <UserContext.Provider value={{user, setUser}}>
     <Router>
       <div className="App">
           <Sidebar />
         <div className="page-content">
             <Routes>
                 <Route element={<PrivateRoutes />}>
                     <Route path="/" element={<Home />} />

                     <Route path="/new" element={<EvaluationForm newEvaluation/>}/>
                     <Route path="/editevaluation/:id" element={<EvaluationForm />}/>
                     <Route path="/evaluation" element={<Evaluations />} />


                     <Route path="/announcement" element={<Announcements />} />
                     <Route path="/admin" element={<Admin />} />
                 </Route>
                 <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
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
