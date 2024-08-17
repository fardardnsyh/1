import React from 'react';
import { NavBar, Footer } from '../components/molecules';
import { Text , Image } from '../components/atoms';
import { Images } from '../constant';

const About = () => {
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <div className='flex items-center justify-center h-[90vh] bg-none'>
      <div className='flex z-50 items-center justify-between px-3 bg-none h-[40vh] w-[1000px] rounded-lg'>
        <div className='w-[150%] ml-10 mr-10'>
          <Text
            text="This is the OUSL AI Chatbot System."
            style="
                text-[1.8rem]
                font-semibold
            " 
          />
          <Text 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis id velit, corporis dolor adipisci"
            style="text-[14px]"
          />
        </div>
        <div className='flex items-center justify-center w-full'>
          <Image 
            src={Images.ousl_logo}
            href="ChatBot"
            style="
              w-[110px]
              h-[150px]
            "
          />
        </div>
      </div>
      <div className='absolute bg-slate-200 h-[40vh] w-[1000px] rounded-lg z-0 opacity-65'></div>
      </div>
      <div className='fixed bottom-0 left-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default About;
