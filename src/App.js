import react, { Fragment, useState } from "react"
import data from "./data.json"
import {nanoid} from "nanoid";
import Editform from "./components/Editform";
const App=()=>
{
  const [contact,setContact]=useState(data);
  const [edit,setEdit]=useState(false);
  const [newentry,setNewEntry]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  } )
  
  const handleChangeInAddForm=(event)=>{
    event.preventDefault();
    
    const fieldName=event.target.getAttribute("name");
    const value=event.target.value;

    const objcreation={...newentry}
    objcreation[fieldName]=value;
    
    setNewEntry(objcreation)
    
  }
  const addNewContactSubmit=(event)=>{
    event.preventDefault();
    
    const obj={
      id:nanoid(),
      fullName:newentry.fullName,
      address:newentry.address,
      phoneNumber:newentry.phoneNumber,
      email:newentry.email
    }
    const newData=[...contact,obj];
    setContact(newData);
    document.getElementById("myform").reset();


  }

 
    

  return (
    <div>
      <h1>Contact Details</h1>
    <table>
      <thead>
        <tr>
        <th>FullName</th>
        <th>Address</th>
        <th>PhoneNumber</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contact.map((contact)=>
            <Fragment>
        {edit?<Editform contact={contact}></Editform>:null}
            <tr>
              <td >{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={()=>{setEdit(true)}}>Edit</button>
              </td>
            </tr>
            </Fragment>
          )

        }
      </tbody>
    </table>
        <h1>Add New Contact</h1>
        <div>
        <form onSubmit={addNewContactSubmit} id="myform" method="post">
          <input
          type="text"
          required="required"
          placeholder="Enter Your Name"
          name="fullName"
          onChange={handleChangeInAddForm}
          
          
          ></input>
          <input
          type="text"
          required="required"
          placeholder="Enter Your Address"
          name="address"
          onChange={handleChangeInAddForm}
         
          ></input>
          <input
          type="text"
          required="required"
          placeholder="Enter Your Phone Number"
          name="phoneNumber"
          onChange={handleChangeInAddForm}
          
         
          ></input>
          <input
          type="email"
          required="required"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChangeInAddForm}
         
          ></input>
          <button
          type="submit"
          >Add</button>


        </form>
        </div>
    
    </div>
    
  )

}
 export default App