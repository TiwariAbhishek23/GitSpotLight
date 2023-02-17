import { useState } from 'react';
import ComparePage from '../components/compare/comparepage'



const Compare = () => {

    // Variabes
  return(
    <div className='my-24 '>
        <div className="heading text-center text-6xl"><span className="grade">Compare GitHub Stats</span></div>
        <ComparePage/>
        <style jsx>
      {`

.grade{
  font-weight: bold;

  background: linear-gradient(-90deg,  #F85032, #E73827);
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

    </div>
  )
}
export default Compare;


  