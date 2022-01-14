import { FooterStyled } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

export function Footer() {
    return (
        <FooterStyled>
            <div className="footerContainer">
                <p>Your feedback is welcome 👍🏻</p>
                <p>Made by Rafael Menegheti</p>
                <div>
                    <p>rafaelmenegheti51@gmail.com</p>
                    <div>
                        <a href="https://github.com/rafamenegheti" target="_blank" rel="noreferrer">
                            <AiFillGithub color="#5D87A8" />
                        </a>

                        <a href="https://www.linkedin.com/in/rafael-menegheti-4532a0219?originalSubdomain=br" target="_blank" rel="noreferrer" >
                            <BsLinkedin color="#5D87A8" />
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )

}