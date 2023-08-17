import React from 'react'
import ContactmeCont from '../components/contactme/contactme';
const Contactme = () =>{
    return(
        <>
        <div className='contact-wrap '>
            <div className="grade  mx-auto text-center my-8 lg:my-32 text-4xl lg:text-8xl">Keep In Touch </div>
        <div className="wrap flex">
        <div className="discription lg:inline hidden w-1/3 p-8 m-8 text-white">
            
           <div className="text-4xl"> Hi <span className='wave '>👋</span>, <span className='grade'>{" <Geek/> "}</span></div> <br/>Feel free to discuss anything that bothers you. 😊 If you need help, don&apos;t hesitate to contact me. 📞 Do you have questions about my services? 💬 I&apos;m just a click away. 👀
            </div>
        <ContactmeCont className="folat-right inline-block"/>
        

        </div>
        <div className='notice-para font-extralight lg:font-medium text-xs '>Field Required <span className="notice">*</span></div>
        </div>
        </>
    )
}
export default Contactme;