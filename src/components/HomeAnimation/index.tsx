import { BigCard } from "../BigCard";
import { SmallCard } from "../SmallCard";
import { CardContainer } from './styles'


export function HomeAnimation() {
    return(
        <>
        <BigCard />
        <CardContainer>
            <li>
            <SmallCard image="instagram.svg"/>
            </li>
            <li>
            <SmallCard image="facebook.png"/>
            </li>
            <li>
            <SmallCard image="github.svg"/>
            </li>
            <li>
            <SmallCard image="onlyfans.png"/>
            </li>
            <li>
            <SmallCard image="youtube.png"/>
            </li>
            <li>
            <SmallCard image="twitter.svg" height={25} width={25}/>
            </li>
            <li>
            <SmallCard image="gmail.svg"/>
            </li>
            <li>
            <SmallCard image="reddit.svg"/>
            </li>
        </CardContainer>
        </>

    )
}