
export default function Personal_info() {
    const personal_inputs = [
        {name: 'Name', placeholder: 'e.g. Stephen King'},
        {name: 'Email Address', placeholder: 'e.g. stephenking@lorem.com'},
        {name: 'Phone Number', placeholder: 'e.g. +1 234 567 890'},
    ]

    return (

        <div className="w-[90%] h-[365px] p-6 pt-7 rounded-lg bg-white flex flex-col gap-4">

            <div className="flex flex-col gap-1" id="text_container">
                <h1 className="text-[#02295a] font-semibold text-[22px]">Personal info</h1>
                <p className="text-[#9699ab]">Please provide your name, email address and phone number</p>
            </div>

            <div className="flex flex-col gap-3" id="personal_inputs_container">

                {personal_inputs.map(input => (

                    <div className="flex flex-col" key={input.name}>

                        <label className="text-[#02295a] text-xs font-medium" htmlFor={input.name}>{input.name}</label>
                        <input className="border p-2 rounded-sm" type="text" name={input.name} id={input.name} placeholder={input.placeholder} />

                    </div>

                ))}

            </div>


        </div>

    )
}
