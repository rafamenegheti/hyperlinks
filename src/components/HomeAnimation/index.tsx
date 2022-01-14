import { BigCard } from "../BigCard";
import { SmallCard } from "../SmallCard";
import { CardContainer } from './styles'
import { FiInstagram } from 'react-icons/fi'


export function HomeAnimation() {
    return(
        <>
        <BigCard />
        <CardContainer>
            <li>
            <SmallCard image="instagram.png"/>
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
            <SmallCard image="twitter.png" height={18}/>
            </li>
            <li>
            <SmallCard image="gmail.png"/>
            </li>
            <li>
            <SmallCard image="reddit.svg"/>
            </li>
        </CardContainer>
        </>

    )
}