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

    const sectionBody = `
        This site is currently being worked on as you read it.
        Please check back by the end of the day. Thank you !
        
        This site is currently being worked on as you read it.
        Please check back by the end of the day. Thank you !
    `

    const uiuxShowcaseBody00 = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `

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
            body={uiuxShowcaseBody00}
            videoUrl={videoUrl00}
            id="uiux"
        />
        <UIUXShowcase
            title={'UX/UX SHOWCASE II'}
            body={uiuxShowcaseBody00}
            videoUrl={videoUrl01}
        />
        <UIUXShowcaseMultiItem
            title={'UX/UX SHOWCASE III'}
            bodies={["Some short description of the content above", "Some short description of the content above", "Some short description of the content above",]}
            videoUrls={[videoUrl02, videoUrl03, videoUrl04,]}
        />
        <Section3DScene
            id="crypto"
            title='> Crypto cred'
            scene3DProps={{
                url: cryptoModelUrl,
                position: {x: -1.68, y: 136, z: 651},
                rotation: {x: -0.19, y: 0, z: 0},
                animRotateY: 0.005,
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
                        python client, Ethers, Geth, MetaMask, Rainbow wallet, Uniswap and more. I am both 
                        cypherpunk and degen at heart. 
                    `
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
                animRotateY: 0.005,
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
