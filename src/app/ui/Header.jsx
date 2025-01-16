'use client'

import Image from "next/image"
import { useRef } from "react"

export default function Header(){

    const refMenu = useRef(null)

    function OpenMenu(){
        refMenu.current.classList.toggle('h-28')
    }



    return(
        <nav className=" w-full lg:flex lg:justify-center">
            <div className="flex flex-col items-end px-3 pt-3 w-full lg:hidden">
                <Image
                onClick={OpenMenu}
                className="lg:hidden"
                src='/menu.svg'
                width={30}
                height={30}
                alt="Menu Hamburguer"
                />
                <ul ref={refMenu} className=" transition-[height] transform duration-300 ease-in-out overflow-hidden h-0 flex flex-col items-end w-full mt-1 bg-orange-400  px-3 justify-around">
                    <li className="font-medium">Viagem</li>
                    <li className="font-medium">Trabalho</li>
                    <li className="font-medium">Banco</li>
                </ul>
            </div>

            <ul className="hidden lg:flex lg:justify-around lg:w-2/3 mt-4">
                <li className="font-medium">Viagem</li>
                <li className="font-medium">Trabalho</li>
                <li className="font-medium">Banco</li>
            </ul>

        </nav>
    )
}