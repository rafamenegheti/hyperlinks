import { MainButton } from "../components/MainButton"
import { HomeAnimation } from "../components/HomeAnimation"
import { Container, Main } from "./styles"
import { useModalOpen } from '../contexts/ModalContext'
import { Footer } from "../components/Footer/Footer"
import { getSession } from 'next-auth/react'


export default function Home() {


  const { handleModal } = useModalOpen()

  return (
    <Main>
      <Container>
        <section className="section1">
          <h1>All of your links <br />in just one place</h1>
          <p>With HyperLinks you can have just one page with all of your social medias and websites.
            Create customizable cards with links to anything you want.
          </p>

          <div className="button" onClick={handleModal}>
            <MainButton text="Click here and create your own page" href="/" />
          </div>

        </section>

        <section className="section2">
          <HomeAnimation />
        </section>
        
      </Container>
      <Footer />
    </Main>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)

if (session) {
  const { name } = session.user
  const formatedName = name.replace(" ", "").toLowerCase()
    return {
      redirect: {
        destination: `/links/${formatedName}`,
        permanent: false,
      },
  }
} 
  return {
    props: { session }
  }
}
