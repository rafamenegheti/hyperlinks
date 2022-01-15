import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'
import { useModalOpen } from '../../contexts/ModalContext'
import { SignInModal } from '../SIgnInModal'
import { signOut, useSession } from 'next-auth/react'
import Router, { useRouter} from 'next/router'
import { getSession } from 'next-auth/react'




export function Header() {


    const { handleModal } = useModalOpen();

    const { data: session } = useSession();

    const router = useRouter()


    async function signingOut() {
        await signOut()
        router.replace("/")
    }

    return (
        <header>
            <Container>
                <Link href="/" passHref >
                    <Image className="image" alt="Logo HyperLinks" src="/assets/images/logoHyperlinks.svg" height={50} width={150} />
                </Link>


                {!session ? <button onClick={handleModal}>SignIn</button> : <button onClick={() => signingOut()}>SignOut</button>}
                <SignInModal />

            </Container>
        </header>
    )
}



