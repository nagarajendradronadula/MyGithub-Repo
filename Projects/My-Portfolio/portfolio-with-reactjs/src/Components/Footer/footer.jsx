import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const footer = () => {
  return (
    <div id="Contact" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
        <div>
            <h1 className="text-2xl md:text:6xl font-bold">Contact</h1>
            <h3 className="text-sm md:text-2xl font-normal">Feel free to contact me</h3>
        </div>

        <ul className="text-normal md:txt-xl">
            <li className="flex gap-1 items-center"><MdOutlineMail size={20} /><a href="mailto:nagarajendra432@gmail">nagarajendra432@gmail</a></li>
            <li className="flex gap-1 items-center"><FaLinkedin size={20} /><a href="https://www.linkedin.com/in/nagarajendradronadula/">linkedin.com/nagarajendradronadula</a></li>
            <li className="flex gap-1 items-center"><FaGithub size={20} /><a href="https://github.com/nagarajendradronadula">github.com/nagarajendradronadula</a></li>
        </ul>
    </div>
  )
}

export default footer