import { useEffect, useState } from "react";
import { ContactListStyles } from "./style";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UpdateModal } from "../modalUpdateContact";


export const ContactList = () => {
    const [contacts,setContacts]=useState([])
    const [showModal, setShowModal] = useState(false);
    const [contactToEdit,setcontactToEdit]=useState()
    const token = localStorage.getItem('token') || ""

   

    const handleUpdate = (updatedData) => {
   
    };

    useEffect(()=>{
        const getClient=async ()=>{
            try {
                
                const response= await api.get('/api/clients', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setContacts(response.data.contacts)
            } catch (error) {
                toast.warn(`${error.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
        getClient()
       
      },[contacts])


      

  const deleteContact = async (contactId) => {
    try {
         await api.delete(`/api/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        toast.info('contact successfylly deleted', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    } catch (error) {
        toast.warn(`${error.response.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  };

const handleEditbutton=(idContact)=>{
    setShowModal(true)
    setcontactToEdit(idContact)
}

  return (
    <ContactListStyles>{
        contacts.length==0?(
        <p>No contacts yet... Add new ones!</p>
        ):(
            contacts.map((contact, index) => (
                <li key={index}>
                  <div className="contact-info">
                    <span>Name: {contact.nomeCompleto}</span>
                    <span>Email: {contact.email}</span>
                    <span>Phone: {contact.telefone}</span>
                    <span>Created At: {new Date(contact.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="contact-actions">
                    <button onClick={() => handleEditbutton(contact.id)}>Edit</button>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                  </div>
                </li>
              ))
        )

        }
        <UpdateModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onUpdate={handleUpdate}
        idEdit={contactToEdit}
      />

    </ContactListStyles>
  );
};

export default ContactList;
