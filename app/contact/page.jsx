"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectGroup, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";
import { sendContactData } from "@/utils/api";

const info = [
    // ... seus dados
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState(''); // new state to the sucessful message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendContactData(formData);
            setSuccessMessage('Mensagem enviada com sucesso!'); // sucess message
            setFormData({ // clear form after sending it
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            setSuccessMessage('Ocorreu um erro ao enviar sua mensagem.'); // error message
        }
    };

    return (
        <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:"easeIn"}}}
            className="py-12">
            <div className="container mx-auto">
                {/* Mensagem de sucesso */}
                {successMessage && (
                    <div className="mb-4 text-green-500 text-center">
                        {successMessage}
                    </div>
                )}
                {/* Formulário */}
                <div className="flex flex-col xl:flex-row gap-[30px] ">
                    <div className="xl:w-[54%] order-2 xl:order-none ">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                            <h3 className="text-4xl text-accent font-extrabold text-center">Vamos trabalhar juntos !</h3>
                            <p className="text-white/60 text-justified">Na HouseOfCode, acreditamos no poder da colaboração para criar soluções web inovadoras e eficientes. Vamos trabalhar juntos para transformar suas ideias em projetos digitais de sucesso, com tecnologia de ponta e uma equipe comprometida com resultados.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input 
                                    name="firstname" 
                                    value={formData.firstname}
                                    onChange={handleChange} 
                                    placeholder="Primeiro nome" 
                                    required
                                />
                                <Input 
                                    name="lastname" 
                                    value={formData.lastname}
                                    onChange={handleChange} 
                                    placeholder="Último nome" 
                                    required
                                />
                                <Input 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange} 
                                    placeholder="E-mail" 
                                    required
                                />
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
                                                    inputRef(ref);
                                                }
                                            }}
                                            onChange={(e) => {
                                                onChange(e);
                                                handleChange(e); // update the state with cellphone
                                            }}
                                            name="phone"
                                            type="text"
                                            placeholder="Contato (Whatsapp)"
                                            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                                        />
                                    )}
                                </InputMask>
                            </div>
                            <Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione um serviço"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione um serviço</SelectLabel>
                                        <SelectItem value="est">Web Development - Desenvolvimento site/aplicativo</SelectItem>
                                        <SelectItem value="cst">UI/UX Design - Arte digital e Frontend</SelectItem>
                                        <SelectItem value="mst">Logo - Criação e Ilustração</SelectItem>
                                        <SelectItem value="seo">SEO - Estratégias de tráfego online e divulgação</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange} 
                                className="h-[200px]" 
                                placeholder="Digite aqui sua mensagem."
                            />
                            <Button size="md" className="max-w-40">
                                Enviar
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px] "> 
                                            {item.icon} 
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
