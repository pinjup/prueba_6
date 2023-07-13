import icon_arcade from '../../assets/images/icon-arcade.svg'
import icon_advanced from '../../assets/images/icon-advanced.svg'
import icon_pro from '../../assets/images/icon-pro.svg'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export default function Select_plan() {
    const plans = [
        {name: 'Arcade', price: '9', img: icon_arcade},
        {name: 'Advanced', price: '12', img: icon_advanced},
        {name: 'Pro', price: '15', img: icon_pro},
    ]

    return (

        <div className="w-[90%] h-[440px] p-6 pt-7 rounded-lg bg-white flex flex-col gap-4">

            <div className="flex flex-col gap-1" id="text_container">
                <h1 className="text-[#02295a] font-semibold text-[22px]">Select your plan</h1>
                <p className="text-[#9699ab]">You Have the option of monthly or yearly billing.</p>
            </div>

            <div className="flex flex-col gap-3" id="plans_container">

                {plans.map(plan => (
                    
                    <div className='p-3 flex items-center gap-3 border rounded-lg' key={plan.name}>

                        <img className='w-9 h-10' src={plan.img} alt={`icon-${plan.name}`} />

                        <div id="text_container_plan">
                            <h2 className='text-[#02295a] font-semibold text-sm'>{plan.name}</h2>
                            <p className='text-xs text-[#9699ab]'>${plan.price}/mo</p>
                        </div>

                    </div>
                ))}

            </div>

            <div className='[&>span]:text-sm [&>span]:font-medium bg-[#f0f6ff] rounded-lg p-3 flex gap-4 justify-center items-center' id="date_container">

                <span className='text-[#02295a]'>Monthly</span>

                <div className='w-10 h-5 px-1 rounded-xl bg-[#02295a] flex items-center justify-start cursor-pointer'>
                    <div className='bg-white w-3 h-3 rounded-full'></div>
                </div>

                <span className='text-[#9699ab]'>Yearly</span>


            </div>

            


        </div>

    )
}
