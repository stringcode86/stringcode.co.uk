import './Showcase.css'
import Computer from "../components/Computer.jsx";
import { useRef } from 'react';
import ShowcaseHero from "../components/ShowcaseHero.jsx";


const Showcase = () => {
    const refReview = useRef()
    const refUIUX = useRef()
    const refCrypto = useRef()
    const refMore = useRef()

    return (
        <div className="Showcase">
            <div className="BackgroundGradient"></div>
            <ShowcaseHero/>
            <section ref={refReview} id="review">Review code</section>
            <section ref={refUIUX} id="uiux">UI/UX showcase</section>
            <section ref={refCrypto} id="crypto">Crypto cred</section>
            <section ref={refMore} id="more">More</section>
        </div>
    )
}
export default Showcase
