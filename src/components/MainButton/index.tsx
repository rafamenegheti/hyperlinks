

import styles from "./styles.module.scss"
import Link from "next/link"
import { Container } from './styles'

interface MainButtonProps {
    text: string;
    href: string;
}

export function MainButton({ text, href }: MainButtonProps) {
    
    return(
        <Container className={styles.container}>
        <Link href={href} passHref>
            <p className="pbutton">{text}</p>
        </Link>
        </Container>
    )
}