import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {

    return (
        <section className=''>
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}>
                
            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-8 md:mb-16  "
            >
                <SwiperSlide>
                    <img className='relative ' src={slide1} alt="" />
                    <h2 className='absolute uppercase w-full text-center -mt-8 md:-mt-16 text-gray-100 text-base md:text-2xl font-semibold'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative ' src={slide2} alt="" />
                    <h2 className='absolute uppercase w-full text-center -mt-8 md:-mt-16 text-gray-100 text-base md:text-2xl font-semibold'> Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative ' src={slide3} alt="" />
                    <h2 className='absolute uppercase w-full text-center -mt-8 md:-mt-16 text-gray-100 text-base md:text-2xl font-semibold'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative ' src={slide4} alt="" />
                    <h2 className='absolute uppercase w-full text-center -mt-8 md:-mt-16 text-gray-100 text-base md:text-2xl font-semibold'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative ' src={slide5} alt="" />
                    <h2 className='absolute uppercase w-full text-center -mt-8 md:-mt-16 text-gray-100 text-base md:text-2xl font-semibold'>Salads</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;