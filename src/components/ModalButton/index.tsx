import { Button } from "./styles";
import Image from 'next/image'
import { signIn } from 'next-auth/react'
interface ModalButtonProps {
    text: string;
    icon: string;
    color: string;
}

export function ModalButton({ text, icon, color }: ModalButtonProps) {

    return(
        <Button className="btn2" onClick={()=> signIn('google')}>
            <p>
            {text} 
            </p>
            <Image src= {`/assets/images/${icon}`} alt={`sign in with ${icon} button`} color={color} width={30} height={30}/>

        </Button>
    )
}