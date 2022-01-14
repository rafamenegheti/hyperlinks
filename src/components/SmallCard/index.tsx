import Image from 'next/image'
import styles from './styles.module.scss'
import { Container } from './styles'
interface SmallCardProps {
    image: string;
    width?: number;
    height?: number
}

export function SmallCard({ image, width=20, height=20 }: SmallCardProps) {


    return (
        <Container>
            <Image src={`/assets/images/${image}`} width={width} height={height} alt={`${image} icon`}/>
        </Container>
    )
    
}