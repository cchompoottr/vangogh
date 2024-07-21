import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="bg text-white">

        <nav className='h-[5rem] flex items-center justify-between w-[90%] mx-auto pt-10'>
          <div>
            <a href='#'>
              <h1 className='text-6xl font-bold'>arti.</h1>
            </a>
          </div>
          <div>
            <ul className='flex gap-10 text-black text-3xl font-medium'>
              <li><a href='#'>HOME</a></li>
              <li><a href='#'>ABOUT</a></li>
              <li><a href='#'>ARTWORK</a></li>
            </ul>
          </div>

        </nav>



       <h1 className="title text-8xl">VINCENT</h1>

      <div className="flex justify-center pb-10 pt-5">
        <div className="mask1">VA</div>
        <div className="mask2">N GO</div>
        <div className="mask3">GH</div>
      </div>


      <div className="flex justify-center items-center pb-20">

      <button 
        type="button" 
        className="text-white bg-black hover:bg-gray-800 focus:outline-none rounded-full p-10 text-center inline-flex items-center"
        onClick={() => {
          const target = document.getElementById('target-section');
          if (target) {
            const viewportHeight = window.innerHeight;
            const targetRect = target.getBoundingClientRect();
            const targetOffsetTop = targetRect.top + window.scrollY;
            const targetHeight = targetRect.height;
      
            const scrollToY = targetOffsetTop - (viewportHeight / 2) + (targetHeight / 2);
      
            window.scrollTo({
              top: scrollToY,
              behavior: 'smooth'
            });
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="w-14 h-14">
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
        </svg>
      </button>


      </div>


      <div className="container mx-auto px-4 flex flex-col items-center pt-10 mt-10 pb-10 mb-10">
          <div className="w-full flex justify-between gap-12 -translate-x-96 -ml-96">
            <img className="w-auto h-[550px] hover:slide-up" src="../vangogh/1.png" alt="1" data-twe-animation="[slideUp]=onHover" />
            <img className="w-auto h-[550px] hover:slide-up" src="../vangogh/2.png" alt="2" data-twe-animation="[slideUp]=onHover" />
            <img className="w-auto h-[550px] hover:slide-up" src="../vangogh/3.png" alt="3" data-twe-animation="[slideUp]=onHover" />
            <img className="w-auto h-[550px] hover:slide-up" src="../vangogh/4.png" alt="4" data-twe-animation="[slideUp]=onHover" />
            <img className="w-auto h-[550px] hover:slide-up" src="../vangogh/5.png" alt="5" data-twe-animation="[slideUp]=onHover" />
          </div>
          
          <div className="relative w-screen bg-white flex justify-center items-center between-space">
            <h1 className='absolute text-[8rem] font-bold text-black mix-blend-multiply z-10 -translate-y-40'>VINCENT VAN GOGH</h1>
            <h1 className='absolute text-[17rem] font-bold text-gray-300 mix-blend-multiply opacity-50 -translate-y-60'>VINCENT VAN GOGH</h1>
          </div>



          <div className="flex items-start mt-20 w-full">
            <div className="relative w-screen bg-white flex justify-center items-center pt-20 pb-20 mt-20 mb-20 mr-0 ml-0 translate-y-60">
              <img className="absolute w-[500px] h-auto -ml-80 mix-blend-multiply -mt-40 -translate-x-70" src="../vangogh/vangogh.png" alt="vangogh"/>
              <div className="absolute border-8 border-grey-300 w-[500px] h-[700px] -ml-60 -mt-40 mix-blend-multiply z-10 -translate-x-55"></div>
            </div>

            <div className="ml-30">
              <p className="text-4xl text-neutral-700 leading-loose mt-10 -translate-x-40 w-[700px]">
                <span className="text-gray-400">Born:</span> 30 March 1853; Zundert, Netherlands<br />
                <span className="text-gray-400">Died:</span> 29 July 1890; Auvers-sur-Oise, France<br />
                <span id="target-section" className="text-gray-400">Nationality:</span> Dutch<br />
                <span className="text-gray-400">Art Movement:</span> Post-Impressionism<br />
                <span className="text-gray-400">Field:</span> Painting<br />
              </p>

              <button
                type="button"
                className="inline-block rounded border-t-8 border-l-8 border-neutral-800 p-12 pt-6 pb-6 text-3xl font-bold uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 custom-button"
                style={{ borderRightWidth: '12px', borderBottomWidth: '12px' }}
                data-twe-ripple-init>
                More Details
              </button>
            </div>

          </div>

        </div>


        <div className="relative w-screen bg-white flex justify-center items-center between-space">
            <h1 className='absolute text-[8rem] font-bold text-black mix-blend-multiply z-10 -translate-y-40'>WORKS</h1>
            <h1 className='absolute text-[17rem] font-bold text-gray-300 mix-blend-multiply opacity-50 -translate-y-60'>WORKS</h1>
        </div>

      </header>

  
    </div>
  );
}

export default App;
