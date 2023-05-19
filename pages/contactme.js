import React from 'react'
import ContactmeCont from '../components/contactme/contactme';
const Contactme = () =>{
    return(
        <>
        <div className='contact-wrap '>
            <div className="grade  mx-auto text-center my-8 lg:my-32 text-4xl lg:text-8xl">Keep In Touch </div>
        <div className="wrap flex">
        <div className="discription lg:inline hidden w-1/3 p-8 m-8 text-white">
            
           <div className="text-4xl"> Hi <span className='wave '>👋</span>, <span className='grade'>{" <Geek/> "}</span></div> <br/>Feel free to talk to me about anything that bothers you. If you need a helping hand, please don't hesitate to contact me. Got a question on the services that I provide? I am just a click away.
            </div>
        <ContactmeCont className="folat-right inline-block"/>
        
        
        </div>
        <div className='notice-para font-extralight lg:font-medium text-xs '>Field Required <span className="notice">*</span></div>
        </div>
        <style jsx>
            {`

                .wave {
                    animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
                    animation-duration: 2.5s;        /* Change to speed up or slow down */
                    animation-iteration-count: infinite;  /* Never stop waving :) */
                    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
                    display: inline-block;
                  }
                  
            
                  @keyframes wave-animation {
                      0% { transform: rotate( 0.0deg) }
                     10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
                     20% { transform: rotate(-8.0deg) }
                     30% { transform: rotate(14.0deg) }
                     40% { transform: rotate(-4.0deg) }
                     50% { transform: rotate(10.0deg) }
                     60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
                    100% { transform: rotate( 0.0deg) }
                  }
                  .grade{
                    font-weight: bold;

                    background: linear-gradient(-90deg,  #EE0979, #FF6A00, #fcfc8f);
                   -webkit-background-clip: text;
                   background-size: 200%;
                   -webkit-text-fill-color: transparent; 
                   animation: grading 8s ease infinite;      
                }
                @keyframes grading {
                  from {
                    -webkit-filter: hue-rotate(0);
                    -moz-filter: hue-rotate(0);
                    -ms-filter: hue-rotate(0);
                    filter: hue-rotate(0);
                  }
                  to {
                    -webkit-filter: hue-rotate(360deg);
                    -moz-filter: hue-rotate(360deg);
                    -ms-filter: hue-rotate(360deg);
                    filter: hue-rotate(360deg);
                  }
                }

            `}
        </style>
        </>
    )
}
export default Contactme;