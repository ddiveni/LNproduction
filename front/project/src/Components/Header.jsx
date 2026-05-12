import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiPlus } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import { Link } from 'react-router-dom';

function Header() {
    // Перевел названия и ключи на русский
    const меню = [
        {
            название: 'ГЛАВНАЯ',
            иконка: HiHome,
            путь: '/'
        },
        {
            название: 'ПОИСК',
            иконка: HiMagnifyingGlass,
            путь: '/watchlist'
        },
        {
            название: 'МОЙ СПИСОК',
            иконка: HiPlus,
            путь: '/'
        }
    ]

    return (
        <div className='flex items-center justify-between p-5 px-10'>
            <div className='flex gap-8 items-center'>
                {/* Логотип LN PRODUCTION */}
                <Link to="/">
                    <img src={logo} className='w-[80px] md:w-[115px] object-cover cursor-pointer' alt="логотип" />
                </Link>
                

                <div className='hidden md:flex gap-8'>
                    {меню.map((пункт) => (
                        <Link key={пункт.название} to={пункт.путь}>
                            <HeaderItem name={пункт.название} Icon={пункт.иконка} />
                        </Link>
                    ))}
                </div>

                <div className='flex md:hidden gap-5'>
                    {меню.map((пункт) => (
                        <Link key={пункт.название} to={пункт.путь}>
                            <HeaderItem name={''} Icon={пункт.иконка} />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Аватар пользователя */}
            <img 
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full border-2 border-transparent hover:border-gray-400 cursor-pointer transition-all' 
                alt="аватар"
            />
        </div>
    )
}

export default Header