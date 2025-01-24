
import React from 'react'

const FormDetails = (props) => {
    const {formData} = props;
  return (
    <div>
            <div>
        <h1>success!</h1>
        <hr />
        <span>name : {formData.name}</span>
        <br />
        <span>email : {formData.email}</span>
        <br />
        <span>dob : {formData.dob}</span>
        <br />
        <span>password : {formData.password}</span>
        <br />
      </div>
    </div>
  )
}

export default FormDetails