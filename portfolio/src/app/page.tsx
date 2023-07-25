'use client'
import Lottie from 'lottie-react'
import React from 'react'
import avatarcasper from '../../public/avatars/avatar.png'
import Logo from './components/logo'


export default () => {
    return(
        <main className="">
            <div className="w-screen h-90% grid lg:grid-rows-2 lg:grid-flow-col lg:gap-80 justify-items-center lg:pt-28">
                <div className="block md:hidden lg:hidden w-80 pt-6">
                {/* <img src="/avatars/avatar.png" alt="avatar icon"/> */}
                {/* <Logo/> */}
                </div>
                <div className="hidden md:block lg:hidden w-80 pt-6">
                    {/* <img className="rounded-full" src={avatar} alt="Avatar"/> */}
                    {/* <Player
                        autoplay
                        loop
                        src='./avatar_loop'
                        style={{ height: '110%', width: '110%' }}
                        >
                        <Controls visible={false}/>
                    </Player> */}
                </div>
                <div className="row-span-2 lg:mt-12 3xl:mt-24">
                    <h2 className="text-3xl md:text-4xl 3xl:text-5xl font-medium text-slate-300 pl-10 pt-2 lg:pl-20 lg:pt-8 3xl:pl-0">Hello, I am</h2>
                    <h1 className="text-5xl md:text-6xl 3xl:text-8xl font-bold text-sky-500 pt-3 pl-10 lg:pl-20 3xl:pl-0">Casper</h1>
                    <h1 className="text-5xl md:text-6xl 3xl:text-8xl font-bold text-sky-500 pl-10 lg:pl-20 3xl:pl-0">Van Damme</h1>
                    <h4 className="text-2xl md:text-3xl 3xl:text-4xl font-medium text-slate-200 pt-3 pl-10 lg:pl-20 3xl:pl-0">Student next web development at Howest</h4>
                </div>
                <div className="hidden lg:block lg:row-span-2 lg:w-96 3xl:hidden">
                    {/* <img className="rounded-full" src={avatar} alt="Avatar"/> */}
                    {/* <Player
                        autoplay
                        loop
                        src='./avatar_loop'
                        style={{ height: '100%', width: '100%' }}
                        >
                        <Controls visible={false}/>
                    </Player> */}
                </div>
                <div className="hidden 3xl:block lg:row-span-2 lg:w-96">
                    {/* <img className="rounded-full" src={avatar} alt="Avatar"/> */}
                    {/* <Player
                        autoplay
                        loop
                        src='./avatar_loop'
                        style={{ height: '130%', width: '130%' }}
                        >
                        <Controls visible={false}/>
                    </Player> */}
                </div>
            </div>
        </main>
    )
}