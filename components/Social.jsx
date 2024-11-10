
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram} from 'react-icons/fa';


const Social = ({containerStyles, iconStyles, links})=> {

    const socials = [

        {icon: <FaLinkedinIn/>, path: links.linkedin },
        
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