import React from 'react'
import Bell from '../images/bell.png'
import Hero from '../images/hero.png'



const Banner = () => {
  return (
    <section id='banner'>
        <div className=" max-w-container mx-auto py-44">
            <div className="flex flex-wrap">
                
                <div className="">
            <div className="sm:mt-12 ml-[60px] mt-10 lg:ml-[0px] lg:mt-0  lg: flex gap-x-3 h-[40px] w-[230px]  rounded-full border-2 border-black hover:border-0 px-[20px] items-center hover:bg-[green] duration-500 ">

                    <div><img className='h-[20px] w-[20px]' src={Bell} alt="" /></div>
                    <div className="font-abee font-normal text[16px]  "><h2 >StartUp Bussiness</h2></div>                    
                </div>

            <div className="py-10">
                <div className="sm:w-[350px] px-10 lg:px-0 sm:text-justify lg:py-2 font-roboto font-medium text-4xl leading-10 lg:w-[460px]"><h2>Empowering startups to fuel their business growth</h2></div>
                  
                <div className="sm:w-[200px] mt-5 px-10 lg:px-0 lg:py-1 font-roboto font-normal text-lg leading-7 lg:w-[529px]"> <p className='sm:'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,<br /> velit <br />nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p></div> 
                 
                 <div className="py-5">
                  <div className="h-[35px]  ml-[100px] lg:ml-[0px] w-[150px] bg-[#EA580C] font-roboto font-normal text-base text-white text-center pt-1 rounded-md hover:bg-[green] duration-500"><a href="">Get started now</a></div>
                  </div>
                </div>

                </div>



                
                <div className="mt-[-50px] justify-end mx-auto"><img src={Hero} alt="" /></div>
            </div>


             
        </div>
    </section>
  )
}

export default Banner