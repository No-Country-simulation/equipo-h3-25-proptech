import Button from "../components/button";
import PreFooter from "../components/preFooter";
import questions from "../data/help";
import { useState} from "react";
import {
  help_hero_header,
  help1_image,
  help2_image,
  help3_image,
  help4_image,
  help5_image,
  help6_image, 
  minus_icon,
  plusBlack_icon,
} from "../assets";
import ArrowButton from "../components/arrowButton";



export default function Help() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handelChange = (index: number) => {
    if (expanded === `panel ${index + 1}`) {
      setExpanded(false);
    } else {
      setExpanded(`panel ${index + 1}`);
    }
  }


  return (
    <div className="">
      <section className="p-12 shadow-[0px_0px_15px_3px_rgba(0,0,0,0.25)] relative">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 gap-16 items-center">
          <img src={help_hero_header} alt="" className="min-w-[400px] w-[600px]" />
          <div className="max-w-[620px]">
            <h3 className="font-bold font-Exo2 text-2xl">FINANCIA.AI</h3>
            <h2 className="font-bold font-Exo2 text-5xl mb-6">RESUELVE TODAS TUS <span className="text-primary-500">DUDAS</span> EN UN SOLO LUGAR</h2>
            <p className="text-body">
              Explora las preguntas frecuentes para encontrar respuestas claras y rápidas. <strong>Descubre cómo funciona nuestra plataforma,</strong> los requisitos para financiar terrenos y las oportunidades de inversión que ofrecemos.
            </p>
          </div>
          <ArrowButton to="#faqs" className="absolute left-1/2 translate-x-[-50%] bottom-[-50px] z-10" />
        </div>
      </section>

      <section id="faqs" className="relative bg-[#f6F6F6] p-20 pb-10 mb-20 shadow-[0px_0px_15px_3px_rgba(0,0,0,0.25)]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-[7fr_5fr] gap-12">
          <Accordion data={questions} handleChange={handelChange} expanded={expanded}/>
          <div className="grid grid-cols-2 grid-rows-[repeat(10,_auto)] gap-6 h-min">
            <div className="col-span-2 row-span-4 relative">
              <img src={help1_image} alt="image 1" className="w-full" />
              <div className="absolute bottom-[10%] w-full flex gap-10 justify-center">
                <Button variant="secondary" onClick={() => {}}>SIMULA TU INVERSIÓN</Button>
                <Button variant="primary" onClick={() => {}}>SIMULA TU INVERSIÓN</Button>
              </div>
            </div>
            <img src={help6_image} alt="image 6" className="w-full row-span-2" />
            <img src={help5_image} alt="image 5" className="w-full row-span-3" />
            <img src={help2_image} alt="image 2" className="w-full row-span-3" />
            <img src={help3_image} alt="image 3" className="w-full row-span-3" />
            <img src={help4_image} alt="image 4" className="w-full " />
          </div>
        </div>
      </section>

      <PreFooter />
    </div>
  );
}



interface AccordionProps {
  data: {
    question: string;
    answer: string;
  }[];
  handleChange: (index: number) => void;
  expanded: string | false;
}

function Accordion({ data, handleChange, expanded }: AccordionProps) {
  return (
    <div>
      {data.map((pregunta, index) => (
        <div
          key={index}
          className={`border-b-[1px] border-[#8C8C8C] last:border-b-0 transition-all duration-500 transition-ease grid ${expanded === `panel ${index + 1}` ? 'grid-rows-[auto_1fr] pb-8' : 'grid-rows-[auto_0fr]'}`}
          onClick={() => handleChange(index)}
        >
          <div className="flex items-center justify-between p-3">
            <h3 className="font-Exo2 font-semibold text-2xl">{index + 1}. {pregunta.question}</h3>
            <button className="bg-white flex items-center justify-center rounded-full w-10 h-10" title="expand">
              <img src={expanded === `panel ${index + 1}` ? minus_icon : plusBlack_icon} alt="" />
            </button>
          </div>
          <p className={`text-body overflow-hidden pe-10`}>{pregunta.answer}</p>
        </div>
      ))}
    </div>
  );
}
