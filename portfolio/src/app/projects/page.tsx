export default async function Page() {
    return(
        <main className="overflow-hidden">
            <div className="overflow-auto">
                <h1 className="lg:text-5xl text-3xl font-medium text-sky-500 pl-8 lg:pl-20 pt-6 lg:pt-16">projects()</h1>
                <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col pt-8 lg:pt-16 pb-10 pl-4 lg:pl-12 lg:pr-20 pr-4 lg:gap-4">
                    <div className="row-span-2 border-sky-500 border-2 rounded-xl lg:mr-8 mr-0 lg:ml-8 ml-0 mb-8 lg:mb-0">
                        <img className="pl-6 pr-6 pt-5 sm:h-80 md:h-96 lg:h-80 h-48 3xl:h-96" src="/pictures/cashcar.png" alt="cashcar"/>
                        <h2 className="text-3xl text-slate-200 pt-5 pl-6">Cash Car</h2>
                        <h4 className="text-base text-slate-200 pt-4 pl-6 pr-6"><span className="font-bold">Cash Car</span> was my first ever project during the first year at mct. The objective of this project is to help a group of students of which only a limited number of students have a driver’s license. A group of friends were confronted with the issue that due to the limited number of drivers; it was always the same people who had to drive and were faced with the cost of each trip. The hassle to figure out who had to pay which amount was far from ideal.</h4>
                        <h4 className="text-base text-slate-200 pt-4 pl-6 pr-6">Here comes my project in the picture. Cash Car can calculate how much everyone has to pay the driver by tracking the distance per passenger, the daily fuel price and the total number of people in the car. Each person has their personal RFID tag to check-in at the beginning of the trip. The actual drive can be monitored on the website or on the display. Next to the actual drive you can also see the history per passenger.</h4>
                        <h3 className="text-2xl text-slate-200 pt-5 pl-6">Used skills</h3>
                        <div className="grid grid-rows-3 grid-flow-col pl-6 w-3/4">
                            <img className="row-span-5 pt-8 pb-4 w-10" src="/icons/python.png" alt="Python"/>
                            <img className="row-span-3 pt-8 pb-4 w-10" src="/icons/html.png" alt="html"/>
                            <img className="row-span-3 pt-8 pb-4 w-10" src="/icons/css.png" alt="css"/>
                            <img className="row-span-3 pt-8 pb-4 w-10" src="/icons/javascript.png" alt="javascript"/>
                        </div>
                    </div>
                    <div className=" row-span-2 border-sky-500 border-2 rounded-xl mb-16 lg:mb-0">
                        <img className="pl-6 pr-6 pt-5 sm:h-80 md:h-96 lg:h-80 h-48 3xl:h-96" src="/pictures/dokemaca.png" alt="dokemaca"/>
                        <h2 className="text-3xl text-slate-200 pt-5 pl-6">Dokemaca</h2>
                        <h4 className="text-base text-slate-200 pt-4 pl-6 pr-6">This project was my first team project. The project was made for another Howest campus in Bruges (Belgium). Dokemaca consists of 6 custom made interactive poles. Each pole consists of a button, lights, a raspberry pi and a router that runs on a custom Wi-Fi network and on top there is the accompanying website.</h4>
                        <h4 className="text-base text-slate-200 pt-4 pl-6 pr-6"><span className="font-bold">Dokemaca</span> is an interactive game with the objective to get people moving. The participants have to tap on the button of the pole which lights up. There are multiple game modes to choose from, such as “time attack”, “simon says” and “red and blue”. After completing a game, the participants can compare their performances with other players.</h4>
                        <h3 className="text-2xl text-slate-200 pt-5 pl-6">Used skills</h3>
                        <div className="grid grid-rows-3 grid-flow-col pl-6 w-3/4">
                            <img className="row-span-5 pt-8 pb-4 w-10" src="/icons/python.png" alt="Python"/>
                            <img className="row-span-3 pt-8 pb-4 w-10" src="/icons/html.png" alt="html"/>
                            <img className="row-span-3 pt-8 pb-4 w-10" src="/icons/css.png" alt="css"/>
                            <img className="row-span-3 pt-8 pb-4 w-10" src="/icons/javascript.png" alt="javascript"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}