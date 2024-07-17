import React from 'react';

const Cards = () => {
  return (
    <> 
    <h1 className='text-center text-5xl font-medium mt-24'>Features</h1>
      <div className='container flex flex-row items-start w-auto h-auto mt-24'>
        <img src='https://via.placeholder.com/100' alt='Feature 1' className='w-5/12 h-72 ms-10 flex-shrink-0'/>
        <div className='flex flex-col ms-20'>
          <h4 style={{color:"rgba(85, 85, 255, 1)"}} className='text-3xl font-medium mt-3 tracking-tight leading-3'>Real-time Collaboration</h4>
          <p className='text-gray-400 mt-6 text-lg font-normal'>
            Work together with your team on the same document simultaneously. Share your ideas and see updates in real-time, enhancing productivity and teamwork. 
            This feature allows for smooth communication and efficient workflow. With real-time collaboration, everyone stays on the same page, literally and figuratively. 
          </p>
        </div>
      </div>

      <div className='container flex flex-row items-start w-auto h-auto mt-72'>
        <img src='https://via.placeholder.com/100' alt='Feature 2' className='w-5/12 h-72 ms-10 flex-shrink-0'/>
        <div className='flex flex-col ms-20'>
          <h4 style={{color:"rgba(85, 85, 255, 1)"}} className='text-3xl font-medium mt-3 tracking-tight leading-3'>Secure Document Sharing</h4>
          <p className='text-gray-400 mt-6 text-lg font-normal'>
            Share your documents securely with your team or clients. Your data is protected with top-notch security features ensuring privacy and safety.
            Secure sharing means you can confidently distribute sensitive information. The security protocols prevent unauthorized access, keeping your data safe.
          </p>
        </div>
      </div>

      <div className='container flex flex-row items-start w-auto h-auto mt-72'>
        <img src='https://via.placeholder.com/100' alt='Feature 3' className='w-5/12 h-72 ms-10 flex-shrink-0'/>
        <div className='flex flex-col ms-20'>
          <h4 style={{color:"rgba(85, 85, 255, 1)"}} className='text-3xl font-medium mt-3 tracking-tight leading-3'>Accessible Anywhere</h4>
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
