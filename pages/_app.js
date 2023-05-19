import '../styles/globals.css'
import Header from '../components/header/header'
import { useState, useEffect, useContext , createContext} from "react";
import Footer from '../components/footer/footer'
export default function App({ Component, pageProps }) {
  return(

    <div className='bg-black -z-50 py-8 text-white'>
   <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  

    )
    
}