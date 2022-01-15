import { Container } from "./styles"
import { BsInstagram } from 'react-icons/bs'
export function LinkCard() {

    return (
        <Container className="main-container">


                <div className="card card-1">
                    <BsInstagram className="card__icon"><i className="fas fa-bolt"></i></BsInstagram>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p className="card__apply">
                        <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>

        </Container>
    )
}