import api from './contact.js'
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
const FetchApi=()=>{
    const [contacts, setContacts]=useState([]);
    const fetchContacts=async ()=>{
        const response = await api.get('/contacts');  
        return response.data;
    }
    useEffect(()=>{
        const getAllContacts=async ()=>{
            const allContacts=await fetchContacts();
            if(allContacts) setContacts(allContacts);
        }
        getAllContacts();
    }, []); 
    useEffect(()=>{
        const first_contact={
            "id":1,
            "name":"rupanshparth",
            "email":"rupansh@gmail.com"
        }
        const addData=async(first_contact)=>{
        const response=await api.post('/contacts',first_contact)
        setContacts([...contacts,response.data])
        console.log(contacts)
        }
        addData(first_contact);
    },[])
    const removeContactHandler=async (id)=>{
        await api.delete(`/contacts/${id}`)
        const updatedContacts=contacts.filter(contact=>contact.id!==id)
        setContacts(updatedContacts)    
    }
    return (
        <div>
            {contacts.map((contact, index) => (
                <div key={index}>
                    <h3>{contact.name}</h3>
                    <p>{contact.email}</p>
                </div>
            ))}
            <button onClick={()=>removeContactHandler(3)}>Delete</button>
        </div>
    )
}

export default FetchApi;