import { useContext } from 'react';
import infoContext from '../context/infoContext';

export default function Personal_info() {
    const { value, setValue } = useContext(infoContext);

    const personal_inputs = [
        { name: 'Name', placeholder: 'e.g. Stephen King', id: 1 },
        { name: 'Email Address', placeholder: 'e.g. stephenking@lorem.com', id: 2 },
        { name: 'Phone Number', placeholder: 'e.g. +1 234 567 890', id: 3 },
    ];

    const changeValue = (event, id) => {
        setValue({ ...value, [id]: event.target.value });
    };

    return (
        <div className='w-[90%] h-[365px] p-6 pt-7 rounded-lg bg-white flex flex-col gap-4 laptop:gap-7 laptop:p-0 laptop:px-14'>
            <div className='flex flex-col gap-1' id='text_container'>
                <h1 className='text-[#02295a] font-semibold text-[22px] laptop:text-3xl'>
                    Personal info
                </h1>
                <p className='text-[#9699ab]'>
                    Please provide your name, email address and phone number
                </p>
            </div>

            <div className='flex flex-col gap-3 laptop:gap-6' id='personal_inputs_container'>
                {personal_inputs.map((input) => (
                    <div className='flex flex-col' key={input.name}>
                        <label className='text-[#02295a] text-xs font-medium' htmlFor={input.name}>
                            {input.name}
                        </label>
                        <input
                            className='border p-2 rounded-sm'
                            type={`${input.name == 'Email Address' ? 'email' : 'text'}`}
                            name={input.name}
                            id={input.name}
                            placeholder={input.placeholder}
                            value={value[input.id]}
                            onChange={(event) => changeValue(event, input.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
