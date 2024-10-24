"use client"; 

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Photo from "@/components/Photo";
import {FloatingWhatsApp} from "react-floating-whatsapp";
import React from "react";



// Array of professionals 
const professionals = [
  {
    name: "CEO Fullstack Developer",
    title: "Gleison",
    description: `Sou Matheus Freitas, desenvolvedor júnior da HouseOfCode, com um forte comprometimento em me aperfeiçoar tecnicamente e contribuir para o crescimento dos projetos. 
    Com foco em desenvolvimento front-end, aplico as melhores práticas e agrego valor à equipe com eficiencia e visão inovadora.`,
    photo: "/assets/GleisonCEO-01.png",  //{/*picture url*/}
    cv: "/assets/Gleisonfreitas-curriculo.png",
    dwnl:"Gleison Freitas - CEO Fullstack Developer",
    socials: {

      github: "https://github.com/gleison1986CEO",
      linkedin: "https://www.linkedin.com/in/gleison-silveira-de-freitas-04385022b/",
      youtube: "",
      instagram: "https://www.instagram.com/houseofcode.ofc/profilecard/?igsh=MXh4aDduNzFpbG1w",

    },

    stats: [

      {num:2, text:"Anos de experiencia"},
      {num:4, text:"Projetos concluídos"},
      {num:15, text:"tecnologias geridas"},
      {num:1, text:"Code Commits"}
      
    ]
  },
  {
    name: "Fullstack Developer",
    title: "Reynaldo",
    description: `Sou Matheus Freitas, desenvolvedor júnior da HouseOfCode, com um forte comprometimento em me aperfeiçoar tecnicamente e contribuir para o crescimento dos projetos. 
    Com foco em desenvolvimento front-end, aplico as melhores práticas e agrego valor à equipe com eficiencia e visão inovadora.`,
    photo: "/assets/ReynaldoDevfullstack-01.png", // {/*picture url*/}
    cv: "/assets/Reynaldodesouza-curriculo.png",
    dwnl: "Reynaldo de Souza - Fullstack Developer",
    socials: {

      github: "https://github.com/ReynaldoAnalista",
      linkedin: "https://www.linkedin.com/in/reynaldodev2306/",
      youtube: "",
      instagram: "https://www.instagram.com/houseofcode.ofc/profilecard/?igsh=MXh4aDduNzFpbG1w",

    },

    stats: [

      {num:1, text:"Anos de experiencia"},
      {num:3, text:"Projetos concluídos"},
      {num:1, text:"tecnologias geridas"},
      {num:5, text:"Code Commits"}
      
    ]
  },
  {
    name: "Junior Developer",
    title: "Matheus",
    description: `Sou Matheus Freitas, desenvolvedor júnior da HouseOfCode, com um forte comprometimento em me aperfeiçoar tecnicamente e contribuir para o crescimento dos projetos. 
    Com foco em desenvolvimento front-end, aplico as melhores práticas e agrego valor à equipe com eficiencia e visão inovadora.`,
    photo: "/assets/MatheusDevjunior-01.png", //{/*picture url*/}
    cv: "/assets/Matheusfreitas-curriculo.png",
    dwnl: "Matheus Freitas - Junior Developer",
    socials: {

      github: "https://github.com/Srfreitas001",
      linkedin: "https://www.linkedin.com/in/matheus-freitas-64619827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      youtube: "",
      instagram: "https://www.instagram.com/houseofcode.ofc/profilecard/?igsh=MXh4aDduNzFpbG1w",

    },

    stats: [

      {num:1, text:"Anos de experiencia"},
      {num:6, text:"Projetos concluídos"},
      {num:5, text:"tecnologias geridas"},
      {num:4, text:"Code Commits"}

    ]
  },
];



const Home = () => {
  const [index, setIndex] = useState(0); // State to control visible professional
  const [fade, setFade] = useState(true); // State to smooth transition

  const handleDownload = ()=> {
    const currentCv = professionals[index].cv;
    const currentDwnl = professionals[index].dwnl
    const link = document.createElement('a');
   link.href= currentCv; //path to my data curriculum
   link.download = currentDwnl; //name of the data to be downloaded
   link.click();


  };

  // function to change professional
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Initiate fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % professionals.length); // change co-worker
        setFade(true); // Initiate fade-in
      }, 500); // Time to fade-out
    }, 15000); // change 15 to 15 sec

    return () => clearInterval(interval); // clean the screen when the changes occur
  }, []);

  const currentProfessional = professionals[index]; // Select actual co-worker

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* Professional ibfo */}
          <div className={`text-center xl:text-left order-2 xl:order-none transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-xl">{currentProfessional.name}</span>

            <h1 className="h1 mb-6 text-accent">
            <span className="text-white">Olá,sou</span> <br />{currentProfessional.title}</h1>

            <p className="max-w-[500px] mb-9 text-white/ text-justify" dangerouslySetInnerHTML={{ __html: currentProfessional.description }}>
             
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button onClick={handleDownload}
                variant="outline"
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span>Baixar Currículo</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                text-accent text=base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                links={currentProfessional.socials} />
              </div>
            </div>
          </div>

          {/* Co-worker's Picture */}
          <div className={`order-1 xl:order-none mb-8 xl:mb-0 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <Photo src={currentProfessional.photo} /> {/* change pic as a prop */}
          </div>


        </div>
      </div>
      <Stats stats={currentProfessional.stats} />

      {/* whatsapp btn */}

      <div className="fixed bottom-5 right-5">

        

        <div className="">

          <FloatingWhatsApp 
          
          
            phoneNumber="+5521965408033"
            accountName="HouseOfCode"
            chatMessage="Oi, tudo bem? Como posso te ajudar?"
            statusMessage="Online agora"
            avatar="/assets/Whatsappavatar-01.jpeg"
            notification={true}
            notificationDelay={30}
            allowClickAway={true}
            allowEsc={true}
            darkMode={false}
            style={{ bottom: '20px', right: '20px' }}
            className="custom-whatsapp"
    
          />
          
        </div>
      </div>

    </section>
  );
};

export default Home;