import { Container, LogoutBtn } from "components/SharedNavigstion/SharedNavigstion.styled"
//підставити валідні дані юзера
export const UserMenu = ()=>{
    return (
        <Container>            
            <p>mango@mail.com</p>
            <LogoutBtn>Logout</LogoutBtn>
        </Container>
    )
}