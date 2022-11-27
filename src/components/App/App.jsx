import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
const SharedNavigstion = lazy(()=>import("components/SharedNavigstion/SharedNavigstion"));

const ContactsPage = lazy(()=>import("pages/ContactsPage/ContactsPage"));
const Login = lazy(()=>import("pages/Login/Login"));
const Register = lazy(()=>import("pages/Register/Register"));

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedNavigstion />}>
          <Route index element={ <Home/>} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
</>
  );
};

export default App;

