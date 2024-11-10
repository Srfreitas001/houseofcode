"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, 
        SelectGroup, 
        SelectContent, 
        SelectItem, 
        SelectLabel, 
        SelectTrigger, 
        SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import InputMask from "react-input-mask";

const info = [

    {
        icon: <FaPhoneAlt />,
        title: "Contato",
        description: "(21) 96540-8033"
    },

    {
        icon: <FaEnvelope />,
        title: "E-mail",
        description: "devgleisonsilveira@gmail.com"
    },

    {
        icon: <FaMapMarkedAlt />,
        title: "Endereço",
        description: "Curitiba, Paraná"
    },
];

import { motion } from "framer-motion";


const Contact = ()=>{

    return (

        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1,
            transition:{delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        className="py-12">
            
            <div className="container mx-auto">
                {/*form*/}
                <div className="flex flex-col xl:flex-row gap-[30px] ">

                    <div className="xl:w-[54%] order-2 xl:order-none ">

                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] 
                        rounded-xl ">
                            
                            <h3 className="text-4xl text-accent font-extrabold text-center">Vamos trabalhar juntos !</h3>
                            <p className="text-white/60 text-justified">Na HouseOfCode, acreditamos no poder da colaboração para criar soluções web inovadoras e eficientes. Vamos trabalhar juntos para transformar suas ideias em projetos digitais de sucesso, com tecnologia de ponta e uma equipe comprometida com resultados.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Primeiro nome" required/>
                                <Input type="lastname" placeholder="Ùltimo nome" required/>
                                <Input type="email" placeholder="E-mail" required/>
                                
                                {/*Applying input-mask propities on cellphone info area*/}

                                <InputMask

                                    mask="+55 (99) 99999-9999"
                                    alwaysShowMask={false}
                                    required
                                >
                                {({ inputRef, onChange, ...inputProps }) => (
                                <input
                                    {...inputProps}
                                    ref={(ref) => {
                                    if (typeof inputRef === "function") {
                                    inputRef(ref); // Verifica se inputRef é uma função antes de chamá-la
                                    }
                                    }}
                                    onChange={onChange} // Garante que o evento onChange funciona corretamente
                                    type="text"
                                    placeholder="Contato (Whatsapp)"
                                    className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light 
                                    bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                                />
                                )}
                                
                                </InputMask>
                            
                            </div>

                            <Select>
                                <SelectTrigger className="w-full">

                                    <SelectValue placeholder="Selecione um serviço"></SelectValue>

                                </SelectTrigger>

                                <SelectContent>

                                    <SelectGroup required>

                                        <SelectLabel>Selecione um serviço</SelectLabel>
                                        <SelectItem value="est">Sistemas - Automatização de processos</SelectItem>
                                        <SelectItem value="cst">Mobile - Apps e sites com design interativo</SelectItem>
                                        <SelectItem value="mst">Web App - Apps responsivos e escaláveis</SelectItem>
                                        <SelectItem value="seo">Servidores - Gerenciamento robusto / Bigdata</SelectItem>

                                    </SelectGroup>

                                </SelectContent>

                            </Select>
                            <Textarea className="h-[200px]" placeholder="Digite aqui sua mensagem."/>

                            {/*btn*/}

                            <Button size="md" className="max-w-40">
                                Enviar 🢅
                            </Button>
                        </form>
                        

                    </div>
                    {/*info*/}

                    <div className="flex-1 flex items-center xl:justify-end order-1
                    xl:order-none mb-8 xl:mb-0">
                        
                        <ul className="flex flex-col gap-10">

                            {info.map((item, index)=> {

                                return(

                                    <li key={index} className="flex items-center gap-6">

                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                                        bg-[#27272c] text-accent rounded-md flex items-center justify-center">

                                            <div className="text-[28px] "> 
                                                {item.icon} 

                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                </div>
            </div>
        
        </motion.section>
    )
}

export default Contact;