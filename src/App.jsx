// import Sidebar_mobile from './assets/images/bg-sidebar-mobile.svg'

import { useEffect } from "react"
import Personal_info from "./components/personal_info"
import Select_plan from "./components/select_plan"
import Add_ons from "./components/add_ons"
import Finishing_up from "./components/finishing_up"



function App() {
    
    useEffect(() => {
        document.getElementById('button1').classList.add('bg-[#bfe2fd]')
        document.getElementById('button1').classList.remove('border', 'border-white', 'text-white')
    },[])

    const buttons_list = [1, 2, 3, 4]

    const bg_button = (id) => {
        const buttons = document.getElementsByClassName('button')

        const buttonsArray = [...buttons]

        buttonsArray.forEach(button => {
            button.classList.remove('bg-[#bfe2fd]')
            button.classList.add('border', 'border-white', 'text-white')
        })

        const bg_button = document.getElementById(id)
        bg_button.classList.remove('border', 'border-white', 'text-white')
        bg_button.classList.add('bg-[#bfe2fd]')


        
    }


    return (
        <main className="relative bg-[#d6d9e6] w-full h-screen font-ubuntu min-w-[375px]">

            <div className={`w-full h-[172px] bg-[url("./assets/images/bg-sidebar-mobile.svg")] bg-cover bg-no-repeat`}></div>

            <div id='content' className='absolute top-0 w-full h-[90vh] pt-10 flex flex-col gap-8 justify-start items-center'>

                <ul className='flex gap-5'>

                    {buttons_list.map(button => (
                
                        <button className='button w-9 h-9 text-md rounded-full border border-white text-white' onClick={() => bg_button(`button${button}`)} id={`button${button}`} key={button}>{button}</button>
                    ))}

                    
                </ul>

                {/* <Personal_info /> */}

                {/* <Select_plan /> */}

                {/* <Add_ons /> */}
                
                <Finishing_up />

            </div>


        </main>
    )
}


export default App
