import  { Fragment, useState } from "react"
import data from "./data.json"
import {nanoid} from "nanoid";
import Editform from "./components/Editform";
import ReadOnly from "./components/ReadOnly";
const App=()=>
{
  const [contact,setContact]=useState(data);
  const [edit,setEdit]=useState("");
  const [newentry,setNewEntry]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  } )
  const [neweditentry,setNewEditEntry]=useState({
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
    
    setNewEntry(objcreation);
    
  }

  const handleChangeInEditForm=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute("name");
    const value=event.target.value;
    console.log(fieldName)
    console.log(value)

  
    const objcreation={...neweditentry}
    objcreation[fieldName]=value;
    setNewEditEntry(objcreation);

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

  const clickOnEdit=(id,currcontact)=>{
    
    setEdit(id);
    setNewEditEntry(currcontact);
  }

  const handleEditSubmit=(event)=>{
    event.preventDefault();

    const editform={
      id:edit,
      fullName:neweditentry.fullName,
      address:neweditentry.address,
      phoneNumber:neweditentry.phoneNumber,
      email:neweditentry.email

    }

    const index=contact.findIndex((contact)=>contact.id===edit)
    console.log(index)

    contact[index]=editform;
    setEdit("")

  }

 
    

  return (
    <div>
      <h1>Contact Details</h1>
      <form onSubmit={handleEditSubmit}>
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
        {(edit===contact.id)?<Editform neweditentry={neweditentry} handleChangeInEditForm={handleChangeInEditForm}></Editform>:<ReadOnly contact={contact} setEdit={setEdit}  clickOnEdit={clickOnEdit}></ReadOnly>}
            
            </Fragment>
          )

        }
      </tbody>
    </table>
    </form>
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