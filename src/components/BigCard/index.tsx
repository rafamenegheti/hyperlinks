

import Image from 'next/image'
import { Container } from './styles'

export function BigCard() {

    return (
        <Container >
            <div className="image">
                <Image src="/assets/images/avatar.jpg" alt='Avatar Image' width={84} height={84}/>
            </div>

            <div className="write">
                <h1>Rafael Menegheti</h1>
                <h2>Developer</h2>
            </div>

        </Container>
    )
}