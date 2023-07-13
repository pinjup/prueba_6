import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export default function Finishing_up() {

    const pick_add_ons = [
        {name: 'Online service', text: 'Accers to multiplayer games', price: '1', checked: true},
        {name: 'Larger storage', text: 'Extra 1TB of cloud save', price: '2', checked: true},
        {name: 'Customizable profile', text: 'Custom theme on your profile', price: '2', checked: false},
    ]

    return (

        <div className="w-[90%] h-[340px] p-6 pt-7 rounded-lg bg-white flex flex-col gap-4">

            <div className="flex flex-col gap-1" id="text_container">
                <h1 className="text-[#02295a] font-semibold text-[22px]">Finishing up</h1>
                <p className="text-[#9699ab]">Double-check everything looks OK before confirming.</p>
            </div>

            <div className='flex flex-col gap-1' id='services_container'>

                <div className='p-4 flex flex-col gap-3 bg-[#f0f6ff] rounded-lg' id="plan">

                    <div className='flex justify-between items-center relative'>

                        <div>
                            <h2 className='text-md font-semibold text-[15px] text-[#02295a]'>Arcade(Monthly)</h2>
                            <span className='underline text-[15px] text-[#9699ab]'>Change</span>
                        </div>

                        <span className='text-[#02295a] font-semibold'>$9/mo</span>
                        <div className='w-full h-[1px] bg-[#d6d9e6] absolute -bottom-2'></div>

                    </div>

                    <div>

                        <div className='flex justify-between'>
                            <span className='text-[#9699ab] text-[15px]'>Online service</span>
                            <span className='text-[#02295a] font-medium'>+$1/mo</span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='text-[#9699ab] text-[15px]'>Larger Storage</span>
                            <span className='text-[#02295a] font-medium'>+$2/mo</span>
                        </div>
                        
                    </div>

                </div>

                <div className='flex items-center justify-between p-4'>
                    <span className='text-[#9699ab] text-[15px]'>Total (per month)</span>
                    <span className='font-bold text-[#473dff]'>+$12/mo</span>
                </div>

            </div>

            


        </div>

    )
}
