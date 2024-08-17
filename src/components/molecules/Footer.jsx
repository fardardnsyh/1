import React from 'react';
import { Text , Image } from '../atoms';
import {Images} from "../../constant"

const Footer = () => {
  return (
    <footer className='flex w-full h-[50px] items-center justify-end mb-3'>
      <div className='flex items-center gap-4 mr-5'>
        <Image 
          src={Images.ousl_logo}
          href="OUSL-LOGO"
          style="
            w-[50px]
            h-[60px]
          "
        />
       <Text text="OUSL &copy; All rights reserved"  />
      </div>
    </footer>
  )
}

export default Footer;
