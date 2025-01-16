'use client'

import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"

export default function Header(){

    const refMenu = useRef(null)

    function OpenMenu(){
        refMenu.current.classList.toggle('h-28')
    }

    function closeMenu(){
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
                    <li onClick={closeMenu} className="font-medium"> <Link href='/trip'>Viagem</Link> </li>
                    <li onClick={closeMenu}className="font-medium"><Link href='/work'>Trabalho</Link></li>
                    <li onClick={closeMenu}className="font-medium"><Link href='/'>Geral</Link></li>
                </ul>
            </div>

            <ul className="hidden lg:flex lg:justify-around lg:w-2/3 mt-4">
                <li className="font-medium"> <Link href='/trip'>Viagem</Link> </li>
                <li className="font-medium"><Link href='/work'>Trabalho</Link></li>
                <li className="font-medium"><Link href='/'>Geral</Link></li>
            </ul>

        </nav>
    )
}