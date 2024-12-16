import { useNavigate } from 'react-router-dom';
// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import investment_hero_header  from '../../assets/investment/investment_hero_header.webp';


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../common/button';
import { MaterialSymbol, SymbolCodepoints, } from 'react-material-symbols';

interface Features {
  title: string;
  icon: SymbolCodepoints;
  text: string;
}

const features: Features[] = [
  { icon: 'shield', title: 'SEGURIDAD', text: 'Alternativa segura y respaldada por análisis de mercado' },
  { icon: 'lock', title: 'TRANSPARENCIA', text: 'Transparencia y agilidad en todos los procesos' },
  { icon: 'thumb_up', title: 'SIMPLE', text: 'En pocos pasos realiza tu inversión con garantia de retorno' },
];

const InvestmentHeroSlider: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='relative shadow-lg'>
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
              <h2 className="font-Exo2 text-5xl font-semibold pb-5">INVERTE EN UNA FINTECH DE, <span className="text-primary-400">ALTA</span> REVALORIZACIÓN</h2>
              <p className="pb-5">
                Descubre una plataforma que combina innovación y seguridad para maximizar el crecimiento de tu capital. Con opciones accesibles, procesos rápidos y <span className='font-bold'>brindamos retornos sólidos a mediano y largo plazo.</span>
              </p>
              <div className="grid grid-flow-col gap-1 justify-stretch md:gap-10 ca">
                <Button onClick={() => { navigate('/calculadora-financiamiento') }} variant="secondary">CALCULA TU INVERSIÓN</Button>
                <Button onClick={() => { navigate('/register/paso1') }} variant="primary">INVERTIR CON NOSOTROS</Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={investment_hero_header} alt="Insvestent banner" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='relative -bottom-16  flex rounded-3xl overflow-hidden w-4/5 m-auto mb-24 bg-red-50 text-left shadow-2xl'>
        {features.map((feature, index) => (
          <div key={index} className=" flex flex-row  w-full px-5 py-4 gap-5 scale-100 text-white  hover:brightness-110 transition-all"
            style={{ backgroundColor: `hsl(148, 86%, ${27 + index * 7}%)` }}
          >
            <div className='flex items-center'>
              <div className="bg-white p-8 rounded-full w-12 h-12 aspect-square flex flex-col justify-center items-center shadow-2xl">
                <MaterialSymbol icon={feature.icon} size={42} color="black" />
              </div>
            </div>
            <div className=' '>
              <h2 className="uppercase font-bold mb-2">{feature.title}</h2>
              <div className="text-sm">{feature.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentHeroSlider;
