import React from 'react'
import Link from 'next/link';
const HeaderBox = ()=>{
    return(
        <div className="menu-item dark:bg-black lg:hidden bg-white border border-solid border-black mx-auto my-1 text-4xl  text-center p-4  lg:m-4 fixed ">
          <ul className=" block mx-auto lg:mt-6 text-white">
            <li className="block m-4 lg:m-4 lg:p-1.5 cursor-pointer text-black dark:text-white hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/">Home</Link>
            </li>
            <li className="block m-4 lg:m-4 lg:p-1.5 cursor-pointer text-black dark:text-white hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className=" block m-4 lg:m-4 lg:p-1.5 cursor-pointer text-black dark:text-white hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/contactme">Contact Me</Link>
            </li>
          </ul>
      </div>
    )
}
export default HeaderBox;