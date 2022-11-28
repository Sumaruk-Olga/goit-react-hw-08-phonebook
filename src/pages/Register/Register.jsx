import { Page } from "components/common/common.styled";
import { Field, Form, Formik, ErrorMessage } from "formik";
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
    
    const handleSubmit=(values, { resetForm }) => {
            console.log(values);
            // відправляємо на бєк і чекаємо відповіді
            // якщо все ок
            resetForm();
            // i кидаємо на сторінку контактів
    };    
    
    return <Page>        
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        > 
            
            <Form autoComplete="off">
                <label htmlFor="name">Name: 
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label htmlFor="email">Email: 
                    <Field name="email" type="email"  />
                    <ErrorMessage name="email" component="div" />
                </label>
                <label htmlFor="password">Password: 
                    <Field name="password" type="password"  />
                    <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit">Register</button>
                </Form>
            
        </Formik>
    </Page>
 };
 export default Register;



