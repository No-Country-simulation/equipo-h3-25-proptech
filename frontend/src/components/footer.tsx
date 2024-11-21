import Logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-gray-700 px-12">
      <div className="border-b-[1px] border-gray-600 grid grid-cols-9 gap-16 pt-5 pb-7">
        <div className="col-span-3">
          <h5 className="font-semibold mb-3 text-black">SEGUINOS</h5>
          <ul className="flex gap-4">
            <li className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">M</li>
            <li className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">M</li>
            <li className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">M</li>
            <li className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">M</li>
            <li className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">M</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h5 className="font-semibold mb-3 text-black">TE AYUDAMOS</h5>
          <p>Facilitamos el acceso a terrenos</p>
        </div>
        <div className="col-span-2">
          <h5 className="font-semibold mb-3 text-black">SUCURSALES</h5>
          <p>Facilitamos el acceso a terrenos</p>
        </div>
        <div className="col-span-2">
          <h5 className="font-semibold mb-3 text-black">CONTACTANOS</h5>
          <p>Facilitamos el acceso a terrenos</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-16 py-8">
        <div className="col-span-4">
          <img src={Logo} alt="" />
        </div>
        <div className="col-span-3">
          <p>
            Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, <strong>conectando</strong>
          </p>
        </div>
        <div className="col-start-10 col-span-3">
          <p>
            Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, <strong>conectando</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
