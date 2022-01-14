import styles from "./styles.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import { MainButton } from "../components/MainButton"
import { BigCard } from "../components/BigCard"
import { HomeAnimation } from "../components/HomeAnimation"
import { Container, Main  } from "./styles"


export default function Home() {
  return (
    <Main>
      <Container>

        <section className="section1">
          <h1>All of your links <br />in just one place</h1>
          <p>With HyperLinks you can have just one page with all of your social medias and websites.
            Create customizable cards with links to anything you want.
          </p>
          <Link href="/" passHref>
            <div className="button">
              <MainButton text="Click here and create your own page" href="/" />
            </div>
          </Link>

        </section>

        <section className="section2">
          <HomeAnimation />
        </section>
      </Container>

      
    </Main>
  )
}
