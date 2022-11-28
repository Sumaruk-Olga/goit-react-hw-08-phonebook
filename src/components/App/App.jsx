import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { PublicRoute } from "components/PublicRoute/PublicRoute";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
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
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<Register />} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
</>
  );
};

export default App;