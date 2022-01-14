import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'
export function Header() {


    return (
        <header>
            <Container>
                <Link href="/" passHref >
                <Image className="image" alt="Logo HyperLinks" src="/assets/images/logoHyperlinks.svg" height={50} width={150} />
                </Link>

                <Link href="/" passHref>
                <button>SignIn</button>
                </Link>
            </Container>
        </header>
    )
}
