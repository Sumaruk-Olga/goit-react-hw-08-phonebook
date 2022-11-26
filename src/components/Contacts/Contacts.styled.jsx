import styled from "@emotion/styled";

export const ContactsList = styled.ul`
width: 90%;
margin-left: auto;
margin-right: auto;
@media screen and (min-width: 768px) {
      width: 65%;
    }
    @media screen and (min-width: 1200px) {
      width: 90%;
  }
`;

export const ContactItem = styled.li`
display: flex;
justify-content: space-between;
padding: 0 10px;
margin-bottom:10px;
`;

export const DeleteButton = styled.button`
width: 30px;
height: 30px;
border: 1px solid ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.radii.normal};
cursor: pointer;
@media screen and (min-width: 768px) {
      margin-right: 50px;
    }

`;

export const Error = styled.h1`
color: ${p => p.theme.text.primary};
font-size: ${p => p.theme.fontSizes.l};
font-weight: 900;
margin-top: ${p => p.theme.space[6]}px;
margin-bottom: ${p => p.theme.space[6]}px;
`;
