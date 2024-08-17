import React from 'react';
import { NavBar, Footer } from '../components/molecules';
import { Text, Image, NavigationButton } from '../components/atoms';
import { Images } from '../constant';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const Navigate = useNavigate();

  const handelNavigateButton = () => {
    Navigate("/chatbot");
  }
  return (
    <div className='flex flex-col justify-center'>
      <NavBar />
      <div className='flex items-center justify-center h-[90vh] bg-none'>
      <div className='flex z-50 items-center justify-between px-3 bg-none h-[40vh] w-[1000px] rounded-lg'>
        <div className='w-[50%] ml-10 mr-10'>
          <Text
            text="Welcome to The System"
            style="
                text-[1.8rem]
                font-semibold
            " 
          />
          <Text 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis id velit, corporis dolor adipisci"
            style="text-[14px]"
          />
          <NavigationButton 
            name="Get Started"
            type="button"
            style="
              px-10
              py-3
              mt-5
              bg-[#31ffd7]
              flex
              items-center
              justify-center
              rounded-md
              text-[0.9rem]
              font-semibold
              hover:bg-slate-900
              hover:text-slate-50
              duration-300
            "
            onClickFunc={handelNavigateButton}
          />
        </div>
        <div>
          <Image 
            src={Images.chatbot}
            href="ChatBot"
            style="
              w-[300px]
              h-[300px]
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

export default Home;
