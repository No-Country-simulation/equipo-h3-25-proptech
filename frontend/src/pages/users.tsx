import ArrowButton from "../components/common/arrowButton";
import PreFooter from "../components/common/preFooter";
import Button from "../components/common/button";
import Card from "../components/common/card";
import usersData, { CardProps } from "../data/users";
import { list_icon, users_hero_header } from "../assets";



export default function Users() {
  return (
    <>
      <div className="mb-28">
        <section className="shadow-sectio p-12 relative">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 gap-16 items-center">
            <img src={users_hero_header} alt="" className="min-w-[400px] w-[600px]" />
            <div className="max-w-[620px]">
              <h3 className="font-bold font-Exo2 text-2xl">FINANCIA.AI</h3>
              <h2 className="font-bold font-Exo2 text-5xl mb-6">FINANCIAMIENTO PARA  CADA MEDIDA Y <span className="text-primary-500">NECESIDAD</span></h2>
              <p className="text-body">
                Descubre cómo ayudamos a inversores, compradores de terrenos y ahorradores con capacidad de inversión a alcanzar sus metas con <strong>soluciones de financiamiento flexibles y confiables.</strong>
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <Button onClick={() => {}} variant="secondary">FINANCIAR UN TERRENO</Button>
                <Button onClick={() => {}} variant="primary">SIMULA TU INVERSIÓN</Button>
              </div>
            </div>
          </div>

        </section>


        {usersData.map((user, index) => (
          <Template
            key={index}
            title={user.title}
            description={user.description}
            image={user.image}
            coin={user.coin}
            bgColor={index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-white"}
            cardColor={index % 2 === 0 ? "bg-white" : "bg-[#F6F6F6]"}
            cards={user.cards}
            inverse={index % 2 !== 0}
          />
        ))}

      </div>
      <PreFooter />
    </>
  );
}



function CheckList() {
  return (
    <ul className="mt-6">
      <li className="flex items-center gap-3">
        <img src={list_icon} alt="" />
        <p>Ser mayor de <strong>18 años.</strong></p>
      </li>
      <li className="flex items-center gap-3">
        <img src={list_icon} alt="" />
        <p>Tener <strong>ingresos comprobables.</strong></p>
      </li>
      <li className="flex items-center gap-3">
        <img src={list_icon} alt="" />
        <p>Documento de <strong>identidad vigente.</strong></p>
      </li>
      <li className="flex items-center gap-3">
        <img src={list_icon} alt="" />
        <p>Reporte crediticio <strong>limpio.</strong></p>
      </li>
    </ul>
  );
}



interface TemplateProps {
  bgColor: string;
  cardColor: string;
  title: string;
  description: string;
  image: string;
  coin: string;
  cards: CardProps[];
  inverse?: boolean;
}

function Template({ title, description, bgColor, cardColor, image, coin, cards, inverse }: TemplateProps) {
  return (
    <section id="faqs" className={`py-12 px-8 relative pb-28 last:pb-12 pt-20 shadow-section ${bgColor} group`}>
      <div className={`max-w-screen-2xl mx-auto grid grid-cols-2 gap-12 items-center rounded-2xl p-5 ps-12 ${cardColor}`}>
        {inverse && (
          <div className="relative overflow-hidden rounded-bl-[62px]">
            <img src={image} alt="" className="rounded-2xl" />
            <img src={coin} alt="" className={`absolute bottom-[-20px] left-[-23px]`} />
          </div>
        )}
        <div>
          <h3 className="font-bold font-Exo2 text-2xl">FINANCIA.AI</h3>
          <h2 className="font-bold font-Exo2 text-5xl mb-6">USUARIO: <span className="text-primary-500">{title}</span></h2>
          <p className="text-body">
            {description}
          </p>
          <CheckList />
        </div>
        {!inverse && (
          <div className="relative overflow-hidden rounded-br-[62px]">
            <img src={image} alt="" className="rounded-2xl" />
            <img src={coin} alt="" className={`absolute bottom-[-20px] right-[-20px]`} />
          </div>
        )}
      </div>
      <div className="max-w-screen-2xl mx-auto grid gap-10 mt-10 grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} icon={card.icon} bgColor={cardColor}>
            <p>{card.description}</p>
          </Card>
        ))}
      </div>
      <ArrowButton className="absolute left-1/2 translate-x-[-50%] bottom-[-50px] z-10 group-last:hidden"/>
    </section>
  );
}
