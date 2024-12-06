import { arrowDown_icon } from "../../assets";

export default function HeroHeader() {
  return (
    <section className="h-[500px]a pt-28 pb-20 flex justify-center items-center relative overflow-hidden">
      <div className="bg-[url('/src/assets/aboutUs/aboutUs_hero_header.webp')] bg-cover blur-[5px] absolute top-0 w-[calc(100%+10px)] h-[calc(100%+10px)]">
        <div className="bg-black/50 w-full h-full blur-[5px]a"></div>
      </div>
      <div className="text-white max-w-[600px] text-center relative">
        <h2 className="font-Exo2 text-2xl font-bold">FINANCIA.AI</h2>
        <h1 className="font-Exo2 text-5xl font-bold mb-7 mt-2">
          NUESTRA HISTORIA MISIÓN, VISIÓN Y VALORES
        </h1>
        <p className="text-xl">
          En Financia.ai, buscamos transformar el acceso a financiamiento para la <strong>compra de terrenos latinoamericanos</strong>, ofreciendo una plataforma segura, transparente yácil de usar.
        </p>
        <a href="#info" className="inline-block bg-white rounded-full p-6 mt-6">
          <img src={arrowDown_icon} alt="arrow down" width={50} height={50} className="w-[50px] h-[50px] translate-y-1" />
        </a>
      </div>
    </section>
  );
}
