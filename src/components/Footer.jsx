import React from 'react'
import '../assets/css/Footer.css'
const Footer = () => {
  return (
    <>
      <footer className='footer  w-full h-auto bg-[#202124]'>
        <div className="footerLogo w-full h-32  flex justify-start items-center pl-8 ">
          <img className=' w-20 h-20 hover:w-32 hover:h-32 transition-all duration-500 ' src="/images/osmanflaglogo.png" alt="Kayi" />
          <div className="footerlogo-Text  w-96 h-10 text-4xl text-blue-500">
            UsmanDubbed.Com
          </div>
        </div>
        <div className="footer1  w-full h-64 text-white flex">
        <div className="footer1-SocialLinks  w-[50%] h-full flex ">
         <div className="footer1-row1  w-[50%] h-full flex xl:justify-center xl:items-center ">
          <div className="footer1-hover  flex justify-center transition-all duration-200 items-center w-[50%] xl:h-[70%] xl:rounded-sm hover:bg-blue-900 hover:opacity-70">
          <img src="/images/twitterlogo.png" alt="Twitter" className="Twitter footer1-socialImages   xl:w-[80%] xl:h-[70%]" />
          </div>
          <div className="footer1-hover  flex justify-center transition-all duration-200 items-center w-[50%] xl:h-[70%] xl:rounded-sm hover:bg-blue-900 hover:opacity-70">
          <img src="/images/facebooklogo.png" alt="facebook" className="facebook footer1-socialImages   xl:w-[80%] xl:h-[70%]" />
          </div>
          </div>
         <div className="footer1-row2  w-[50%] h-full flex xl:justify-center xl:items-center ">
          <div className="footer1-hover  flex justify-center transition-all duration-200 items-center w-[50%] xl:h-[70%] xl:rounded-sm hover:bg-pink-700 hover:opacity-70">
          <img src="/images/instagramlogo.png" alt="Instagram" className="Instagram footer1-socialImages   xl:w-[80%] xl:h-[70%]" />
          </div>
          <div className="footer1-hover  flex justify-center transition-all duration-200 items-center w-[50%] xl:h-[70%] xl:rounded-sm hover:bg-red-800 hover:opacity-70">
          <img src="/images/youtubelogo.png" alt="Youtube" className="Youtube footer1-socialImages  xl:w-[80%] xl:h-[50%]" />
          </div>
          </div>
        </div>
        <ul className='footer1-ul  w-[25%] h-full flex flex-col space-y-5 text-blue-500 xl:items-center'>
          <h1 className='footer1-h1 text-white'>PROFILE</h1>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Contact Us</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>About</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Services</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Privacy</li>
        </ul>
        <ul className='footer1-ul  w-[25%] h-full flex flex-col space-y-5 text-blue-500'>
          <h1 className='footer1-h1 text-white'>SEASONS</h1>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Season1</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Season2</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Season3</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Season4</li>
          <li className='footer1-li hover:text-white transition-all duration-200 h-10'>Shorts</li>
        </ul>
        </div>
        <div className="footer2 w-full h-10 mt-20">
          <footer className='footer2-CopyrightText m-auto w-[35%] h-full text-white hover:text-green-700 transition-all duration-300 flex justify-center items-center '>
          UsmanGaziDubbed.com @Copyright All Right Reserved.
          </footer>
        </div>
        </footer>
    </>
  )
}

export default Footer;