import React from 'react'
import CTAButton from "./Button"
import HighlightText from './HighlightText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${position} my-6 sm:my-12 sm:justify-between gap-10`}>
      
    {/*Section 1*/}
    <div className='md:w-[90%] lg:w-[50%] flex flex-col gap-6 md:gap-8'>
        {heading}
        <div className='md:text-lg text-richblack-300 font-bold '>
            {subheading}
        </div>

        <div className='flex gap-5 sm:gap-7 sm:mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>


    </div>

     {/*Section 2*/}
     <div className=' h-fit  flex flex-row text-[10px] sm:text-[14px] md:text-[18px] w-[100%] py-4 lg:w-[500px] bg-transparent bg-opacity-5 bg-white'> 
        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold '>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>

        <div className={`w-[90%] flex flex-col gap-2 font-normal ${codeColor} pr-2`}>
           <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

     </div>


    </div>
  )
}

export default CodeBlocks
