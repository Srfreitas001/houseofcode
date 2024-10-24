"use client";

import React, {useState} from "react";
import { Button } from "@/components/ui/button"; 
import { Description } from "@radix-ui/react-dialog";
import { info } from "autoprefixer";
import { FaHtml5, 
        FaCss3, 
        FaJs, 
        FaReact, 
        FaFigma, 
        FaNodeJs,
        FaFileExcel,
        FaChartPie,
        FaPython,
        FaGem,
        FaCoffee,
        FaCode,
        FaPhp,
        FaPencilAlt,
        FaPenNib
                    } from "react-icons/fa";

 import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
 
        
const professionals = {

    Gleison: {

        about: {

            title: "Sobre mim",
            description: "Sou Gleison Freitas, CEO da House of Code e programador full stack. Com quase 20 anos de vasta experiência em desenvolvimento de software, liderando equipes e projetos inovadores. Minha atuação vai desde o planejamento estratégico até a implementação de soluções tecnológicas eficientes.", 
            info: [
        
                {
                    fieldName: "Nome",
                    fieldValue: "Gleison Freitas",
                },
        
                {
                    fieldName: "Contato",
                    fieldValue: "(21) 96540-8033",
                },
        
                {
                    fieldName: "Experiência",
                    fieldValue: "15+ anos",
                },
        
                {
                    fieldName: "LinkeDin",
                    fieldValue: "Gleison Silveira",
                },
        
                {
                    fieldName: "Nacionalidade",
                    fieldValue: "Brasileira",
                },
        
                {
                    fieldName: "E-mail",
                    fieldValue: "devgleisonsilveira@gmail",
                },
        
                {
                    fieldName: "Freelance",
                    fieldValue: "Disponível",
                },
        
                {
                    fieldName: "Idiomas",
                    fieldValue: "Inglês & Português",
                },
            ]
        },

        experience: {

            icon: "/assets/resume/badge.svg",
            title: "Meu currículo",
            description: "Sou CEO e Full Stack Developer na House of Code, onde atuo desde 2024. Ao longo da minha carreira, tenho acumulado experiências em diversas áreas de desenvolvimento, com passagens por empresas como Monexbank como Php Developer (2024), HelpCG como Full Stack Developer (2023-2024), e Cashfy como Blockchain Developer (2020-2024). Também atuei como Desenvolvedor Full Stack na Atise Soluc. Emp. e Sumato.org.br (2007-2024), Global como Full Stack Game Developer (2023-2024) e no Instituto Curitiba de Saúde - ICS (2023). Além disso, fui Full Stack Developer na leSenechal (2022) e Laravel Developer em 2022. Trabalhei como Backend Developer em empresas como Estudologia, CTASERVICECAR, e também tive uma experiência como Designer Gráfico na Graficas RJ (2011-2016) e estagiário de Designer Ilustrator na Zion em 2018.",
            items: [
        
                {
                    company:"House of Code",
                    position: "CEO & Full Stack Developer",
                    duration:"2024 - Presente"
        
        
                },
        
                {
                    company:"Monexbank",
                    position: "Php Developer",
                    duration:"2024 - 2024"
        
        
                },
        
                {
                    company:"HelpCG",
                    position: "Full stack Developer",
                    duration:"2023 - 2024"
        
        
                },
        
                {
                    company:"Cashfy",
                    position: "Blockchain Developer",
                    duration:"2020 - 2024"
        
        
                },
        
                {
                    company:"Atise Soluc. Emp. e Sumato.org.br",
                    position: "Desenvolvedor Full stack",
                    duration:"2007 - 2024"
        
        
                },
        
                {
                    company:"Global",
                    position: "Full stack Game Developer",
                    duration:"2023 - 2024"
        
        
                },
        
                {
                    company:"instituto Curitiba de Saúde - ICS",
                    position: "Full stack Developer",
                    duration:"2023 - 2023"
        
        
                },
        
                {
                    company:"leSenechal",
                    position: "Full Stack Developer",
                    duration:"2022 - 2022"
        
        
                },
        
                {
                    company:"Laravel Developer",
                    position: "Full Stack Developer",
                    duration:"2022 - 2022"
        
        
                },
        
                {
                    company:"Estudologia",
                    position: "Backend Developer Ruby/Python",
                    duration:"2022 - 2022"
        
        
                },

                {
                    company: "CTASERVICECAR",
                    position:"Backend Developer",
                    duration: "2015 - 2020"
                },

                {
                    company: "Zion",
                    position:"Estagiário de Designer ilustrator",
                    duration: "2018 - 2018"
                },

                {
                    company: "Graficas Rj",
                    position:"Designer Gráfico",
                    duration: "2011 - 2016"
                },
        
            ]
        },

        education: {

            icon: "/assets/resume/badge.svg",
            title: "Minha educação",
            description: "Atualmente, estou cursando Engenharia de Software na Faculdade Descomplica (2022-2026). Além disso, busquei aprimorar minhas habilidades com uma série de cursos na Udemy, incluindo Apache Kafka with Java Spring (7 horas), Ruby (12 horas), e API Rest Spring Boot Java (6 horas). Também me aprofundei em áreas como SPA (5.5 horas), Swift 4, Xcode 9 e iOS 11 (45.5 horas), e C# (68.5 horas). Fiz cursos de Dapp (16 horas), Dart Lang (20.5 horas), Flutter (16.5 horas), e Flutter com MySQL e Aplicações (20.5 horas). Outras formações incluem Arquitetura com DDD (26.5 horas), Python Flask Rest Full API (16.5 horas), Python com A.I (12 horas), Swift iOS - Arquitetura MVVM (13.5 horas), Swift iOS - Swift 4 (49.5 horas), e Web Scraping (4.5 horas).",
            items: [
        
                {
                    institution:"Faculdade Descomplica",
                    degree: "Engenharia da Computação",
                    duration:"2022 - 2026"
        
                },
        
                {
                    institution:"Udemy",
                    degree: "Apache Kafka with Java spring",
                    duration:"7 horas"
        
                },
        
                {
                    institution:"Udemy",
                    degree: "Ruby",
                    duration:"12 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Api rest spring boot Java",
                    duration:"6 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "SPA",
                    duration:"5.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Swift 4, Xcode 9 e iOS 11",
                    duration:"45.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "C#",
                    duration:"68.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Dapp",
                    duration:"16 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Dart Lang",
                    duration:"20.5 horas"
        
                },
        
                {
                    institution:"Udemy",
                    degree: "Flutter",
                    duration:"16.5 horas"
        
                },
                
                {
                    institution:"Udemy",
                    degree: "Flutter on Mysql & Applications",
                    duration:"20.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Aquitetura com DDD",
                    duration:"26.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Python flask rest full api",
                    duration:"16.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Python with A.I",
                    duration:"12 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Swift IOS - Arquitetura MVVM",
                    duration:"13.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Swift IOS - Swift 4",
                    duration:"49.5 horas"
        
                },

                {
                    institution:"Udemy",
                    degree: "Web Scrapping",
                    duration:"4.5 horas"
        
                },

        
            ],
        },

        skills: {

            title: "Minhas habilidades",
            description: "Sou habilitado em diversas tecnologias como HTML5, CSS3, JavaScript, PHP, Python, Java, C#, Ruby, React.js, Next.js, Tailwind CSS e Node.js. Além disso, possuo experiência em análise de dados, design gráfico, design de interfaces com Figma e criação de layouts.",
        
            skillList: [
        
                {
        
                    icon: <FaHtml5 />,
                    name: "html 5",
        
                },
        
                {
        
                    icon: <FaCss3 />,
                    name: "css 3",
        
                },
        
                {
        
                    icon: <FaJs />,
                    name: "javascript",
        
                },

                {
                    icon: <FaPhp />,
                    name: "php",
                },

                {

                    icon: <FaPython />,
                    name: "python",
                },

                {

                    icon: <FaCoffee />,
                    name: "java",
                },

                {
                    icon: <FaCode />,
                    name: "C#",
                },

                {

                    icon: <FaGem />,
                    name: "ruby",
                },
        
                {
        
                    icon: <FaReact />,
                    name: "react.js",
        
                },
        
                {
        
                    icon: <SiNextdotjs />,
                    name: "next.js",
        
                },
        
                {
        
                    icon: <SiTailwindcss />,
                    name: "tailwind.css",
        
                },
        
                {
        
                    icon: <FaNodeJs />,
                    name: "node.js",
        
                },

                {
                    icon: <FaChartPie />,
                    name: "data analyst",
                },
        
                {
        
                    icon: <FaFigma />,
                    name: "figma",
        
                },

                {

                    icon: <FaPencilAlt />,
                    name: "grafic designer",

                },

                {
                    icon: <FaPenNib />,
                    name: "paper designer",
                },

                
            ]
        },

    },

    Matheus: {

        about: {

            title: "Sobre mim",
            description: "Sou Matheus Freitas, Junior Developer da HouseOfCode. Atuo na empresa com foco no desenvolvimento web front-end para aprimorar a experiência visual e técnica do usuário.", 
            info: [
        
                {
                    fieldName: "Nome",
                    fieldValue: "Matheus Freitas",
                },
        
                {
                    fieldName: "Contato",
                    fieldValue: "(21) 98226-5974",
                },
        
                {
                    fieldName: "Experiência",
                    fieldValue: "1+ ano",
                },
        
                {
                    fieldName: "LinkeDin",
                    fieldValue: "Matheus Freitas",
                },
        
                {
                    fieldName: "Nacionalidade",
                    fieldValue: "Brasileira",
                },
        
                {
                    fieldName: "E-mail",
                    fieldValue: "srfreitaswebdeveloper@gmail",
                },
        
                {
                    fieldName: "Freelance",
                    fieldValue: "Disponível",
                },
        
                {
                    fieldName: "Idiomas",
                    fieldValue: "Inglês & Português",
                },
            ],
        },

        experience: {

            icon: "/assets/resume/badge.svg",
            title: "Meu currículo",
            description: "Sou desenvolvedor junior na House of Code, onde atuo desde 2024. Minha trajetória começou com uma experiência como estagiário administrativo na Ricardo Associados por 6 meses, seguida por uma vivência administrativa no Clube de Empreendimentos por 5 semanas. Também trabalhei como Freelancer, desempenhando o papel de Gestor de Mídias Sociais e Editor por 3 meses. Antes de ingressar na área de desenvolvimento, estagiei por 7 meses no Setor de Saúde Pública como técnico de enfermagem, o que contribuiu para minha visão multidisciplinar.",
            items: [
        
                {
                    company:"House of Code",
                    position: "Junior Developer",
                    duration:"2024 - Presente"
        
        
                },
        
                {
                    company:"Ricardo Associados",
                    position: "Estagiário administrativo",
                    duration:"6 meses"
        
        
                },

                {
                    company:"Clube de empreendimentos",
                    position: "Vivencia administrativa",
                    duration:"5 semanas"
        
        
                },

                {
                    company:"Freelancer",
                    position: "Gestor de Mídias Sociais e Editor",
                    duration:"3 meses"
        
        
                },
        
                {
                    company:"Setor de Saúde Pública",
                    position: "Estagiário tec. de enfermagem",
                    duration:"7 meses"
        
        
                },
        
        
            ]
        },

        education: {

            icon: "/assets/resume/badge.svg",
            title: "Minha educação",
            description: "Estou atualmente cursando Engenharia da Computação na Faculdade Descomplica (2024-2028). Além disso, possuo uma formação diversificada, incluindo cursos como Assistente Administrativo pelo Centro Politécnico - Senac (360 horas), Programação em PHP (60 horas) e Desenvolvimento de Banco de Dados (48 horas) pelo Senac EAD. Também cursei Dashboard e Planilhas Gerenciais (60 horas), além de UI Design (24 horas). Antes de ingressar na área de tecnologia, concluí o curso técnico de enfermagem pelo Sistema de Ensino Invictus (1800 horas).",
            items: [
        
                {
                    institution:"Faculdade Descomplica",
                    degree: "Engenharia da Computação",
                    duration:"2024 - 2028"
        
                },
        
                {
                    institution:"Centro Politécnico - Senac",
                    degree: "Assistente administrativo",
                    duration:"360 horas"
        
                },

                {
                    institution:"Senac EAD",
                    degree: "Programação em PHP",
                    duration:"60 horas"
        
                },

                {
                    institution:"Senac EAD",
                    degree: "Desenvolvimento de banco de dados",
                    duration:"48 horas"
        
                },


                {
                    institution:"Senac EAD",
                    degree: "Dashboard e planilhas gerenciais",
                    duration:"24 horas"
        
                },

                {
                    institution:"Senac EAD",
                    degree: "UI Design",
                    duration:"24 horas"
        
                },

                {
                    institution:"Senac EAD",
                    degree: "Dashboard e planilhas gerenciais",
                    duration:"60 horas"
        
                },
        
                {
                    institution:"Sistema de Ensino invictus",
                    degree: "Técnico de enfermagem",
                    duration:"1800 horas"
        
                },
        
                
        
            ],
        },

        skills: {

            title: "Minhas habilidades",
            description: "Sou habilitado em tecnologias como Html 5, Css3, JavaScript, Php, React.js, Next.js, Tailwind Css, Node.js, e Figma. Além disso, domino Excel Avançado (Query, Power Pivot, Dashboards, Data analysis), Power Bi (Data analysis) e Design de layouts.",
        
            skillList: [
        
                {
        
                    icon: <FaHtml5 />,
                    name: "html 5",
        
                },
        
                {
        
                    icon: <FaCss3 />,
                    name: "css 3",
        
                },
        
                {
        
                    icon: <FaJs />,
                    name: "javascript",
        
                },

                {

                    icon: <FaPhp />,
                    name: "php",

                },
        
                {
        
                    icon: <FaReact />,
                    name: "react.js",
        
                },
        
                {
        
                    icon: <SiNextdotjs />,
                    name: "next.js",
        
                },
        
                {
        
                    icon: <SiTailwindcss />,
                    name: "tailwind.css",
        
                },
        
                {
        
                    icon: <FaNodeJs />,
                    name: "node.js",
        
                },
        
                {
        
                    icon: <FaFigma />,
                    name: "figma",
        
                },

                {
                    icon: <FaFileExcel />,
                    name: "Excel Avançado",
                },

                {
                    icon: <FaChartPie />,
                    name: "Power Bi",
                },

                {
                    icon: <FaPenNib />,
                    name: "paper designer",
                },
            ]
        },
    },

    Reynaldo: {

        about: {

            title: "Sobre mim",
            description: "Sou Reynaldo de Souza, programador full stack da HouseOfCode, com vasta experiência no desenvolvimento de aplicações web e mobile. Domino tanto o front-end quanto o back-end, trabalhando de forma eficiente em todas as etapas do ciclo de desenvolvimento de software, desde o planejamento até a implementação final.", 
            info: [
        
                {
                    fieldName: "Nome",
                    fieldValue: "Reynaldo de Souza",
                },
        
                {
                    fieldName: "Contato",
                    fieldValue: "(21) 98808-7452",
                },
        
                {
                    fieldName: "Experiência",
                    fieldValue: "10+ anos",
                },
        
                {
                    fieldName: "LinkeDin",
                    fieldValue: "Reynaldo Paixão de Souza",
                },
        
                {
                    fieldName: "Nacionalidade",
                    fieldValue: "Brasileira",
                },
        
                {
                    fieldName: "E-mail",
                    fieldValue: "reynaldo.analista@gmail",
                },
        
                {
                    fieldName: "Freelance",
                    fieldValue: "Disponível",
                },
        
                {
                    fieldName: "Idiomas",
                    fieldValue: "Inglês, Espanhol & Português",
                },
            ]
        },

        experience: {

            icon: "/assets/resume/badge.svg",
            title: "Meu currículo",
            description: "Sou desenvolvedor Full Stack com vasta experiência em tecnologia, trabalhando atualmente na House of Code desde 2024. Ao longo da minha carreira, tive a oportunidade de atuar em diferentes empresas e projetos desafiadores. Iniciei como Programador na Ampla (2010-2015), depois fui Analista de Sistemas na Serede (2015-2018) e Desenvolvedor na Veus Technology (2018-2019). Também fui Front-end Pleno no Original (2019-2020) e atuei como Programador na Enel Brasil (2020-2021). Mais recentemente, trabalhei como Programador na Calindra de 2021 a 2024.",
            items: [
        
                {
                    company:"House of Code",
                    position: "Full Stack Developer",
                    duration:"2024 - Presente",
        
        
                },
        
                {
                    company:"Ampla",
                    position: "Programmer",
                    duration:"2010 - 2015",
        
        
                },
        
                {
                    company:"Serede",
                    position: "System analyst",
                    duration:"2015 - 2018"
        
        
                },
        
                {
                    company:"Veus Technology",
                    position: "Developer",
                    duration:"2018 - 2019"
        
        
                },
        
                {
                    company:"Original",
                    position: "Front-end Pleno",
                    duration:"2019 - 2020"
        
        
                },
        
                {
                    company:"Enel Brasil",
                    position: "Programmer",
                    duration:"2020 - 2021"
        
        
                },
        
                {
                    company:"Calindra",
                    position: "Programmer",
                    duration:"2021 - 2024"
        
        
                },
        
            ]
        },

        education: {

            icon: "/assets/resume/badge.svg",
            title: "Minha educação",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolor assumenda delectus laboriosam nobis quibusdam quas repellendus voluptas rerum suscipit",
            items: [
        
                {
                    institution:"Universidade Estácio de Sá",
                    degree: "Análise e Desenvolv. de Sistemas",
                    duration:"2025"
        
                },
    
            ]
        },

        skills: {

            title: "Minhas habilidades",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolor assumenda delectus laboriosam nobis quibusdam quas repellendus voluptas rerum suscipit",
        
            skillList: [
        
                {
        
                    icon: <FaHtml5 />,
                    name: "html 5",
        
                },
        
                {
        
                    icon: <FaCss3 />,
                    name: "css 3",
        
                },
        
                {
        
                    icon: <FaJs />,
                    name: "javascript",
        
                },

                {

                    icon: <FaCoffee />,
                    name: "java",
                },


                {

                    icon: <FaPhp />,
                    name: "php",
                },
        
                {
        
                    icon: <FaReact />,
                    name: "react.js",
        
                },
        
                {
        
                    icon: <SiNextdotjs />,
                    name: "next.js",
        
                },
        
                {
        
                    icon: <SiTailwindcss />,
                    name: "tailwind.css",
        
                },
        
                {
        
                    icon: <FaNodeJs />,
                    name: "node.js",
        
                },
        
                {
        
                    icon: <FaFigma />,
                    name: "figma",
        
                },

                {

                    icon: <FaPython />,
                    name: "python",
                },

                {
                    icon: <FaChartPie />,
                    name: "Data Analyst",
                },
            ]
        },
    },
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, 
        TooltipContent, 
        TooltipProvider, 
        TooltipTrigger 
    
    } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = ()=>{
{/*function to change between co-workers*/}
    {/*function to hold data of the professsional thats being exposed on screen*/}

    const [currentProfessional, setCurrentProfessional] = useState("Gleison");

    

        const changeProfessional = (prof) => {
            setCurrentProfessional(prof);
        };

        const {about, experience, education, skills} = professionals[currentProfessional];


    return(

        <motion.div initial={{opacity: 0,}} animate={{opacity: 1,
            transition:{delay:2.4, duration:0.4, ease: "easeIn"}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            
            <div className="container mx-auto">

                <div className="flex gap-2 justify-left items-center mb-8">
                    <Button onClick={() => changeProfessional('Gleison')} variant="outline" size="md" className="uppercase">Gleison</Button>
                    <Button onClick={() => changeProfessional('Reynaldo')} variant="outline" size="md" className="uppercase">Reynaldo</Button>
                    <Button onClick={() => changeProfessional('Matheus')} variant="outline" size="md" className="uppercase">Matheus</Button>
                </div>
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"

                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto 
                    xl:mx-0 gap-6 ">

                    <TabsTrigger value="experience">Currículo</TabsTrigger>
                    <TabsTrigger value="education">Educação</TabsTrigger>
                    <TabsTrigger value="skills">Habilidades</TabsTrigger>
                    <TabsTrigger value="about">Sobre</TabsTrigger>

                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        
                        <TabsContent value="experience" className="w-full">

                            <div className="flex flex-col gap-[30px] text-center xl:text-left ">

                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{experience.description}</p>

                                <ScrollArea className="h-[400px]">

                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">

                                        {experience.items.map((item, index) => {

                                            return (

                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                                                    justify-center items-center lg:items-start gap-1 "
                                                >

                                                    <span className="text-accent"> {item.duration}  </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center
                                                        lg:text-left"
                                                    > {item.position} </h3>

                                                    <div className="flex items-center gap-3">
                                                        
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                                                        <p className="text-white/60"> {item.company} </p>
                                                    </div>                                                 
                                                   
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>

                        </TabsContent>

                        <TabsContent value="education" className="w-full">

                        <div className="flex flex-col gap-[30px] text-center xl:text-left">

                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{education.description}</p>

                            <ScrollArea className="h-[400px]">

                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">

                             {education.items.map((item, index) => {

                            return (

                            <li key={index}
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                                justify-center items-center lg:items-start gap-1 "
                            >

                            <span className="text-accent"> {item.duration}  </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center
                                    lg:text-left"
                            > {item.degree} </h3>

                                <div className="flex items-center gap-3">
                        
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>

                        </div>                                                 
                   
                </li>
            )
        })}
    </ul>

</ScrollArea>
</div>

                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full ">

                            <div className="flex flex-col gap-[30px] ">

                                <div className="flex flex-col gap-[30px] text-center xl:text-left">

                                    <h3 className="text-4xl font-bold">{skills.title}</h3>

                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{skills.description}</p>

                                </div>

                                <ul className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 gap-4 xl:gap-[30px] ">

                                    {skills.skillList.map((skill, index)=> {

                                        return (

                                            <li key={index}>

                                                <TooltipProvider delayDuration={100}>

                                                    <Tooltip>

                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                                            rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent
                                                            transition-all duration-300 ">{skill.icon}</div>
                                                        </TooltipTrigger>

                                                        <TooltipContent>

                                                            <p className="capitalize">{skill.name}</p>

                                                        </TooltipContent>

                                                    </Tooltip>

                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">

                           <div className="flex flex-col gap-[30px]">
                                    
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    {about.description}
                                </p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">

                                    {about.info.map((item, index)=> {

                                        return (

                                            <li key={index} className="flex items-center justify-center xl:justify-start
                                             gap-4">

                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>


                                            </li>
                                        );
                                    })}
                                </ul>
                           </div>

                        </TabsContent>

                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;