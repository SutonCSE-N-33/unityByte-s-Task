import React, { useState } from 'react';
import './Slider.css';

import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import fakeData1 from '../assets/fakeData/fakeData1';
import fakeData2 from '../assets/fakeData/fakeData2';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Slider1 = () => {
    const [isShown, setIsShown] = useState({
        showing: false,
        id:''
    })
    console.log(isShown)
    const OverhandleBtn = (type,id) =>{
        const newShown = {...isShown}
        newShown.showing = type;
        newShown.id = id;
        setIsShown(newShown)
    }

    const fakeData = fakeData1;
    const secondFakeData = fakeData2;

    
    return (
        <div className='w-full h-screen px-6 py-2'>
            <div id="controls-carousel" className="relative w-full h-full" data-carousel="static">
            <div className="relative h-full overflow-hidden rounded-lg md:h-full">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        
                       {
                        fakeData.map(data => (
                            <div key={data.id} className="flex px-3 m-6" style={{height:'250px'}}>
                          <div onMouseEnter={() => OverhandleBtn(true,data.id)} onMouseLeave={() => setIsShown(false)} className='relative overflow-hidden box cursor-pointer' style={{width:'650px', height:'230px'}}>
                          
                          <div className='p-4'>
                          <div className='bg-orange-400 p-2 pt-5 w-16 h-16 rounded-full'><span className='text-center text-white text-xl font-semibold mt-6'>{data.discount} %</span></div>
                           <img className='center cover' width="300px" src={data.img}  alt="" />
                          </div>

                          <div className='flex overlay absolute top-0 left-0 w-full h-full justify-center items-center bg-transparent' style={{backgroundColor:"rgba(0,0,0,.2)"}}>
                            <div className='bg-white rounded-full p-3 '>
                              <AiFillHeart className="text-2xl hover:text-orange-400"/>
                            </div>
                            <div className='bg-white rounded-full p-3 ml-2'>
                               <AiOutlineSync className="text-2xl hover:text-orange-400"/>
                            </div>
                            <div className='bg-white rounded-full p-3 ml-2'>
                             <AiOutlineSearch className="text-2xl hover:text-orange-400"/>
                            </div>
                          </div>
                          </div>
                          
                          <div className='ml-12'>
                           {
                            data.ratings ?  <div className="flex">
                            <AiFillStar className="text-yellow-400 text-xl" />
                            <AiFillStar className="text-yellow-400 text-xl" />
                            <AiFillStar className="text-yellow-400 text-xl" />
                            <AiFillStar className="text-yellow-400 text-xl" />
                            <AiFillStar className="text-gray-300 text-xl" />
                          </div> :  <div className="flex">
                          <AiFillStar className="text-gray-300 text-xl" />
                          <AiFillStar className="text-gray-300 text-xl" />
                          <AiFillStar className="text-gray-300 text-xl" />
                          <AiFillStar className="text-gray-300 text-xl" />
                          <AiFillStar className="text-gray-300 text-xl" />
                        </div>
                           }
                            <h1 className='text-xl font-bold mt-2'>{data.title}</h1>
                            <p className='text-red-400 text-2xl font-semibold py-3'>$ {data.price}</p>
                            <p className='text-gray-500 text-lg'>{data.details}</p>

                           {data.id == parseInt(isShown.id) ?  <button type="button" className="text-white showingButton mt-4 bg-[#24292F]   font-medium rounded-full text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 ">ADD TO CART</button>: ''}
                          </div>

                         
                       </div>
                        ))
                       }

                </div>
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-scroll">
                        
                {
                    secondFakeData.map(data => (
                     <div key={data.id} className="flex px-3 m-6" style={{height:'250px'}}>
                   <div onMouseEnter={() => OverhandleBtn(true,data.id)} onMouseLeave={() => setIsShown(false)} className='relative overflow-hidden box cursor-pointer' style={{width:'650px', height:'230px'}}>
                   
                   <div className='p-4'>
                   <div className='bg-orange-400 p-2 pt-5 w-16 h-16 rounded-full'><span className='text-center text-white text-xl font-semibold mt-6'>{data.discount} %</span></div>
                    <img className='center cover' width="300px" src={data.img}  alt="" />
                   </div>

                   <div className='flex overlay absolute top-0 left-0 w-full h-full justify-center items-center bg-transparent' style={{backgroundColor:"rgba(0,0,0,.2)"}}>
                     <div className='bg-white rounded-full p-3 '>
                       <AiFillHeart className="text-2xl hover:text-orange-400"/>
                     </div>
                     <div className='bg-white rounded-full p-3 ml-2'>
                        <AiOutlineSync className="text-2xl hover:text-orange-400"/>
                     </div>
                     <div className='bg-white rounded-full p-3 ml-2'>
                      <AiOutlineSearch className="text-2xl hover:text-orange-400"/>
                     </div>
                   </div>
                   </div>
                   
                   <div className='ml-6 sm:ml-12 md:ml-12'>
                    {
                     data.ratings ?  <div className="flex">
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-yellow-400 text-xl" />
                     <AiFillStar className="text-gray-300 text-xl" />
                   </div> :  <div className="flex">
                   <AiFillStar className="text-gray-300 text-xl" />
                   <AiFillStar className="text-gray-300 text-xl" />
                   <AiFillStar className="text-gray-300 text-xl" />
                   <AiFillStar className="text-gray-300 text-xl" />
                   <AiFillStar className="text-gray-300 text-xl" />
                 </div>
                    }
                     <h1 className='text-lg sm:text-xl md:text-xl font-bold mt-2'>{data.title}</h1>
                     <div className="flex">
                     <p className='text-red-400 text-2xl font-semibold py-3'>$ {data.price}</p>  {data.oldPrice !== '' ? 
                     <span className='text-gray-400 mt-4 font-bold ml-6 text-2xl'><del>$ {data.oldPrice}</del></span>: ''}
                     </div>
                     <p className='text-gray-500 text-sm sm:text-lg md:text-lg'>{data.details}</p>

                    {data.id == parseInt(isShown.id) ?  <button type="button" className="text-white showingButton mt-4 bg-[#24292F]   font-medium rounded-full text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 ">ADD TO CART</button>: ''}
                   </div>

                  
                </div>
                 ))
                }

         </div>
                </div>
            </div>

            <button type="button" className="absolute  drop-shadow-md mt-60 bg-white hover:bg-orange-500 top-0 start-0 z-30 flex items-center justify-center h-16 px-5 rounded-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <IoIosArrowBack className='text-gray-500 hover:text-white text-3xl' />
            </button>
            <button type="button" className="absolute drop-shadow-md mt-60  bg-white hover:bg-orange-500 top-0 end-0 z-30 flex items-center justify-center h-16 px-5 rounded-full cursor-pointer group focus:outline-none" data-carousel-next>
            <IoIosArrowForward className='text-gray-500 hover:text-white text-3xl' />
            </button>
            </div>

        </div>
    );
};

export default Slider1;