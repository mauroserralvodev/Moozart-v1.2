"use client";

export const LandingFooter = () => {
    return (
    <div bg-Color="white" className='text-center text-lg-left pb-10 pt-10'>
      <div className='text-center p-5 bg-gray-100 rounded-lg '>
        <h3 className="font-bold mb-1 text-2xl p-5">Una plataforma de Wolfgang Studios</h3>
        &copy; {new Date().getFullYear()} Copyright -{' '}
        <a className='text-dark mb-20' href='https://moozart.es/'>
          Moozart AI
        </a>
      </div>
    </div>
    )
}