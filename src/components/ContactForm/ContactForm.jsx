import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import {  useDispatch, useSelector } from "react-redux";
import { StyledForm, Button, Input } from "./ContactForm.styled";
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const phoneRegExp =/^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with + (Example: +38 (XXX) XXX-XX-XX)').min(7, "too short").max(20, "too long"),
  });

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 

  const isNamePresent = (name) => {
      const normalizedName = name.toLowerCase();
      return contacts.find(item => item.name.toLowerCase() === normalizedName);
  }
    
  const handleSubmit = ({name, number}, { resetForm }) => {
      const isName = isNamePresent(name);
      if (!isName) {
        dispatch(addContact({ name, number }));
        resetForm();
      } else {
        alert(`${name} is already in contacts`);
      }    
  }
  
  return <>
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={schema}
        >          
    <StyledForm autoComplete="off">
      <label htmlFor="name">Name
        <Input type="text" name="name" />
        <ErrorMessage name="name" component="div" />
      </label>
      <label htmlFor="number">Number
        <Input type="tel" name="number"  />
        <ErrorMessage name="number" component="div" />
      </label>
      <Button type='submit'>add</Button>
    </StyledForm>
  </Formik>
</>
}

