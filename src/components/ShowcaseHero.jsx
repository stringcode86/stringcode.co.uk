import './ShowcaseHero.css'
import Computer from "../components/Computer.jsx";
import { useRef } from 'react';
import Button from "./Button.jsx";


const ShowcaseHero = ({
    codeReviewHandler,
    uiuxHandler,
    cryptoCredHandler,
    moreHandler,
}) => {



    return (
        <section className="ShowcaseHero">
            <div className="ShowcaseHeroItemsWrapper">
                <div className="ShowcaseHeroButtonsContainer">
                    <Button onClick={codeReviewHandler}>Review Code</Button>
                    <Button onClick={uiuxHandler}>UI/UX showcase</Button>
                    <Button onClick={cryptoCredHandler}>Crypto cred</Button>
                    <Button onClick={moreHandler}>More</Button>
                </div>
                <div className="ShowcaseHeroComputerContainer">
                    <Computer/>
                </div>
            </div>
            <div className="ShowcaseHeroFooterWrapper">
                <h1>
                    <div className='blink'>{'>'}</div>
                    {'showcase'}
                </h1>
            </div>
        </section>
    )
}
export default ShowcaseHero


