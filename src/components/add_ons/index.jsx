import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useContext } from 'react';
import infoContext from '../context/infoContext';

export default function Add_ons() {
    const { date } = useContext(infoContext);

    const pick_add_ons = [
        {
            name: 'Online service',
            text: 'Accers to multiplayer games',
            priceMonthly: '1',
            priceYearly: '10',
            checked: true,
        },
        {
            name: 'Larger storage',
            text: 'Extra 1TB of cloud save',
            priceMonthly: '2',
            priceYearly: '20',
            checked: true,
        },
        {
            name: 'Customizable profile',
            text: 'Custom theme on your profile',
            priceMonthly: '2',
            priceYearly: '20',
            checked: false,
        },
    ];

    return (
        <div className='w-[90%] h-[360px] p-6 pt-7 rounded-lg bg-white flex flex-col gap-4 laptop:gap-8 laptop:p-0 laptop:px-14'>
            <div className='flex flex-col gap-1' id='text_container'>
                <h1 className='text-[#02295a] font-semibold text-[22px] laptop:text-3xl'>
                    Pick add-ons
                </h1>
                <p className='text-[#9699ab]'>Add-ons help enhance your gaming experience.</p>
            </div>

            <div
                className='[&>div>label>span:nth-child(1)>svg]:fill-[#473dff] [&>div>label>span:nth-child(1)]:p-0 [&>div>label>span:nth-child(1)]:pl-2 [&>div>label>span:nth-child(2)]:w-[90%] [&>span]:font-medium'
                id='date_container'
            >
                <FormGroup className='w-full flex flex-col gap-2 pl-3 [&>label]:w-full laptop:gap-4'>
                    {pick_add_ons.map((add_on) => (
                        <FormControlLabel
                            className={`border ${
                                add_on.checked ? 'border-[#473dff] bg-[#f0f6ff]' : ''
                            } rounded-lg flex margin-0 laptop:p-1`}
                            key={add_on.name}
                            control={<Checkbox checked={add_on.checked} />}
                            label={
                                <div className='w-full p-2 flex justify-between items-center'>
                                    <div id='text_container_check'>
                                        <span className='text-sm font-semibold text-[#02295a]'>
                                            {add_on.name}
                                        </span>
                                        <p className='text-[#9699ab] text-[13px]'>{add_on.text}</p>
                                    </div>

                                    <span className='text-[#473dff] text-sm'>
                                        {date ? (
                                            <>
                                                +$
                                                {add_on.priceMonthly}
                                                /mo
                                            </>
                                        ) : (
                                            <>
                                                +$
                                                {add_on.priceYearly}
                                                /yr
                                            </>
                                        )}
                                    </span>
                                </div>
                            }
                        />
                    ))}
                </FormGroup>
            </div>
        </div>
    );
}
