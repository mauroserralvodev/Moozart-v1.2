"use client";

import { LandingFooter } from "@/components/landing-footer";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";

const Error = () => {
  return ( 
<section>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
            <div className="flex items-center lg:order-2">
                <a href="https://moozart.net" className="text-blue-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Volver a inicio</a>
                <Button variant="outline" className="rounded-full">
                    Empieza Ahora
                </Button>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    </nav>
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src="onelogo.png" alt="Mauro Serralvo"/>
                      <div>
                          <p rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Mauro Serralvo</p>
                          <p className="text-base text-gray-500 dark:text-gray-400">Co-fundador</p>
                        
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Marketplace en la plataforma</h1>
          </header>
          <p className="lead mb-5">Marketplace es un espacio esencial dentro de nuestra plataforma diseñado para que los usuarios puedan comprar y vender sus canciones a través de la criptomoneda de la plataforma “Amadeus Coin".</p>
          <p className="mb-5">Es importante destacar que la participación en el Marketplace está reservada exclusivamente para aquellos usuarios que han optado por una suscripción pro, además, los suscriptores pro disfrutan de la ventaja de descargar sin marca de agua todos sus proyectos con la mayor calidad de audio jamás vista.
          Por otro lado, cualquier usuario registrado previamente en la web tiene la opción de adquirir/comprar dentro de Marketplace. Esto significa que, independientemente de su membresía, todos tienen la oportunidad de descubrir y comprar joyas musicales creadas por los usuarios usando Moozart. </p>
          <figure><img className="shadow-lg" src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""/>
              <figcaption className="mt-4 text-center text-xs">&copy; 2023 Articulo - Moozart AI</figcaption>
          </figure>
    </article>          
  </div>
</main>
<div className="pb-2">
      <LandingFooter />
      </div>
</section>



);
}
 
export default Error;