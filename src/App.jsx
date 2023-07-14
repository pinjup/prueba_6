import { useEffect, useState } from 'react';
import Personal_info from './components/personal_info';
import Select_plan from './components/select_plan';
import Add_ons from './components/add_ons';
import Finishing_up from './components/finishing_up';
import Thanks from './components/thanks';

function App() {
    const [windowSize, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const steps = [
        { number: 1, text: 'YOUR INFO' },
        { number: 2, text: 'SELECT PLAN' },
        { number: 3, text: 'ADD-ONS' },
        { number: 4, text: 'SUMMARY' },
    ];

    const [pages, setPages] = useState(1);

    useEffect(() => {
        const steps_elements = document.getElementsByClassName('step');

        const steps_array = [...steps_elements];

        steps_array.forEach((step) => {
            step.classList.remove('bg-[#bfe2fd]');
            step.classList.add('border', 'border-white', 'text-white');
        });

        steps_array.forEach((step) => {
            if (pages == step.getAttribute('id')) {
                step.classList.remove('border', 'border-white', 'text-white');
                step.classList.add('bg-[#bfe2fd]');
            } else if (pages == 5) {
                document
                    .getElementById('4')
                    .classList.remove('border', 'border-white', 'text-white');
                document.getElementById('4').classList.add('bg-[#bfe2fd]');
            }
        });
    }, [pages]);

    const view_pages = () => {
        if (pages == 1) {
            return <Personal_info />;
        } else if (pages == 2) {
            return <Select_plan />;
        } else if (pages == 3) {
            return <Add_ons />;
        } else if (pages == 4) {
            return <Finishing_up />;
        } else {
            return <Thanks />;
        }
    };

    return (
        <main className='relative bg-[#d6d9e6] w-full h-screen font-ubuntu min-w-[375px] min-h-[667px] flex flex-col laptop:flex-row laptop:h-full laptop:min-h-0 laptop:p-3 laptop:bg-white laptop:shadow-lg laptop:rounded-xl'>
            <div
                className={`w-full h-[172px] bg-[url("./assets/images/bg-sidebar-mobile.svg")] laptop:bg-[url("./assets/images/bg-sidebar-desktop.svg")] laptop:w-[30%] laptop:h-full laptop:bg-center laptop:rounded-lg bg-cover bg-no-repeat`}
            ></div>

            <div
                id='content'
                className='absolute top-0 w-full h-[90%] pt-10 flex flex-col gap-8 justify-start items-center laptop:relative laptop:w-[80%] laptop:h-full'
            >
                <ul className='flex gap-5 laptop:flex-col laptop:absolute laptop:-left-[34%]'>
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className='laptop:flex laptop:items-center laptop:gap-3'
                        >
                            <div
                                className='step w-9 h-9 text-md rounded-full border border-white text-white flex items-center justify-center'
                                id={`${step.number}`}
                            >
                                {step.number}
                            </div>

                            {windowSize >= 1440 ? (
                                <div className='flex flex-col'>
                                    <span className='text-sm text-[#9699ab]'>
                                        STEP {step.number}
                                    </span>
                                    <span className='text-white'>{step.text}</span>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </ul>

                {view_pages()}
            </div>

            {pages !== 5 ? (
                <div className='bg-white w-full h-[7.5%] absolute bottom-0 flex items-center p-3 laptop:w-[53%]  laptop:right-[84px] laptop:bottom-6 laptop:'>
                    {pages > 1 ? (
                        <button
                            onClick={() => setPages(pages - 1)}
                            type='button'
                            className='text-[#9699ab]'
                        >
                            Go Back
                        </button>
                    ) : (
                        <></>
                    )}

                    {pages == 4 ? (
                        <button
                            onClick={() => setPages(pages + 1)}
                            className='bg-[#473dff] text-white w-24 h-10 rounded-sm ml-auto laptop:h-11 laptop:rounded-md'
                            type='button'
                        >
                            Confirm
                        </button>
                    ) : (
                        <button
                            onClick={() => setPages(pages + 1)}
                            className='bg-[#02295a] text-white w-24 h-9 rounded-sm ml-auto laptop:h-10 laptop:rounded-md'
                            type='button'
                        >
                            Next Step
                        </button>
                    )}
                </div>
            ) : (
                <></>
            )}
        </main>
    );
}

export default App;
