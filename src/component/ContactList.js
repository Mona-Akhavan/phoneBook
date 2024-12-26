const ContactList = ({ contacts, onRemove, onEdit ,bgPaper}) => {
    return (

        <div className={`h-3/4  W-div bg-paper-${bgPaper} mt-2 rounded-sm py-4 pr-3 pl-4 relative`}>
            <p className='font-bold text-lg'>contacts</p>
            <div className='flex w-full h-[90%] my-4'>
                <div className='w-full overflow-y-auto '>
                    {contacts.length > 0 ? (
                        contacts?.map((contact) => (
                            <div className='w-[95%] mb-6' key={contact.id}>
                                <div className='flex justify-between'>
                                    <img className='w-5 mb-1' src='../img/user.png' />
                                   <div className="flex gap-2">
                                    <button onClick={() => onRemove(contact.id)}><img className='w-4 mb-1' src='../img/delete.png' /></button>
                                    <button onClick={() => onEdit(contact)}><img className='w-4 mb-1' src='../img/edit.png' /></button>
                                   </div>
                                </div>
                                <ul className='border-t-2 border-black text-xs'>
                                    <li className='border-b-2 border-[#0001] p-1'>
                                        NAME : {contact.name}
                                    </li>
                                    <li className='border-b-2 border-[#0001] p-1'>
                                        MOBILE : {contact.phone}
                                    </li>
                                    {contact.email &&(
                                        <li className='border-b-2 border-[#0001] p-1'>
                                        E-MAIL : {contact.email}
                                    </li>
                                    )}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-red-600">No contacts found</p>
                    )}
                    <div className='absolute w-[90%] h-10 bottom-0 left-0  backdrop-blur-[1px] '></div>
                </div>

                <div className="w-[30px] flex flex-col justify-between">
                    {Array(6).fill().map((_, index) => (<div key={index} className="Circle"></div>))}
                </div>

            </div>
        </div>


    )
}
export default ContactList;