import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, Header, Container } from "./SharedNavigstion.styled";
import { Loading } from "components/Loading/Loading";
import { UserMenu } from "components/UserMenu/UserMenu";

const loggedIn = true; //підставити валідні дані юзера

const SharedNavigstion = () => {
    return (
    <>
        <Header>        
        <nav>
          <StyledLink to="/">Home</StyledLink>

          {loggedIn ? 
            <Container>
              <StyledLink to="/contacts">Contacts</StyledLink>              
              <UserMenu/>
            </Container> : 
            <Container>
              <StyledLink to="/login">Login</StyledLink> 
              <StyledLink to="/register">Register</StyledLink>
            </Container>}

        </nav>
      </Header>
        <Suspense fallback={<Loading/>}>
            <Outlet/>
        </Suspense>
    </>    
    )
 };
 export default SharedNavigstion;