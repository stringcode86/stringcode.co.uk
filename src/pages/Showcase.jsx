import './Showcase.css'
import Computer from "../components/Computer.jsx";
import { useRef } from 'react';
import ShowcaseHero from "../components/ShowcaseHero.jsx";
import SimpleSection from "../components/SimpleSection.jsx";


const Showcase = () => {
    const refReview = useRef()
    const refUIUX = useRef()
    const refCrypto = useRef()
    const refMore = useRef()

    const sectionBody = `
        This site is currently being worked on as you read it.
        Please check back by the end of the day. Thank you !
    `

    const scrollToId = (id) =>  {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="Showcase">
            <div className="BackgroundGradient"></div>
            <ShowcaseHero
                codeReviewHandler={() => scrollToId('review')}
                uiuxHandler={() => scrollToId('uiux')}
                cryptoCredHandler={() => scrollToId('crypto')}
                moreHandler={() => scrollToId('more')}
            />
            <SimpleSection id="review" title='Code review' body={sectionBody}/>
            <SimpleSection id="uiux" title='UI/UX showcase' body={sectionBody}/>
            <SimpleSection id="crypto" title='Crypto cred' body={sectionBody}/>
            <SimpleSection id="more" title='More' body={sectionBody}/>
        </div>
    )
}
export default Showcase
