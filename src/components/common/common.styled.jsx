import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const Page = styled.main`
    padding-bottom: ${p => p.theme.space[5]}px;  
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[6]}px;
    margin-top: ${p => p.theme.space[5]}px; 
    margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Label = styled.label`
    display: block;
    width: 90%; 
    margin-top: ${p => p.theme.space[3]}px; 
    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;
    margin-left: ${p => p.theme.space[3]}px;
    margin-right: auto;  
`;

export const Input = styled(Field)`
    display: inline-block;
    margin-right: ${p => p.theme.space[3]}px;
    margin-left: auto; 
    `; 