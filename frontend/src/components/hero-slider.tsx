// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css'
// import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider: React.FC = () => {
  return (
    <div className="flex flex-col  md:flex-row my-5 ">
      <div className=" flex-1 aspect-square">
        <Swiper
          className='max-w-screen-sm p-5 h-full'
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="p-16 grid content-center">
            <div >
              <h4 className="text-sm font-bold ">FINANCIA.AI</h4>
              <h2 className="text-3xl font-semibold pb-5">TERRENOS ACCESIBLES, <span className="fg-brand-light">SUEÑOS</span> POSIBLES</h2>
              <p className="pb-5">
                Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, conectando familias con su hogar ideal y ofreciendo a inversores oportunidades en activos de alto valor.
              </p>
              <div className="grid grid-flow-col justify-stretch gap-10">
                <button className="px-4 py-2 border text-white rounded-xl">Simula tu crédito</button>
                <button className="px-4 py-2 bg-brand-light text-white font-bold rounded-xl text-shadow-2xl">Financia con nosotros</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-16 grid content-center">
            <div >
              <h4 className="text-sm font-bold ">FINANCIA.AI</h4>
              <h2 className="text-3xl font-semibold pb-5">INVERSIONES INTELIGENTES, <span className="fg-brand-light">RENTABILIDAD</span> ASEGURADA</h2>
              <p className="pb-5">
                Únete a nosotros y contribuye a crear un impacto positivo mientras aseguras tu futuro financiero con inversiones en activos de alto valor y con alto potencial de retorno.              </p>
              <div className="grid grid-flow-col justify-stretch gap-10">
                <button className="px-4 py-2 border text-white rounded-xl">Mas información</button>
                <button className="px-4 py-2 bg-brand-light text-white font-bold rounded-xl text-shadow-2xl">Invierte con nosotros</button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        {/* Agregar más slides si es necesario */}
        <div className="relative px-16"
          style={{
            borderTop: '2px solid var(--clr-fg)',
            borderLeft: '2px solid var(--clr-fg)',
            borderRadius: '10rem 0 0 0'
          }}
        >
          <input type="text" placeholder="BUSCA TU INVERSIÓN" className="w-full m-5 px-4 py-2 border-2 rounded-xl clr-bg" />
          <hr className='absolute bottom-0 right-0 w-1/3 border-1' />
        </div>
      </div>
      <div className="relative flex-1 aspect-square z-10 "
        style={{
          backgroundImage: 'url(https://www.imobzi.com/papoimobiliario/wp-content/uploads/2018/03/venda-de-terrenos.jpg)',
          backgroundPosition: 'top right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          border: '2px solid var(--clr-fg)',
          borderLeft: '2px solid var(--clr-fg)',
          borderRadius: '5rem 0 5rem 0'
        }}>
        <div className="absolute top-10 -right-10 aspect-square h-1/4 h-auto border-2 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(https://st4.depositphotos.com/7417846/22473/i/1600/depositphotos_224736636-stock-photo-portrait-beautiful-happy-smiling-family.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        <div className="absolute bottom-14 -left-10 aspect-square h-1/4 h-auto border-2 rounded-3xl"
          style={{
            backgroundImage: 'url(https://static1.bigstockphoto.com/2/6/4/large1500/46211113.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
      </div>
    </div>
  );
};

export default HeroSlider;
