import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay } from 'swiper/modules';

const TestimonialSwiper = ({reverse}) => {
  
    return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection:reverse
          
        }}
        
       
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center  text-center  '>
            <p className=' text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
            <div className='border-[1px] w-[400px] mt-4'></div>
            <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
              <div className='font-bold'>Richard Anderson</div>
              <div className='text-zinc-500'>Nevada, USA</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center  text-center  '>
            <p className=' text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
            <div className='border-[1px] w-[400px] mt-4'></div>
            <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
              <div className='font-bold'>Richard Anderson</div>
              <div className='text-zinc-500'>Nevada, USA</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center  text-center  '>
            <p className=' text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
            <div className='border-[1px] w-[400px] mt-4'></div>
            <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
              <div className='font-bold'>Richard Anderson</div>
              <div className='text-zinc-500'>Nevada, USA</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center  text-center  '>
            <p className=' text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
            <div className='border-[1px] w-[400px] mt-4'></div>
            <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
              <div className='font-bold'>Richard Anderson</div>
              <div className='text-zinc-500'>Nevada, USA</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center  text-center  '>
            <p className=' text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
            <div className='border-[1px] w-[400px] mt-4'></div>
            <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
              <div className='font-bold'>Richard Anderson</div>
              <div className='text-zinc-500'>Nevada, USA</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col justify-center items-center  text-center  '>
            <p className=' text-3xl'>I just got a job that I applied for via career-fy! I used the site all the time during my job hunt.</p>
            <div className='border-[1px] w-[400px] mt-4'></div>
            <div className='flex flex-col justify-items-end text-right  w-[400px] mt-4'>
              <div className='font-bold'>Richard Anderson</div>
              <div className='text-zinc-500'>Nevada, USA</div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default TestimonialSwiper;
