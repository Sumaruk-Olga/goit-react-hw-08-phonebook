import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`  
text-decoration:none;
font-size: ${p=>p.theme.fontSizes.m};
cursor: pointer;
    &.active{
        color:${p => p.theme.text.primary};
        font-size: ${p => p.theme.fontSizes.l};
        font-weight: 900;
    }
    :hover:not(.active),
    :focus:not(.active) {
    transform: scale(1.25);
    font-weight: 700;
  }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    top: 0;
    left: 0;
    position: sticky;
    overflow: hidden;
    min-height: ${p => p.theme.space[7]}px;
    color: ${p => p.theme.text.secondary};
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadow};
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    padding-top:${p => p.theme.space[3]}px;
    padding-bottom:${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.space[2]}px;
  > nav {
    display: flex;
    justify-content: space-around;
    gap: 10px;  
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-left: auto;
  @media screen and (min-width: 768px) {
      width: 50%;
    }
`;

export const LogoutBtn = styled.button`
color: ${p => p.theme.text.secondary};
background-color: transparent;
border: none;
text-decoration:none;
font-size: ${p=>p.theme.fontSizes.m};
cursor: pointer;    
    :hover:not(.active),
    :focus:not(.active) {
    transform: scale(1.25);
    font-weight: 700;
  }
`;