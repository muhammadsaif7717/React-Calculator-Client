import React, { useState } from 'react';

const Home = () => {
    const [keys, setKeys] = useState(555);
    const [result, setResult] = useState(555);

    const handleResult = () => {
        setResult('Saif')
    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-96 flex flex-col items-center justify-center'>
                <h1 className='text-5xl card-title'>AI Calculator</h1>
                {/* display */}
                <div className='bg-gray-400 mt-5 w-96 h-28 flex flex-col items-center justify-center p-10'>
                    <div className='text-2xl font-semibold text-white w-full text-end'>{keys}</div>
                    <div className='text-3xl font-semibold text-white w-full text-end'>{result}</div>
                </div>
                {/* buttons */}
                <div className='w-96 grid grid-cols-4 p-[2px] bg-gray-400'>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">C</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">+/-</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">%</button>
                    <button className="btn border-2 h-20 bg-orange-500 border-gray-400 rounded-none text-2xl">/</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">7</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">8</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">9</button>
                    <button className="btn border-2 h-20 bg-orange-500 border-gray-400 rounded-none text-2xl">x</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">4</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">5</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">6</button>
                    <button className="btn border-2 h-20 bg-orange-500 border-gray-400 rounded-none text-2xl">-</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">1</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">2</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none text-2xl">3</button>
                    <button className="btn border-2 h-20 bg-orange-500 border-gray-400 rounded-none text-2xl">+</button>
                    <button className="col-span-2 btn border-2 h-20 border-gray-400 rounded-none  text-2xl">0</button>
                    <button className="btn border-2 h-20 border-gray-400 rounded-none  text-2xl">.</button>
                    <button onClick={handleResult} className="btn border-2 h-20 bg-orange-500 border-gray-400 rounded-none  text-2xl">=</button>
                </div>
            </div>
        </div>
    );
};

export default Home;