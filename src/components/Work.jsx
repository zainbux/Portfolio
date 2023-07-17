import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import bnb from '../assets/bnb.png';
import qcm from '../assets/qcmpic.jpg';
import atw from '../assets/artwork.JPG';
import tl from '../assets/tl.png';
import et from '../assets/et.JPG';


const Data= [
  {  
    name:"QCM Detailing" ,
    url: "https://github.com/zainbux/QCM-2.0/tree/main",
    image: qcm,
    DemoUrl: "https://www.qcmdetailing.com/",
  },
  {  
    name:"ArtWork Portfolio" ,
    url: "https://github.com/zainbux/ArtPortfolio",
    image: atw,
    DemoUrl: "https://art-portfolio-chi.vercel.app/",
  },
  {  
    name:"Expense Tracker" ,
    url: "https://github.com/zainbux/Expense-Tracker-App/tree/main",
    image: et,
    DemoUrl: "durl1",
  },

]


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Work title */}

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* work cards */}

        <div className='grid grid-cols-3 gap-5'>

          {Data.map((d, index) => (

            <div
              style={{ backgroundImage: `url(${d.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
              >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  {d.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={d.DemoUrl}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:shadow-md hover:bg-pink-600 hover:text-white'>
                      Demo
                    </button>
                  </a>
                  <a href={d.url}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:shadow-md hover:bg-pink-600 hover:text-white'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

          ))}

        </div>
        




      </div>
    </div>
  );
};

export default Work;


<div
  style={{ backgroundImage: `url(${bnb})` }}
  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
  >
  {/* Hover Effects */}
  <div className='opacity-0 group-hover:opacity-100'>
    <span className='text-2xl font-bold text-white tracking-wider'>
      Next JS Application
    </span>
    <div className='pt-8 text-center'>
      <a href='https://airbnb-clone-project-gcypefnsg-zainbux99-gmailcom.vercel.app/'>
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:shadow-md hover:bg-pink-600 hover:text-white'>
          Demo
        </button>
      </a>
      <a href='https://github.com/zainbux/Airbnb-clone-project'>
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:shadow-md hover:bg-pink-600 hover:text-white'>
          Code
        </button>
      </a>
    </div>
  </div>
</div>