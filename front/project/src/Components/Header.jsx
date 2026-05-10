import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiPlus } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import { Link } from 'react-router-dom'; // 1. Импортируем Link

function Header() {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
            path: '/' // 2. Добавляем путь для главной
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            path: '/' // Пока пусть ведет на главную или создай /search
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus,
            path: '/' // То же самое
        }
    ]

    return (
        <div className='flex items-center justify-between p-5 px-10'>
            <div className='flex gap-8 items-center'>
                {/* Логотип теперь тоже ведет на главную */}
                <Link to="/">
                    <img src={logo} className='w-[80px] md:w-[115px] object-cover cursor-pointer' alt="logo" />
                </Link>
                
                {/* Десктопное меню */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <Link key={item.name} to={item.path}>
                            <HeaderItem name={item.name} Icon={item.icon} />
                        </Link>
                    ))}
                </div>

                {/* Мобильное меню */}
                <div className='flex md:hidden gap-5'>
                    {menu.map((item) => (
                        <Link key={item.name} to={item.path}>
                            <HeaderItem name={''} Icon={item.icon} />
                        </Link>
                    ))}
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            className='w-[40px] rounded-full border-2 border-transparent hover:border-gray-400 cursor-pointer transition-all' />
        </div>
    )
}

export default Header