import { Container } from "components/App/App.styled";
import { Input, Label, Page, StyledForm } from "components/common/common.styled";
import { Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/operations";
import * as yup from 'yup';


const schema = yup.object().shape({    
    email: yup.string().email().required(),
    password: yup.string().min(7).max(20).required(),
});

const initialValues = {    
    email: '',
    password: '',
};

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit=({email, password}, { resetForm }) => {
        dispatch(
            logIn({ email, password,})
          );        
        resetForm();
};

    return <Page>
        <Container>  
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >      
        <StyledForm autoComplete="off">                
                <Label htmlFor="email">Email: 
                    <Input name="email" type="email"  />
                    <ErrorMessage name="email" component="div" />
                </Label>
                <Label htmlFor="password">Password: 
                    <Input name="password" type="password"  />
                    <ErrorMessage name="password" component="div" />
                </Label>
                <button type="submit">LOG IN</button>
                </StyledForm>
        </Formik>
        </Container>
     </Page>
 };
 export default Login;