
import React from 'react'

const UsersForm = (props) => {
    const {handleSubmit,handleBack,
        handleChange,index,forms,formData
    } = props
  return (
    <div>
        <form className="container" onSubmit={handleSubmit}>
        {
          index > 0 && <a href="/"
          onClick={handleBack}
          >
            Back
          </a> 
        }
        <label>{forms[index].label}</label>
        <input
        required
        onChange={handleChange}
        value={formData[forms[index].id]}
        id={forms[index].id}
        type={forms[index].inputType}
        placeholder={forms[index].placeholder}
        />
        <button>{forms[index].buttonName}</button>
      </form>
    </div>
  )
}

export default UsersForm