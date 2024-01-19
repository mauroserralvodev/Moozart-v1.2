"use client";

import { Bricolage_Grotesque, Manrope } from 'next/font/google'

const space = Bricolage_Grotesque ({
   style: 'normal',
   subsets: ['latin'],
   weight: '800'
})

const space2 = Manrope ({
  style: 'normal',
  subsets: ['latin'],
  weight: '400'
})

const Brandpage = () => {
  return ( 
<section className={space2.className}>
    
</section>
);
}
export default Brandpage;