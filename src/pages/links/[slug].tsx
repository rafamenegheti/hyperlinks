import { LinkCard } from "../../components/LinkCard"
import { Container, Main, ImageAvatar, CardsContainer } from "./styles"


export default function LinkSlug() {

    return (
        <Main>
            <Container>
                <div className="userInfo">
                    <div className="userCard">
                        <div className="imageContainer">
                            <ImageAvatar src="/assets/images/eu.jpeg" layout="fill" objectFit="cover" />
                        </div>
                        <p>Rafael Menegheti</p>
                    </div>
                    <div className="userDesc">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus eius perferendis nostrum dolor ab, labore atque? Ab odio culpa fugiat voluptatibus aliquam eveniet, nihil ratione dignissimos cum debitis tenetur?</p>
                    </div>
                </div>

                <CardsContainer>

                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                    <LinkCard />
                    
                </CardsContainer>
            </Container>
        </Main>
    )

}