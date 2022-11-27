import { Container, SectionTitle } from "components/App/App.styled";
import { Page } from "components/common/common.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import {Contacts} from "components/Contacts/Contacts";

const ContactsPage = () => {
    return <Page>
        <Container>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm />
        <Filter />
        <SectionTitle>Contacts</SectionTitle>
        <Contacts />
    </Container>
     </Page>
 };
 export default ContactsPage;