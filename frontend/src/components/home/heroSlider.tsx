import { useNavigate } from 'react-router-dom';
// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { home_hero_header } from '../../assets';


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../common/button';

const HeroSlider: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide >
        <div className="flex flex-col p-0 gap-5 md:p-10 md:flex-row">
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="font-Exo2 text-2xl font-bold ">FINANCIA.AI</h4>
            <h2 className="font-Exo2 text-5xl font-semibold pb-5">FINANCIACIÓN ACCESIBLE, <span className="text-primary-400">SUEÑOS</span> POSIBLES</h2>
            <p className="pb-5">
              Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, conectando familias con su hogar ideal y ofreciendo a inversores oportunidades en activos de alto valor.
            </p>
            <div className="grid grid-flow-col gap-1 justify-stretch md:gap-10 ca">
              <Button onClick={() => { navigate('./calculadora-financiamiento') }} variant="secondary">FINANCIAR UN TERRENO</Button>
              <Button onClick={() => { }} variant="primary">INVERTIR CON NOSOTROS</Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={home_hero_header} alt="Home banner" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
