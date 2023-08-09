import Link from 'next/link'
import React from 'react'
import {BiHome,BiLayout,BiMask} from "react-icons/bi"
import {TbDiamond,TbBellStar} from "react-icons/tb"

function Sidebar() {
  return (
    <section className='bg-[#F7F8FC] hidden lg:flex h-screen pt-4 flex-col'>
        <h1 className='font-bold text-lg mb-10 ml-4'>CLOL.GG</h1>
        <div className='flex flex-col'>
            <h4 className='text-sm mb-2 pl-4'>MENU</h4>
            <div className='flex flex-col gap-4'>
                <Link href="/" className='flex gap-2 pl-4 hover:bg-slate-200 py-2 duration-500 hover:font-bold items-center text-[16px]'>
                    <BiHome /> Overview
                </Link>
                <Link href="/" className='flex gap-2 pl-4 hover:bg-slate-200 py-2 duration-500 hover:font-bold items-center text-[16px]'>
                    <BiLayout /> Tierlist
                </Link>
                <Link href="/" className='flex gap-2 pl-4 hover:bg-slate-200 py-2 duration-500 hover:font-bold items-center text-[16px]'>
                    <BiMask /> Champions
                </Link>
                <Link href="/" className='flex gap-2 pl-4 hover:bg-slate-200 py-2 duration-500 hover:font-bold items-center text-[16px]'>
                    <TbDiamond /> Probuilds
                </Link>
                <Link href="/" className='flex gap-2 pl-4 hover:bg-slate-200 py-2 duration-500 hover:font-bold items-center text-[16px]'>
                    <TbBellStar /> Leaderboards
                </Link>
            </div>
        </div>
        <div className='flex flex-col mt-8'>
            <h4 className='text-sm mb-2 pl-4'>GAMES</h4>
            <div className='flex flex-col gap-4'>
                <Link href="/" className='flex gap-2 pl-4 hover:bg-slate-200 py-2 duration-500 hover:font-bold items-center text-[16px]'>
                    <img src="/icons/lol_icon.svg" className='w-5' /> League of Legends
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Sidebar