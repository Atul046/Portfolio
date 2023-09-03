import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Atul Raj</h4>
      <h4>Copyright &copy; 2023 AR</h4>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/atul~raj/" target='_blank'  rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:atulraj0710@gmail.com' target='_blank'  rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/atul_001/" target="_blank"  rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer