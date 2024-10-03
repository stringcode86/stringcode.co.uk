import './Showcase.css'
import { useRef } from 'react';
import ShowcaseHero from "../components/ShowcaseHero.jsx";
import ReviewCode from "../components/ReviewCode.jsx";
import BackgroundGradient from "../components/BGGradient.jsx";
import Section from "../components/Section.jsx";
import { UIUXShowcase, UIUXShowcaseMultiItem } from "../components/UIUXShowcase.jsx";

import videoUrl00 from '../assets/videos/00 photo box.mov'
import videoUrl01 from '../assets/videos/01 ClearScore.mp4'
import videoUrl02 from '../assets/videos/memory game.mp4'
import videoUrl03 from '../assets/videos/paralax.mp4'
import videoUrl04 from '../assets/videos/04.mp4'

import cryptoModelUrl from '../assets/models/eth2.glb'
import moreModelUrl from '../assets/models/floppy_disk.glb'

import Scene3D from "../components/Scene3D.jsx";

const SimpleSection  = ({id, title, body, scene3DProps}) => {
    return <Section id={id}>
        <h1>{title}</h1>
        <div>{body}</div>
        <Scene3D
            url={scene3DProps.url}
            position={scene3DProps.position}
            rotation={scene3DProps.rotation}
            animRotateY={scene3DProps.animRotateY}
            edgesThreshold={scene3DProps.edgesThreshold}
            style={{width: "600px", height: "600px"}}
        />
    </Section>
}


const Showcase = () => {
    const refReview = useRef()
    const refUIUX = useRef()
    const refCrypto = useRef()
    const refMore = useRef()

    const sectionBody = `
        This site is currently being worked on as you read it.
        Please check back by the end of the day. Thank you !
        
        This site is currently being worked on as you read it.
        Please check back by the end of the day. Thank you !
    `

    const uiuxShowcaseBody00 = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `

    const scrollToId = (id) =>  {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="Showcase">
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
                bodies={[
                    "Some short description of the content above",
                    "Some short description of the content above",
                    "Some short description of the content above",
                ]}
                videoUrls={[
                    videoUrl02,
                    videoUrl03,
                    videoUrl04,
                ]}
            />
            <SimpleSection
                id="crypto"
                title='Crypto cred'
                body={sectionBody}
                scene3DProps={
                    {
                        url: cryptoModelUrl,
                        position: {x: -1.68, y: 136, z: 651 },
                        rotation: {x: -0.19, y: 0, z:0 },
                        animRotateY: 0.005,
                        edgesThreshold: 10,
                    }
                }
                modelUrl={cryptoModelUrl}
            />
            <SimpleSection
                id="more"
                title='More'
                body={sectionBody}
                scene3DProps={
                    {
                        url: moreModelUrl,
                        position: {x: -0.03, y: 0.24, z: 2.43 },
                        rotation: {x: -0.1, y: -0.01, z: -0.0 },
                        animRotateY: 0.01,
                        edgesThreshold: 45,
                    }
                }
            />
        </div>
    )
}
export default Showcase
