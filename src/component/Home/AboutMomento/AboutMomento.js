import React from 'react';

const AboutMomento = () => {
    return (
        <div className='container mx-auto md:mx-5 my-10 lg:flex justify-center my-15'>
            {/* cartoon  */}
            <div className='flex relative'>
                <div className='bg-indigo-500  my-auto p-5 rounded-lg h-96'>
                    <img className='animate-bounce' src="https://montenoreact.surielementor.com/static/media/item-27.582f99ea45e6fe75e96b.png" alt="" />
                </div>
                <div className='ml-10'>
                    <div className='bg-indigo-500 p-5 rounded-lg mb-5 h-64'>
                        <img className='animate-bounce' src="https://montenoreact.surielementor.com/static/media/item-29.b5b079b2e7a4f097a991.png" alt="" />
                    </div>
                    <div className='bg-indigo-500 p-5 rounded-lg'>
                        <img className='animate-bounce' src="https://montenoreact.surielementor.com/static/media/item-05.15d40ebee22c6c4464c6.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='m-10'>
                <h1 className='text-xl font-bold'>About Us</h1>
                <div className='absolute animate-bounce -bottom-12 left-30 w-20 h-4 ml-[70px]'>
                    <div className='w-16 h-1.5 flex rounded-full  bg-violet-300'>
                        <div className='w-6 h-1.5  rounded-full  bg-orange-500'></div>
                        <div className='w-6 h-1.5  rounded-full  bg-green-300'></div>
                    </div>
                </div>
                <h2 className='text-5xl font-bold mt-7'>Hight Quality NFT <br /> Collections</h2>
                <p className='my-10'>Sed ut perspiciatis unde omnis iste natus enim ad <br /> minim veniam, quis nostrud exercit</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occae <br /> cat cupidatat non proident, sunt in culpa qui officia dese <br /> runt mollit anim id est laborum velit esse cillum dolore eu <br /> fugiat nulla pariatu epteur sint occaecat</p>
                <div className="btn rounded-full bg-orange-700 hover:bg-orange-100 hover:text-orange-500 mt-5">Get Connected</div>
            </div>
        </div>
    );
};

export default AboutMomento;