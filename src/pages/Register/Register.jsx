import { Container } from "components/App/App.styled";
import { Input, Label, Page, StyledForm } from "components/common/common.styled";
import { Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/operations";
import { selectIsAuthError } from "redux/selectors";
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).max(20).required(),
});

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const Register = () => {
    const dispatch=useDispatch();
    const isError = useSelector(selectIsAuthError);
    const handleSubmit=({name, email, password}, { resetForm }) => {            
            dispatch(
                register({ name, email, password,})
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
                <Label htmlFor="name">Name: 
                    <Input name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </Label>
                <Label htmlFor="email">Email: 
                    <Input name="email" type="email"  />
                    <ErrorMessage name="email" component="div" />
                </Label>
                <Label htmlFor="password">Password: 
                    <Input name="password" type="password"  />
                    <ErrorMessage name="password" component="div" />
                </Label>
                <button type="submit">Register</button>
                </StyledForm>            
        </Formik>
        {isError && <div>{isError}</div>}
        </Container>
    </Page>
 };
 export default Register;



