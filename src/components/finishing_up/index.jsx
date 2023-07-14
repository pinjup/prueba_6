import { useContext } from 'react';
import infoContext from '../context/infoContext';

export default function Finishing_up() {
    const { date } = useContext(infoContext);
    return (
        <div className='w-[90%] h-[340px] p-6 pt-7 rounded-lg bg-white flex flex-col gap-4 laptop:gap-8 laptop:p-0 laptop:px-14'>
            <div className='flex flex-col gap-1' id='text_container'>
                <h1 className='text-[#02295a] font-semibold text-[22px] text-3xl'>Finishing up</h1>
                <p className='text-[#9699ab]'>
                    Double-check everything looks OK before confirming.
                </p>
            </div>

            <div className='flex flex-col gap-1 laptop:gap-2' id='services_container'>
                <div className='p-4 flex flex-col gap-3 bg-[#f0f6ff] rounded-lg' id='plan'>
                    <div className='flex justify-between items-center relative laptop:pb-6'>
                        <div>
                            <h2 className='text-md font-semibold text-[15px] text-[#02295a]'>
                                Arcade({date ? 'Monthly' : 'Yearly'})
                            </h2>
                            <span className='underline text-[15px] text-[#9699ab]'>Change</span>
                        </div>

                        <span className='text-[#02295a] font-semibold'>
                            {date ? <>$9/mo</> : <>$90/yr</>}
                        </span>
                        <div className='w-full h-[1px] bg-[#d6d9e6] absolute -bottom-2 laptop:bottom-1'></div>
                    </div>

                    <div className='laptop:flex laptop:flex-col laptop:gap-3'>
                        <div className='flex justify-between'>
                            <span className='text-[#9699ab] text-[15px]'>Online service</span>
                            <span className='text-[#02295a] font-medium'>
                                +{date ? <>$1/mo</> : <>$10/yr</>}
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='text-[#9699ab] text-[15px]'>Larger Storage</span>
                            <span className='text-[#02295a] font-medium'>
                                +{date ? <>$2/mo</> : <>$20/yr</>}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between p-4'>
                    <span className='text-[#9699ab] text-[15px]'>Total (per month)</span>
                    <span className='font-bold text-[#473dff]'>
                        +{date ? <>$12/mo</> : <>$120/yr</>}
                    </span>
                </div>
            </div>
        </div>
    );
}
