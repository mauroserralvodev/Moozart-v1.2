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
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" string="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 " placeholder="Search"/>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <button data-popover-target="popover-click" data-popover-trigger="click" type="button" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Añadir</button>
<div data-popover id="popover-click" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 ">
    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg ">
        <h3 className="font-semibold text-gray-900 ">Añadir</h3>
    </div>
    <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 mr-2 text-gray-400" string="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
              Filtro
              <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" string="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            
            <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow ">
              <h6 className="mb-3 text-sm font-medium text-gray-900 ">
                Category
              </h6>
              <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                <li className="flex items-center">
                  <input id="apple" type="checkbox" value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600  " />
                  <label  className="ml-2 text-sm font-medium text-gray-900 ">
                    Rock (56)
                  </label>
                </li>
                <li className="flex items-center">
                  <input id="fitbit" type="checkbox" value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 " />
                  <label  className="ml-2 text-sm font-medium text-gray-900 ">
                    Pop (56)
                  </label>
                </li>
                <li className="flex items-center">
                  <input id="dell" type="checkbox" value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                  <label  className="ml-2 text-sm font-medium text-gray-900 ">
                    Drill (56)
                  </label>
                </li>
                <li className="flex items-center">
                  <input id="asus" type="checkbox" value="" checked
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 " />
                  <label className="ml-2 text-sm font-medium text-gray-900 ">
                    Trap (97)
                  </label>
                </li>
              </ul>
            </div>
          </div>
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