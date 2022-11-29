// import { useEffect } from "react";
// import { TailSpin } from 'react-loader-spinner';
// import { useDispatch, useSelector } from "react-redux";
// import { deleteContact, fetchContacts } from "redux/operations";
// import { selectContacts, selectFilter, selectError, selectLoading } from "redux/selectors";
// import { ContactsList, ContactItem, DeleteButton, Error } from "./Contacts.styled";
// import { Loading } from "components/Loading/Loading";

export const Contacts = () => {
    // const dispatch = useDispatch();
    // const contacts = useSelector(selectContacts);
    // const filter = useSelector(selectFilter);
    // const isLoading = useSelector(selectLoading);
    // const isError = useSelector(selectError);
    
    // const getVisibleContacts = () => {
    //     if(filter){
    //         const normalizedFilter = filter.toLowerCase();
    //         return contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));
    //     }        
    //     return contacts;
    //   };

    // useEffect(() => {
    //     dispatch(fetchContacts());
    //   }, [dispatch]);

    return (<><div>OUR CONTACTS</div>
        {/* {isLoading && <Loading />} 
        {isError && <Error>Sorry, something went wrong... Please, try again</Error>}
        {contacts.length>0 && 
        <ContactsList>                  
            {getVisibleContacts().map((item) => {               
                return <ContactItem key={item.id}>
                    <p>{item.name}: {item.phone}</p>
                    <DeleteButton type="button" onClick={()=>dispatch(deleteContact(item.id))} >x</DeleteButton>
                </ContactItem>
            })}
        </ContactsList>}    */}
    </>)
        
}


