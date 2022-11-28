import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 15px;
align-items: center;
justify-content: space-around;

@media screen and (min-width: 768px) {
      display: inline-flex;
      flex-direction: row;      
      align-items: center;
    }
`;

export const Button = styled.button`
width: 25%;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
border: 1px solid ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.radii.normal};

cursor: pointer;
@media screen and (min-width: 768px) {
      width: auto;
      margin: 0;
    }
`;

export const Input = styled(Field)`
margin-left: 5px;
width: 65%;
border: 1px solid ${p=>p.theme.colors.accent};
border-radius:${p => p.theme.radii.normal};
cursor: pointer;
`;