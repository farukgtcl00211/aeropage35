import React from 'react'
import Ball from '../images/baseball-ball.png'
import ScrollToTop from "react-scroll-to-top";


const Immediate = () => {
  return (
   <section id='immed' >
    <div className="max-w-container mx-auto flex  justify-start lg:mt-[-50px] flex-wrap gap-y-5 mt-[-120px]">

    <div className=" lg: flex w-[350px] bg-[#FAD0BC] items-center mx-auto rounded-md hover:bg-[green] duration-500">

<div className="px-5 py-4">
    <img src={Ball} alt="" />
</div>

<div className="">
    <h2 className='font-roboto font-medium text-xl text-[#09090B]'>Immediate Deployment</h2>
    <p className='font-roboto font-medium text-base w-[220px] text-[#71717A]'>Et vero eos et accusamus et iusto odio dignissimos</p>
</div>
</div>

<div className=" lg: flex w-[350px] bg-[#FAD0BC] items-center mx-auto rounded-md hover:bg-[green] duration-500">

        <div className="px-5 py-4">
            <img src={Ball} alt="" />
        </div>

        <div className="">
            <h2 className='font-roboto font-medium text-xl text-[#09090B]'>Immediate Deployment</h2>
            <p className='font-roboto font-medium text-base w-[220px] text-[#71717A]'>Et vero eos et accusamus et iusto odio dignissimos</p>
        </div>
    </div>

    <div className=" lg: flex w-[350px] bg-[#FAD0BC] items-center mx-auto rounded-md hover:bg-[green] duration-500">

<div className="px-5 py-4">
    <img src={Ball} alt="" />
</div>

<div className="">
    <h2 className='font-roboto font-medium text-xl text-[#09090B]'>Immediate Deployment</h2>
    <p className='font-roboto font-medium text-base w-[220px] text-[#71717A]'>Et vero eos et accusamus et iusto odio dignissimos</p>
</div>
</div>

    </div>
    <ScrollToTop smooth />

   </section>
  )
}

export default Immediate