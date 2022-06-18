import React from "react"
const ReadOnly=({contact,clickOnEdit})=>{
    return (
        <tr>
              <td >{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={()=>clickOnEdit(contact.id,contact)}>Edit</button>
              </td>
        </tr>
    );

}
export default ReadOnly;