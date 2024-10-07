import './Showcase.css'
import {useRef} from 'react';
import BackgroundGradient from "../components/BGGradient.jsx";
import ShowcaseHero from "../components/ShowcaseHero.jsx";
import ReviewCode from "../components/ReviewCode.jsx";
import {UIUXShowcase, UIUXShowcaseMultiItem} from "../components/UIUXShowcase.jsx";
import Section3DScene from "../components/Section3DScene.jsx";

import videoUrl00 from '../assets/videos/00 photo box.mov'
import videoUrl01 from '../assets/videos/01 ClearScore.mp4'
import videoUrl02 from '../assets/videos/memory game.mp4'
import videoUrl03 from '../assets/videos/paralax.mp4'
import videoUrl04 from '../assets/videos/04.mp4'

import cryptoModelUrl from '../assets/models/eth2.glb'
import moreModelUrl from '../assets/models/floppy_disk.glb'


const Showcase = () => {

    const scrollToId = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (<div className="Showcase">
        <BackgroundGradient/>
        <ShowcaseHero
            codeReviewHandler={() => scrollToId('review')}
            uiuxHandler={() => scrollToId('uiux')}
            cryptoCredHandler={() => scrollToId('crypto')}
            moreHandler={() => scrollToId('more')}
        />
        <ReviewCode id="review"/>
        <UIUXShowcase
            title={'UX/UX SHOWCASE I'}
            videoUrl={videoUrl00}
            id="uiux"
        >
            <p>
                {
                    `
                        Show case of a flow that let you pick photos from photo gallery and print
                        a box of photos. Sheet let's you pick the photos. Subtle check mark animations. 
                        Photos fly in from behind the sheet. And are stacked in the box with correct orientation
                        and fluid animation. They also drop behind the sheet.
                    `
                }
            </p>
            <p>
                {
                    `
                        Sheet is dismissed via smooth transition into presentation view. Everything is super 
                        fluid and natural. You can swipe photos away. Scrolling all the way to the top closes 
                        the box. Again in very intuitive way.
                    `
                }
            </p>
        </UIUXShowcase>
        <UIUXShowcase
            title={'UX/UX SHOWCASE II'}
            videoUrl={videoUrl01}
        >
            <p>
                {
                    `
                        Show case of financial health app. Think head space for personal finance. Notice 
                        upon launch every single element has a subtle animations. There is bounciness and 
                        delightful polish the interactions. Flow represents your financial health and blooms 
                        as it improves.
                    `
                }
            </p>
            <p>
                {
                    `
                        When swiping from one tab to another. Cells are stacked. Transitions are interactive. 
                        Tapping on total score ring breaks it down into individual sub-scores. It looks very 
                        simple and natural. Implementing it however, it very much is not (simple). To get the 
                        ring transitions to visually make sense for all the possible states took a full day 
                        of work.
                    `
                }
            </p>
            <p>
                {
                    `
                        There is a hand coded custom and container with transitions that mimics Apple’s App 
                        Store transitions.
                    `
                }
            </p>
        </UIUXShowcase>
        <UIUXShowcaseMultiItem
            title={'UX/UX SHOWCASE III'}
            bodies={
                [
                    `
                        Simple memory game. What’s cool about it does not contain any bitmap assets. Everything is 
                        drawn in code. Apple Watch version of the app was featured the App Store for a year. 
                    `,
                    `
                        Onboarding flow for calendar complication app. Everything is drawn and animated in code 
                        (by hand).
                    `,
                ]
            }
            videoUrls={[videoUrl02, videoUrl03,]}
        >
            <p><h1>Why fluff matters?!</h1></p>
            <p>
                {
                    `
                        I am hoping to demonstrate with examples above that I am a fan of highly polished, 
                        fluid interactive interfaces. I am a believer they matter for two reasons:
                    `
                }
            </p>
            <p>
                {
                    `
                        1) They drive KPI improvements. At one start up I worked for, we swapped buttons for 
                        slider with animated "pixar like" face on it. Slider was bouncing at the 
                        beginning, nudging user to slide it across. Face was smiling more as slider moved, 
                        hearts appeared etc. This nearly doubled spent per user.
                    `
                }
            </p>
            <p>
                {
                    `
                        2) If you are going to do something, why not make it spectacular !
                    `
                }
            </p>

        </UIUXShowcaseMultiItem>
        <Section3DScene
            id="crypto"
            title='> Crypto cred'
            scene3DProps={{
                url: cryptoModelUrl,
                position: {x: -1.68, y: 136, z: 651},
                rotation: {x: -0.19, y: 0, z: 0},
                animRotateY: 0, //0.01,
                edgesThreshold: 10,
            }}
            modelUrl={cryptoModelUrl}
        >
            <p>
                {
                    `
                        With regards crypto especially on the client side. I have implemented 
                        BIP-32 / 39 / 44 multiple times in multiple languages. Ported Ethers.js to Kotlin. 
                        Everything from cryptographically secure source of randomness. Deriving seed, master 
                        key, chaincode, accounts. Dozen various encodings JSON-RPC uses. Serializing, signing 
                        fetching transactions, event logs. Interacting with smart contracts. All of that code 
                        is my jam. 
                    `
                }
            </p>
            <p>
                {
                    `
                        Very familiar with Ethers.js, web3.js, wagmi, wallet connect. Familiar with Uniswap 
                        code base. Extensive experience of running nodes. And optimizing them for peak 
                        performance. Geth and Lighthouse in particular. Intimately familiar with how EVM 
                        L1s, L2s operate. We've deployed ERC20s, NFTs, Staking contracts, Yield farms.

                    `
                }
            </p>
            <p>
                {
                    `
                        I have contributed to number of crypto open source projects. Monero GUI, Farcaster 
                        python client and others. I am both cypherpunk and degen at heart. 
                    `
                    // Ethers, Geth, MetaMask, Rainbow wallet, Uniswap and more.
                }

            </p>
        </Section3DScene>
        <Section3DScene
            id="more"
            title='> Mour'
            scene3DProps={{
                url: moreModelUrl,
                position: {x: -0.03, y: 0.24, z: 2.43},
                rotation: {x: -0.1, y: -0.01, z: -0.0},
                animRotateY: 0, //0.005,
                edgesThreshold: 20,
            }}
        >
            <p>
            {
                    `
                        I have worked for small starts, fortune 500 companies and everything between. In 
                        variety of roles from soldier in the trenches to leading teams and making architectural 
                        decisions. 
                    `
                }
            </p>
            <p>
                {
                    `
                        I've trained over thousand (not figuratively, literally) deep neural nets models.
                        Python demon, very comfortable with datascience (pandas, numpy, scikit). Familiar 
                        with python for backend (Flask). Wrote fair share of Go code. Familiar with docker,
                        node, and various SQL databases. Very comfortable with running small to midsized 
                        backends. Linux or as I've recently taken to calling it, GNU plus Linux is my jam. 
                        BTW I use arch.
                    `
                }
            </p>
            <p>
                {
                    `
                        What I do for living is writing code. What I do for hobby is writing code! 
                        Other than that I am practitioner of extreme ownership, big fan of stoicism. 
                        Reading copious amounts of books.  
                    `
                }
            </p>
            <p>
                {
                    `
                        One last thing. I got a call from doctor. Bad news, turns out that chip 
                        on my shoulder is permanent.
                    `
                }
            </p>
        </Section3DScene>
    </div>)
}

export default Showcase
