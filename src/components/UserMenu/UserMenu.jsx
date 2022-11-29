import { Container, LogoutBtn } from "components/SharedNavigstion/SharedNavigstion.styled"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/operations";
import { selectUser } from "redux/selectors";
//підставити валідні дані юзера
export const UserMenu = ()=>{
    const userName = useSelector(selectUser);    
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(logOut());
    }
    return (
        <Container>            
            <p>Hi, {userName.email}</p>
            <LogoutBtn type="button" onClick={handleClick}>Logout</LogoutBtn>
        </Container>
    )
}