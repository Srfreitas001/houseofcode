
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram} from 'react-icons/fa';


const Social = ({containerStyles, iconStyles, links})=> {

    const socials = [

        {icon: <FaGithub />, path: links.github },
        {icon: <FaLinkedinIn/>, path: links.linkedin },
        {icon: <FaYoutube />, path: links.youtube },
        {icon: <FaInstagram />, path: links.instagram},
        
        
    ]
    return(

        <div className={containerStyles}>
            {socials.map((item, index) => {

                return (

                    <Link key={index} href={item.path} className={iconStyles}>

                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;