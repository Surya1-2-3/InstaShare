import {useState} from 'react'
import api from './contact.js'
import {toast}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const GetData=()=>{
    const [id,setId]=useState(0);
    const [name,setName]=useState('')
    const [email,setEmail]=useState("")
    const [contacts,setContacts]=useState([])
    const [id1,setId1]=useState("");
    const add=async (e)=>{
        e.preventDefault()
        console.log(name,email)
        setId(id+1)
        setName('')
        const data={
            "id":String(id),
            "name":name,
            "email":email,
        }
        const response=await api.post('/contacts',data)
        setContacts([...contacts,response.data])
        setName('')
        setEmail('')
    }
    const deleteItem=async (id1)=>{
        console.log(id1);
        try{
        await api.delete(`/contacts/${id1}`)
        const newList=contacts.filter(contact=>contact.id!==id1)
        setContacts(newList)
        }
        catch(error){
            console.log("not found")
        }
        setId1("")
    }
    return (
        <>
        <form onSubmit={add}>
            <label>Name</label>
            <input type="text" 
            value={name}
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label>email</label>
            <input type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <button type="submit">Submit</button>
            
        </form>
        <input type="number" 
            placeholder="Enter the id" value={id1}
            onChange={(e)=>setId1(e.target.value)}></input>
            <button type="submit" onClick={()=>deleteItem(id1)}>Delete</button>
        <div>
            {contacts.map(contact=>{
                return(
                    <>
                    <h1>{contact.name}</h1>
                    <h1>{contact.email}</h1>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default GetData;