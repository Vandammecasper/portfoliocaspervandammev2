'use client'
import { useState } from "react"
import Logo from "../components/logo";
export default () => {

    const [tooltipText, setTooltipText] = useState('Click here to send me an email');
    const [copied, setCopied] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    function copyToClipboard(text:any) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('Click here to send me an email');
        document.body.removeChild(el);
        setCopied(true);
        setTooltipText('Click here to send me an email');
        setTooltipVisible(true);
    }

    function resetTooltipText() {
        if (copied) {
        setTooltipText('Click here to send me an email');
        setCopied(false);
        setTooltipVisible(false);
        }
    }

    return(
        <main className="">
            <div className="w-screen h-100% grid lg:grid-rows-2 lg:grid-flow-col xl:gap-24 maxlg:justify-items-center lg:pt-28 overflow-auto">
                <div className="block md:hidden lg:hidden w-80">
                    <Logo/>
                </div>
                <div className="hidden md:block lg:hidden w-80">
                    <Logo/>
                </div>
                <div className="row-span-2 xl:mt-10 lg:w-7/12 sm:p-10 xl:p-0">
                    <div className="flex">
                        <h1 className="xl:text-5xl text-3xl 3xl:text-6xl font-semibold text-sky-500 3xl:pt-10 pl-6 lg:pl-20 xl:pt-0 lg:pt-8">Let's work together!</h1>
                        <a href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
                            <img className="block lg:hidden pl-3 h-9" src="/icons/linkedin.png" alt="linkedin"/>
                        </a>
                    </div>
                    <h2 className="xl:text-xl font-medium text-slate-700 pt-0 3xl:text-2xl xl:pt-3 pl-6 lg:pl-20">Web/app development & design</h2>
                    <h3 className="text-slate-200 pt-3 pl-6 lg:pl-20 pr-5 3xl:text-xl">I love working on the front-end of websites and apps. besides development I also like working on the design!</h3>
                    <h3 className="text-slate-200 pt-2 pl-6 lg:pl-20 pr-5 3xl:text-xl">Do you wish to get in touch with me? Feel free to send me an email!</h3>
                    <a
                        className="xl:ml-20 lg:ml-20 ml-6 mt-4 w-80 3xl:w-7/12 bg-slate-800 py-2 px-4 rounded relative grid justify-items-start"
                        onClick={() => copyToClipboard('casper.van.damme@outlook.com')}
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}
                        href="mailto:caspervandamme03@gmail.com"
                    >
                        <h4 className="text-slate-600 3xl:text-xl 3xl:mb-1">My e-mail address</h4>
                        <h3 className="text-sky-500 font-bold text-lg 3xl:text-2xl 3xl:mb-1">caspervandamme03@gmail.com</h3>
                        <span
                        className={`opacity-0 bg-black text-white text-center text-xs rounded-lg py-2 px-3 absolute bottom-7 left-1/2 transform -translate-x-1/2 pointer-events-none z-50 transition-opacity duration-150 ${tooltipVisible ? 'opacity-100' : ''}`}
                        >
                        {tooltipText}
                        <svg
                            className="absolute text-black h-2 w-full left-0 top-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                            xmlSpace="preserve"
                        >
                            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                        </svg>
                        </span>
                    </a>
                </div>
                <div className="hidden lg:block lg:row-span-2 lg:w-96 3xl:hidden">
                    <Logo/>
                </div>
                <div className="hidden 3xl:block lg:row-span-2 lg:w-96">
                    <Logo/>
                </div>
            </div>
        </main>
    )
}