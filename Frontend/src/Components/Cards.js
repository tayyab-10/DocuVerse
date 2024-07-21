import React from 'react';
import colimage from "../Assets/Col.png";
import anywhere from "../Assets/Accessbile.png";
import Text from "../Assets/Text.png";

const Cards = () => {
  return (
    <>
      <h1 className='text-center text-5xl font-medium mt-24'>Features</h1>
      
      {/* Responsive Card 1 */}
      <div className='container mx-auto flex flex-col md:flex-row items-start w-auto h-auto mt-24 px-4 md:px-0'>
        <img src={colimage} alt='Feature 1' className='w-full md:w-5/12 h-auto md:h-72 ms-0 md:ms-10 flex-shrink-0 object-contain' />
        <div className='flex flex-col ms-0 md:ms-20 mt-6 md:mt-0'>
          <h4 style={{ color: "rgba(85, 85, 255, 1)" }} className='text-3xl font-medium mt-3 tracking-tight leading-tight'>Real-time Collaboration</h4>
          <p className='text-gray-400 mt-6 text-lg font-normal'>
            Work together with your team on the same document simultaneously. Share your ideas and see updates in real-time, enhancing productivity and teamwork.
            This feature allows for smooth communication and efficient workflow. With real-time collaboration, everyone stays on the same page, literally and figuratively.
          </p>
        </div>
      </div>

      {/* Responsive Card 2 */}
      <div className='container mx-auto flex flex-col md:flex-row items-start w-auto h-auto mt-24 px-4 md:px-0'>
        <img src={Text} alt='Feature 2' className='w-full md:w-5/12 h-auto md:h-72 ms-0 md:ms-10 flex-shrink-0 object-center' />
        <div className='flex flex-col ms-0 md:ms-20 mt-6 md:mt-0'>
          <h4 style={{ color: "rgba(85, 85, 255, 1)" }} className='text-3xl font-medium mt-3 tracking-tight leading-tight'>Advanced Text Formatting</h4>
          <p className='text-gray-400 mt-6 text-lg font-normal'>
            Enhance your documents with advanced text formatting options. Use different fonts, sizes, colors, and styles to create visually appealing content.
            This feature helps you to emphasize important points, organize your text better, and make your documents more readable and professional.
          </p>
        </div>
      </div>

      {/* Responsive Card 3 */}
      <div className='container mx-auto flex flex-col md:flex-row items-start w-auto h-auto mt-24 px-4 md:px-0'>
        <img src={anywhere} alt='Feature 3' className='w-full md:w-5/12 h-auto md:h-72 ms-0 md:ms-10 flex-shrink-0 object-cover' />
        <div className='flex flex-col ms-0 md:ms-20 mt-6 md:mt-0'>
          <h4 style={{ color: "rgba(85, 85, 255, 1)" }} className='text-3xl font-medium mt-3 tracking-tight leading-tight'>Accessible Anywhere</h4>
          <p className='text-gray-400 mt-6 text-lg font-normal'>
            Access your documents from any device at any time. Whether you are at home or on the go, stay connected and continue your work seamlessly.
            This flexibility ensures you can always stay productive. Whether using a laptop, tablet, or phone, your documents are just a click away.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
