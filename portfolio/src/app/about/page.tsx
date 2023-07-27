import { createClient } from '../../prismicio'
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
 
export default async function Page () {
    const client = createClient();

  const aboutAsync = client.getSingle('about')

  const about = await aboutAsync
    return(
        <main className="overflow-hidden">
            <div className="block xl:grid xl:grid-rows-2 xl:grid-flow-col pt-6 pb-20 lg:pb-0 xl:pt-16 gap-24 overflow-auto">
                <div className="xl:row-span-2 pl-2 xl:pl-12 xl:pb-20 xl:w-full">
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 pt-4">aboutMe()</h1>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5 w-11/12">{about.data.information1}</h2>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5 w-11/12 pb-0 xl:pb-4">{about.data.information2}</h2>
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 xl:pt-0 pt-4">skills()</h1>
                        <div className="w-5/6 ml-4">
                            <SliceZone slices={about.data.slices} components={components}/>
                        </div>
                </div>
                <div className="hidden xl:grid row-span-2 pr-36">
                    <div className="grid grid-rows-3 grid-flow-col gap-14">
                        <div className="row-span-3 w-56 pt-20">
                            <h3 className="xl:text-3xl text-sky-500 pt-2">June 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            <h3 className="xl:text-3xl text-sky-500 pt-48">June 2022</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                        </div>
                        <img className="row-span-3" src="/pictures/timeline.png" alt="Timeline"/>
                        <div className="row-span-3 pt-52 w-56">
                            <h3 className="xl:text-3xl text-sky-500 pt-3">September 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Starting in mct at Howest</h4>
                            <h3 className="xl:text-3xl text-sky-500 pt-56">February 2023</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block xl:hidden pb-16">
                    <h1 className="text-4xl font-medium text-sky-500 pl-10 xl:hidden block pb-6">history()</h1>
                        <div className="grid grid-rows-2 grid-flow-col w-1/2 pl-32 gap-32">
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">June 2021</h3>
                                <h4 className="xl:text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">June 2022</h3>
                                <h4 className="xl:text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                            </div>                            
                        </div>
                        <img className="pl-10" src="/pictures/timeline_flat.png" alt="Timeline"/>
                        <div className="grid grid-rows-2 grid-flow-col pl-64 pt-10 w-7/12 gap-40">
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">September 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Starting in mct at Howest</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">February 2023</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                            </div>                            
                        </div>
                </div>
            </div>
        </main>
    )
}