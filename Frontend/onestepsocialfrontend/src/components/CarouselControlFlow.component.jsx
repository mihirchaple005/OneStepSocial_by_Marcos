
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselPartComponent from './CarouselPart.component';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../index.css';

// import required modules
import {Autoplay, EffectCoverflow, Pagination} from 'swiper/modules'

export default function ControlFlow({
  ImagesAndVideosPath = []
}) {


  return (
    <>
      <div className='md:mx-[20em] mx-0 p-0 overflow-hidden'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={-100}
        autoplay = {{
            delay:3000,
            disableOnInteraction: false,
        }}
        pagination={false}
        slidesPerView={'auto'}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {
          ImagesAndVideosPath.map((item, index) => (
            <SwiperSlide key={index}>
            <CarouselPartComponent path={item.url}/>
            </SwiperSlide>
          ))
        }
       
      </Swiper>
      </div>
    </>
  );
}



{/*          
  <SwiperSlide>
    <CarouselPartComponent 
        path = 'https://cdn.devdojo.com/tails/images/awCSXL6Bul1aC2IHk1doOigdVFrNNJe0oLfWRzZ.png'
    />
    </SwiperSlide>*/}

// App.jsx  == > calling code for this control flow

// import './App.css'
// import Onestepsocial from './components/Onestepsocial.component'

// import ControlFlow from './components/ControlFlow'

// function App() {

//   const ImagesAndVideosPath = [
//     {
//       url : 'https://th.bing.com/th/id/OIP.CBS8VWlB8mIzhU8WbUkcsAHaEw?w=1400&h=900&rs=1&pid=ImgDetMain'
//     },
//     {
//       url : 'https://th.bing.com/th/id/OIP.CBS8VWlB8mIzhU8WbUkcsAHaEw?w=1400&h=900&rs=1&pid=ImgDetMain'
//     },
//     {
//       url : 'https://th.bing.com/th/id/OIP.CBS8VWlB8mIzhU8WbUkcsAHaEw?w=1400&h=900&rs=1&pid=ImgDetMain'
//     },
//     {
//       url : 'https://th.bing.com/th/id/OIP.CBS8VWlB8mIzhU8WbUkcsAHaEw?w=1400&h=900&rs=1&pid=ImgDetMain'
//     },
//     {
//       url : 'https://th.bing.com/th/id/OIP.CBS8VWlB8mIzhU8WbUkcsAHaEw?w=1400&h=900&rs=1&pid=ImgDetMain'
//     },
    
//   ];


//   return (
//     <>
    
//       <Onestepsocial />


//       <ControlFlow  
//         ImagesAndVideosPath = {ImagesAndVideosPath}
//         />   
//     </>
//   )
// }

// export default App
