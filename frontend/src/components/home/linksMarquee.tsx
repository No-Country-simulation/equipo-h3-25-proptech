import Marquee from 'react-fast-marquee';
import shield from '../../assets/home/shield.webp';
import coin from '../../assets/home/coin.webp';
import calculator from '../../assets/home/calculator.webp';
import trophy from '../../assets/home/trophy.webp';
import wallet from '../../assets/home/wallet.webp';
import { Link } from 'react-router-dom';

const links = [
  { icon: coin, label: 'Financiamiento', link: '/financiamiento' },
  { icon: shield, label: 'Seguridad garantizada', link: '/seguridad' },
  { icon: calculator, label: 'Simular prestamo', link: '/calculadora-financiamiento' },
  { icon: trophy, label: 'Casos de éxito', link: '/casos' },
  { icon: wallet, label: 'Inversión', link: '/inversion' },
];

const LinksMarquee = () => {
  return (
    <div className=" ">
      <Marquee gradient={true} speed={50} className="overflow-visible h-52">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
          >
            <div className="relative overflow-visible flex flex-col items-center justify-end w-80 h-28  mt-20 px-10 text-center scale-100 text-white  hover:brightness-110 transition-all"
              style={{ backgroundColor: `hsl(148, 86%, ${30 + index * 3}%)` }}
            >
              <div className="absolute -top-20">
                <img src={link.icon} alt="icon" className="w-36 drop-shadow-xl hover:rotate-3 transition-all" />
              </div>
              <hr className="w-full border-t-2" />
              <div className="p-2 uppercase">{link.label}</div>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LinksMarquee;
