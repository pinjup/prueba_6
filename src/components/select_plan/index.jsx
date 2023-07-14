import icon_arcade from '../../assets/images/icon-arcade.svg';
import icon_advanced from '../../assets/images/icon-advanced.svg';
import icon_pro from '../../assets/images/icon-pro.svg';
import { useContext } from 'react';
import infoContext from '../context/infoContext';

export default function Select_plan() {
    const { date, setDate, choosePlan, selectChoosePlan } = useContext(infoContext);

    const plans = [
        { name: 'Arcade', priceMonthly: '9', priceYearly: '90', img: icon_arcade },
        {
            name: 'Advanced',
            priceMonthly: '12',
            priceYearly: '120',
            img: icon_advanced,
        },
        { name: 'Pro', priceMonthly: '15', priceYearly: '150', img: icon_pro },
    ];

    return (
        <div
            className={`w-[90%] ${
                date ? 'h-[440px]' : 'h-[490px]'
            } p-6 pt-7 rounded-lg bg-white flex flex-col gap-4 laptop:gap-8 laptop:p-0 laptop:px-14`}
        >
            <div className='flex flex-col gap-1' id='text_container'>
                <h1 className='text-[#02295a] font-semibold text-[22px] laptop:text-3xl'>
                    Select your plan
                </h1>
                <p className='text-[#9699ab]'>You Have the option of monthly or yearly billing.</p>
            </div>

            <div className='flex flex-col gap-3 laptop:flex-row' id='plans_container'>
                {plans.map((plan) => (
                    <div
                        onClick={() => selectChoosePlan(plan.name)}
                        className={`p-3 flex items-center gap-3 border ${
                            plan.name == choosePlan ? 'border-[#473dff] bg-[#f0f6ff]' : ''
                        } rounded-lg laptop:flex-col laptop:items-start laptop:gap-8 laptop:w-[30%]`}
                        key={plan.name}
                    >
                        <img className='w-9 h-10' src={plan.img} alt={`icon-${plan.name}`} />

                        <div id='text_container_plan'>
                            <h2 className='text-[#02295a] font-semibold text-sm'>{plan.name}</h2>
                            {date ? (
                                <p className='text-xs text-[#9699ab]'>
                                    ${plan.priceMonthly}
                                    /mo
                                </p>
                            ) : (
                                <>
                                    <p className='text-xs text-[#9699ab]'>
                                        ${plan.priceYearly}
                                        /yr
                                    </p>
                                    <span className='text-xs text-[#02295a]'>2 months free</span>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div
                className='[&>span]:text-sm [&>span]:font-medium bg-[#f0f6ff] rounded-lg p-3 flex gap-4 justify-center items-center'
                id='date_container'
            >
                <span className='text-[#02295a]'>Monthly</span>

                <div
                    onClick={() => setDate(!date)}
                    className={`w-10 h-5 px-1 rounded-xl bg-[#02295a] flex items-center ${
                        date ? 'justify-start' : 'justify-end'
                    } cursor-pointer`}
                >
                    <div className='bg-white w-3 h-3 rounded-full'></div>
                </div>

                <span className='text-[#9699ab]'>Yearly</span>
            </div>
        </div>
    );
}
