
import { useState } from 'react';
import './App.css';
import UsersForm from './UsersForm';
import FormDetails from './FormDetails'; 

function App() {

  const data = [
    {
      id : 'name',
      label : 'Name',
      inputType : 'text',
      placeholder : 'Your Name',
      buttonName : 'Next',
    },
    {
      id : 'email',
      label : 'Email',
      inputType : 'email',
      placeholder : 'Your Email',
      buttonName : 'Next',
    },
    {
      id : 'dob',
      label : 'DOB',
      inputType : 'date',
      placeholder : '',
      buttonName : 'Next',
    },
    {
      id : 'password',
      label : 'Password',
      inputType : 'password',
      placeholder : 'Your Password',
      buttonName : 'Submit',
    },
  ]
  const [forms , setForms] = useState(data);
  const [index , setIndex] = useState(0);
  const [formData , setFormData] = useState(
    {
      name : '',
      email : '',
      dob : '',
      password : ''
    }
  )
  const [isFormSubmit , setIsFormSubmit] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(index === forms.length - 1){
      console.log('form submited')
      setIsFormSubmit(true)
    }else{
      setIndex((idx)=> idx + 1);
    }
  }
  const handleBack=(e)=>{
    e.preventDefault();
    setIndex((idx)=> idx-1);
  }
  const handleChange=(e)=>{
    const id = (e.target.id);
    const val = (e.target.value);
    const copyFormData = {...formData};
    copyFormData[id] = val;
    setFormData(copyFormData);
  }
  console.log('formdata ->', formData);
  return ( 
    <div className="App">
      {
        !isFormSubmit ? 
          <UsersForm 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBack={handleBack}
          index={index}
          formData={formData}
          forms={forms}
          />
        : 
          <FormDetails 
          formData={formData}
          />  
      }
    </div>
  );
}

export default App;
