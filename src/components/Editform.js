import React from 'react'

function Editform({neweditentry,handleChangeInEditForm}) {
  return (
    <tr>
        <td>
            <input 
            type="text"
            name='fullName'
            value={neweditentry.fullName}
            required="required"
            onChange={handleChangeInEditForm}
            ></input>
        </td>
        <td>
            <input 
            type="text"
            value={neweditentry.address}
            name="address"
            required="required"
            onChange={handleChangeInEditForm}
            ></input>
        </td>
        <td>
            <input 
            type="text"
            name="phoneNumber"
            required="required"
            value={neweditentry.phoneNumber}
            onChange={handleChangeInEditForm}
            ></input>
        </td>
        <td>
            <input 
            type="email"
            value={neweditentry.email}
            name="email"
            required="required"
            onChange={handleChangeInEditForm}
            ></input>
        </td>
        <td>
            <button type='Submit'>Save</button>
        </td>
    </tr>
  )
}

export default Editform