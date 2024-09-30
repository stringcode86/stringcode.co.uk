import './ShowcaseHero.css'
import Computer from "../components/Computer.jsx";
import { useRef } from 'react';
import Button from "./Button.jsx";



const ShowcaseHero = () => {

    return (
        <section className="ShowcaseHero">
            <div className="ShowcaseHeroItemsWrapper">
                <div className="ShowcaseHeroButtonsContainer">
                    <Button style={{width: '100%'}}>Review Code</Button>
                    <Button>UI/UX showcase</Button>
                    <Button>Crypto cred</Button>
                    <Button>More</Button>
                </div>
                <div className="ShowcaseHeroComputerContainer">
                    <Computer/>
                </div>
            </div>
            <div className="ShowcaseHeroFooterWrapper">
                <h1>
                    <div className='blink'>{'>'}</div>{'showcase'}
                </h1>
            </div>

        </section>
    )
}
export default ShowcaseHero


