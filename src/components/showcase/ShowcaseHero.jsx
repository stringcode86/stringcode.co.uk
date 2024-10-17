import Button from "./Button.jsx";
import styled, { css } from 'styled-components'
import Theme from '../../theme/Theme.js'
import Scene3D from "./Scene3D.jsx";
import modelUrl from '../../assets/models/old_pc_low_poly_game_model.glb'


const ShowcaseHeroSection = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    overflow: visible;
`

const ShowcaseHeroItemsWrapper = styled.div`
    margin: 0 auto;
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    max-width: 1400px;
    flex: 2;
    flex-shrink: 0;
    width: calc(100cqw - 6em);
    overflow: visible;
    
    @media only screen and (max-width : 900px) {
        flex-direction: column;
        margin-left: 1em;
        margin-right: 1em;
        width: auto;
    }
`

const ShowcaseHeroButtonsContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 2em;
    max-width: 40%;
    
    @media only screen and (max-width : 500px) {
        gap: 0.9em !important;
        > div:hover {
            > button {
                box-shadow: 0.1em 0.1em ${Theme.colors.primary} !important;
                margin: 0.4em 0.1em 0.1em 0.4em !important;
            }
        }
        > div button {
            font-size: 1em !important;
            padding: 0.5em 0.5em !important;
            box-shadow: 0.5em 0.5em ${Theme.colors.primary} !important;
            margin: 0px 0.5em 0.5em 0px !important;
        }
    }

    @media only screen and (max-width : 900px) {
        gap: 1.5em;
        margin-right: 0.5em;
        max-width: 100%;
        > div:hover {
            > button {
                box-shadow: 0.15em 0.15em ${Theme.colors.primary} !important;
                margin: 0.45em 0.15em 0.15em 0.45em !important;
            }
        }
        > div button {
            font-size: 1em;
            padding: 0.75em 0.75em;
            box-shadow: 0.6em 0.6em ${Theme.colors.primary};
            margin: 0px 0.6em 0.6em 0px !important;
        }
    }

    @media only screen and (max-width : 380px) {
        gap: 0.8em !important;
        > * {
        }
    }
`

const Scene3DWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;
    aspect-ratio: 1 !important;
    overflow: visible;
    //background-color: #FF000055;
    > * {
        position: absolute;
        margin-left: 0em;
        min-width: 125%;
        aspect-ratio: 1 !important;
        overflow: visible;
        margin-top: 2em;
        //background-color: #00FF0055;
    }

    @media only screen and (max-width : 900px) {
        max-height: 50vh !important;
        > * {
            min-width: auto;
            width: 100%;
            margin-top: 4em;
            margin-bottom: 0em;
        }
    }

    @media only screen and (max-width : 500px) {
        height: auto !important;
        //max-height: 28vh !important;
        > * {
            margin-top: 2em;
            width: auto;
            height: 100%;
        }
    }
    
    //@media only screen and (max-width : 380px) {
    //    max-height: 28vh !important;
    //}
`

const FooterWrapper = styled.div`
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.background};
    flex-shrink: 2 !important;
    display: flex;
    justify-content: center;
    
    > h1 {
        margin: 0 auto !important;
        text-transform: uppercase !important;
        font-weight: 900 !important;
        font-size: 20cqw !important;
        line-height: 18cqw !important;
        letter-spacing: 2.3cqw !important;
    }
    
    > h1 >:first-child {
        display: inline-block !important;
        margin-left: 2.5cqw !important;
    }

    @media only screen and (max-width:720px) {
        > h1 {
            font-size: 19.2cqw !important;
        }
    }
    
    @media only screen and (min-width : 1281px) {
        > h1 {
            font-size: 256px !important;
            line-height: 230.4px !important;
            letter-spacing: 2.7cqw !important;
        }
    }

`

const ShowcaseHero = ({
    codeReviewHandler,
    uiuxHandler,
    cryptoCredHandler,
    moreHandler,
}) => {
    return (
        <ShowcaseHeroSection>
            <ShowcaseHeroItemsWrapper>
                <ShowcaseHeroButtonsContainer>
                    <Button onClick={codeReviewHandler}>Review Code</Button>
                    <Button onClick={uiuxHandler}>UI/UX showcase</Button>
                    <Button onClick={cryptoCredHandler}>Crypto cred</Button>
                    <Button onClick={moreHandler}>More</Button>
                </ShowcaseHeroButtonsContainer>
                <Scene3DWrapper>
                    <Scene3D
                        url={modelUrl}
                        position={{x: 68.4485, y: 50.0593, z: 89.9025}}
                        rotation={{x: -0.508, y: 0.5869, z: 0.2991}}
                        animRotateY={0}
                        edgesThreshold={25}
                        scrollRotate={true}
                    />
                </Scene3DWrapper>
            </ShowcaseHeroItemsWrapper>
            <FooterWrapper>
                <h1>
                    <div className='blink'>{'>'}</div>{'showcase'}
                </h1>
            </FooterWrapper>
        </ShowcaseHeroSection>
    )
}
export default ShowcaseHero


