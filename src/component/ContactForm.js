import React, { useState } from "react";
const ContactForm = ({ onAddContact, onCancel }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if(!name.trim()){
            newErrors.name = "Please fill out this field";
        }
        if(!phone.trim()){
            newErrors.phone = "Please fill out this field";
        }else if(!/^0\d{10}$/.test(phone)){
            newErrors.phone = "The phone number is not valid";
        }
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return
        }
        const newContact = { 
            id: Date.now(),
             name,
             phone,
             email, 
            };
        onAddContact(newContact);

        setName('');
        setPhone('');
        setEmail('');
        setErrors({});
    };
    return (

    <div className='modal-wrapper'>
       <div className=' W-modal h-auto bg-earthy-dark rounded-sm shadow p-6 '>
         <p className='text-center text-lg mb-4 font-bold'>Add to phonebook</p>
         <form onSubmit={handleSubmit}>
         <div className='my-4  gap-1'>
             <label  className='flex my-auto'>Name *</label>
             <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' className={`inputAdd ${errors.name ? "border-b-red-600" :""}`}/>
             {errors.name &&(
                <p className="text-red-500 text-xs">{errors.name}</p>
             )}
           </div>
           
           <div className='my-3  gap-1'>
             <label className='flex my-auto'>Phone number *</label>
             <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone number' className={`inputAdd ${errors.phone ? "border-b-red-600" :""}`}/>
             {errors.phone &&(
                <p className="text-red-500 text-xs">{errors.phone}</p>
             )}
           </div>

           <div className='my-3  gap-1'>
             <label className='flex my-auto'>Email </label>
             <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='ex: name@example.com' className='inputAdd'/>
           </div>
           <div>
           <div className='flex justify-center mx-auto mt-6 gap-5'>
                <button type="button" onClick={onCancel} >
                    <img className='w-11  mb-1  cursor-pointer' src='../img/cancel.png'/>
                </button>
               
               <button type="submit">
                  <img className='w-11  mb-1  cursor-pointer' src='../img/checked.png'/>
               </button>
             
           </div>
           </div>

         </form>
       </div>
    </div>

        
    );
};

export default ContactForm;