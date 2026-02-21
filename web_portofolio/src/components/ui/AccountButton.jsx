import Image from "next/image";
import Link from "next/link";

export function AccountButton({icon, link, textAlt}){
    return(
        <div className="flex items-center mr-4 mt-5">
            <Link href={link} target="_blank" rel="noopener noreferrer"> 
             <Image src={icon} width={45} height={45} alt={textAlt} className="rounded-lg bg-amber-50 object-cover transition-transform duration-300 ease-out hover:scale-125 active:scale-95"/>
            </Link>
        </div>
    )
}