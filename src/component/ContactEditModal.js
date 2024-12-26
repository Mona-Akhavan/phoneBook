import React, { useState } from "react";

const ContactEditModal = ({ contact, onSave, onCancel }) => {
    const [name, setName] = useState(contact.name || "");
    const [phone, setPhone] = useState(contact.phone || "");
    const [email, setEmail] = useState(contact.email);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrorsEdit = {};
        if (!name.trim()) {
            newErrorsEdit.name = "Please fill out this field";
        }
        if (!phone.trim()) {
            newErrorsEdit.phone = "Please fill out this field";
        }else if(!/^0\d{10}$/.test(phone)){
            newErrorsEdit.phone = "The contact number is not valid.";
        }
        if (Object.keys(newErrorsEdit).length > 0) {
            setErrors(newErrorsEdit);
            return;
        }
        onSave({ ...contact, name, phone, email });
        setErrors({});
    };

    return (
        <div className='modal-wrapper'>
            <div className=' W-modal h-auto bg-earthy-dark rounded-sm shadow p-6 '>
                <p className='text-center text-lg mb-4 font-bold'>Edit Contact</p>
                <form onSubmit={handleSubmit} >
                    <div className='my-3  gap-1'>
                        <label className='flex my-auto'> Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`inputAdd ${errors.name ? "border-b-red-600" :""}`} required />
                        {errors.name && (
                            <p className="text-red-500 text-xs">{errors.name}</p>
                        )}
                    </div>

                    <div className='my-3  gap-1'>
                        <label className='flex my-auto'> Phone number</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={`inputAdd ${errors.phone ? "border-b-red-600" :""}`} required />
                        {errors.phone && (
                            <p className="text-red-500 text-xs">{errors.phone}</p>
                        )}
                    </div>
                    <div className='my-3  gap-1'>
                        <label className='flex my-auto'> Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputAdd' />
                    </div>
                    <div className='flex justify-center mx-auto mt-6 gap-5'>
                        <button type="button" onClick={onCancel} >
                            <img className='w-11  mb-1  cursor-pointer' src='../img/cancel.png' />
                        </button>

                        <button type="submit">
                            <img className='w-11  mb-1  cursor-pointer' src='../img/checked.png' />
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactEditModal;