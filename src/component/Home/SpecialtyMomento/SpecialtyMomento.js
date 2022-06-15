import React from 'react';

const SpecialtyMomento = () => {
    return (
        <div className='container flex'>
            <div>
                <h1 className='text-2xl font-bold'>Our Specialty</h1>
                <div className='absolute animate-bounce -bottom-90 left-4 w-20 h-4 ml-[70px]'>
                    <div className='w-16 h-1.5 flex rounded-full  bg-violet-300'>
                        <div className='w-6 h-1.5  rounded-full  bg-orange-500'></div>
                        <div className='w-6 h-1.5  rounded-full  bg-green-300'></div>
                    </div>
                </div>
                <h1 className='text-4xl'>Complete Solutions <br /> for your NFT</h1>
                <h2 className='font'>Sed ut perspiciatis unde omnis iste natus enim ad <br /> minim veniam, quis nostrud exercit</h2>
                <div className="btn rounded-full bg-orange-700 hover:bg-orange-100 hover:text-orange-500 mt-5">Get Connected</div>
            </div>
            <div>
                <div class="card w-64 h-80 bg-indigo-800">
                    <div class="card-body">
                        <h2 class="card-title">01</h2>
                        <h1 className='text-2xl font-bold'>Huge Collection</h1>
                        <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                    </div>
                </div>
                <div class="card w-64 h-80 bg-indigo-800">
                    <div class="card-body">
                        <h2 class="card-title">01</h2>
                        <h1 className='text-2xl font-bold'>Huge Collection</h1>
                        <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialtyMomento;