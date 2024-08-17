import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List , Image } from '../atoms';
import { Images } from '../../constant';

const NavBar = () => {

  const Navigate = useNavigate();

  const navElements = [
      { name: "HOME", url: "/" },
      { name: "CHATBOT", url: "/chatbot" },
      { name: "ABOUT", url: "/about" },
  ];

  const handelImageClick = () => {
    Navigate("/");
  }
  return (
    <div className='flex items-center justify-between px-3 mt-4 h-70px w-100%'>
      <div>
        <Image 
            src={Images.chatbot_icon} 
            href="Chatbot Icon" 
            style="
                w-[50px]
                h-[50px]
                m-2
                cursor-pointer
            "
            onClickFunc={handelImageClick} 
        />
      </div>
      <div>
        <List 
            elements={navElements}
            ulStyle="
                flex
                items-center 
                justify-center
            "
            liStyle="
                px-5
                py-2
                text-[0.9rem]
                font-semibold
                hover:bg-[#31ffd7]
                rounded-[7px]
                duration-300
            " 
        />
      </div>
    </div>
  )
}

export default NavBar
