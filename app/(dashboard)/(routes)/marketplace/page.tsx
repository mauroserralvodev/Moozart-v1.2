"use client";

import { Bricolage_Grotesque, Manrope } from 'next/font/google'

const space = Bricolage_Grotesque ({
   style: 'normal',
   subsets: ['latin'],
   weight: '800'
})

const space2 = Bricolage_Grotesque ({
  style: 'normal',
  subsets: ['latin'],
  weight: '200'
})

const space3 = Bricolage_Grotesque ({
  style: 'normal',
  subsets: ['latin'],
  weight: '400'
})


const Marketplace = () => {
  return (
    <section className={space2.className}>
    <div className="relative bg-white sm:rounded-lg">
      <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
      <section className={space.className}>
      <h1 className="m-10 text-4xl font-extrabold">Marketplace</h1>
      </section>
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label className="sr-only">Buscar</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-black " fill="currentColor" string="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-black border border-black rounded-lg bg-white" placeholder="Search"/>
            </div>
          </form>
        </div>
</div>
    <div>
      <hr className="my-0 border-gray-200 sm:mx-auto lg:my-8"/>
    </div>
  </div>
<div className="p-10 items-center">
    <div className="transition translate-x-1 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg ">
    <img className='rounded-lg mb-5'  src='/acora.avif'/>
    <section className={space.className}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Todavía no hay canciones en Marketplace</h5>
      </section>
      <section className={space2.className}>
      <p className="font-normal text-black">Cuando haya canciones a la venta se mostrarán aquí.</p>
      </section>
   </div>
</div>

</section>
   );
}
 
export default Marketplace;