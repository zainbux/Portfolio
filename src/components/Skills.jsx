import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import typescript from '../assets/typescript.png';
import nextjs from '../assets/nextjs.png';
import aws from '../assets/aws.svg';
import mysql from '../assets/mysql.png';





const Skills = () => {
  return (
    <div name='skills' className='w-full h-200 bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>As a developer I don't like to keep myself limited to certain coding languages or technologies, rather they are simply tools I utilize to complete the task at hand, whatever that may be!</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              
              <div className=' mb-10 text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={JavaScript} alt="HTML icon" />
                  <p className=' my-4'>JAVASCRIPT</p>
              </div>

              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={typescript} alt="HTML icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT.JS</p>
              </div>
              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={nextjs} alt="HTML icon" />
                  <p className='my-4'>NEXT.JS</p>
              </div>
              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={mysql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='text-0 hover:scale-90 hover:opacity-50 duration-500 w-1/2 mx-auto'>
                  <img className='' src={aws} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
