import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const percentage2 = 66;
const percentage3 = 66;
const WelcomeMomento = () => {
    return (
        <div class=" container mx-auto md:mx-5 my-10 lg:flex justify-center">
            <div>
                <div className='relative ml-2'>
                    <h4 className='text-xl font-bold'>We are <span >Monteno</span> NFT</h4>
                    <div className='absolute animate-bounce -bottom-4 left-0 w-20 h-4 ml-[70px]'>
                        <div className='w-16 h-1.5 flex rounded-full  bg-violet-300'>
                            <div className='w-6 h-1.5  rounded-full  bg-orange-500'></div>
                            <div className='w-6 h-1.5  rounded-full  bg-green-300'></div>
                        </div>
                    </div>
                </div>
                <h1 className='text-6xl font-bold my-5'>Collect Next <br /> Generation NFTs <br /> Today</h1>
                <h4>Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium</h4>
                <div className="btn rounded-full bg-orange-700 hover:bg-orange-100 hover:text-orange-500">Get Connected</div>
            </div>
            <div className='bg-indigo-800 p-7 rounded-lg text-3xl font-bold lg:ml-20 flex align-center flex-col'>
                <h3 className='my-10'>Token Sale Ends In</h3>
                <div className='flex lg:w-2/4 '>
                    <div className='mx-4'>
                        <CircularProgressbar className='mr-10' value={percentage} text={`${percentage}%`} />
                        <h3>Days</h3>
                    </div>
                    <div className='mx-4'>
                        <CircularProgressbar className='mr-10' value={percentage2} text={`${percentage2}%`} />
                        <h1>Hours</h1>
                    </div>
                    <div className='mx-4'>
                        <CircularProgressbar className='mr-10' value={percentage3} text={`${percentage3}%`} />
                        <h1>Minutes</h1>
                    </div>
                </div>
                <div className='my-10'>
                    <progress class="progress w-56 bg-slate-50 mx-auto" value="40" max="100" style={{ width: "80%" }}></progress>
                    <div className='flex justify-between'>
                        <p className='text-base font-thin'><span className='font-bold'>$18.090</span> Pledget</p>
                        <p className='text-base font-thin'><span className='font-bold'>$35.090</span> Goal</p>
                    </div>
                </div>
                <div>
                    <div className="btn rounded-full bg-orange-700 hover:bg-orange-100 hover:text-orange-500">Get Connected</div>
                </div>
            </div>
        </div>

    );
};

export default WelcomeMomento;