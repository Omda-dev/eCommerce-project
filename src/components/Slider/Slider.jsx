import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import chair from '../../assets/chair.png'
import chair2 from '../../assets/chair2.png'
import chair1 from '../../assets/chair1.png' 

import './slider.css'

function Slider () {
  return (
    <Swiper
      spaceBetween={30}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      speed={1200}
      modules={[Navigation, Pagination, Autoplay]}
      className='mySwiper'
    >
      {/* Slide 1 */}
      <SwiperSlide className='slide slide1'>
        <div className='slide-background'></div>
        <div className='slide-content'>
          <div className='slide1-text'>
            <p style={{ color: '#ff0000', paddingTop:'50px' }}>Get up to 50% off Today Only!</p>
            <h1>
              Wooden Chair <br /> Collection
            </h1>
                        <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              porro voluptas laboriosam temporibus repudiandae tempora esse
              blanditiis, asperiores labore a culpa velit quidem nostrum est
              facere dolore, nesciunt fugit! Distinctio?
            </p>
            <button>Shop Now</button>
          </div>
          <div className='slide1-image'>
            <img src={chair1} alt='Chair 1' className='slide-img-1' />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className='slide slide2'>
        <div className='slide-background'></div>
        <div className='slide-content'>
          <div className='slide2-text'>
            <p>Limited Time Offer</p>
            <h1>
              Modern Chair <br /> Styles
            </h1>
                        <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              porro voluptas laboriosam temporibus repudiandae tempora esse
              blanditiis, asperiores labore a culpa velit quidem nostrum est
              facere dolore, nesciunt fugit! Distinctio?
            </p>
            <button>Shop Now</button>
          </div>
          <div className='slide2-image'>
            <img src={chair2} alt='Chair 2' className='slide-img-2' />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className='slide slide3'>
        <div className='slide-background'></div>
        <div className='slide-content slide3-layout'>
          <div className='slide3-image'>
            <img src={chair} alt='Chair 3' className='slide-img-3' />
          </div>
          <div className='slide3-text'>
            <p>New Arrival</p>
            <h1>
              Elegant Chair <br /> Designs
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              porro voluptas laboriosam temporibus repudiandae tempora esse
              blanditiis, asperiores labore a culpa velit quidem nostrum est
              facere dolore, nesciunt fugit! Distinctio?
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
