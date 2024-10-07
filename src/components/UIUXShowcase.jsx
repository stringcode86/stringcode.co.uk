import styled, { css } from 'styled-components'
import Theme from "../theme/Theme.js";
import BGGradient from "./BGGradient.jsx";
import ReactPlayer from 'react-player'
import Section from "./Section.jsx";


const UIUXShocaseWrapper = styled.div`
    position: relative;
    border: 2px solid white;
    overflow: visible;
    margin-top: 2em;
`

const UIUXShowcaseTitle = styled.h1`
    position: absolute;
    display: inline-block;
    color: white;
    border: 2px solid white;
    background: ${Theme.colors.background};
    padding: 0.5em 1em;
    transform: translate(1em, -1em);
    overflow: clip;
    @media only screen and (max-width : 500px) {
        padding: 0.25em 0.25em;
        transform: translate(0.5em, -1.5em);
        margin-right: 1em;
    }
`

const UIUXShowcaseContentWrapper = styled.div`
    display: flex;
    gap: 2em;
    margin: 3em 2em;
    align-items: flex-start;

    @media only screen and (max-width : 768px) {
        flex-direction: column;
        margin: 1em 1em;
    }
 `

const UIUXShowcaseMultiContentWrapper = styled.div`
    display: flex;
    gap: 2em;
    margin: 3em 2em;
    align-items: flex-start;

    @media only screen and (max-width : 1180px) {
        flex-direction: revert;
        flex-wrap: wrap;
        margin: 1em 1em;
        
        > * {
            flex: 1;
            min-width: calc(50% - 2em);
        }
    }
    
    @media only screen and (max-width : 768px) {
        flex-direction: column;
        margin: 1em 1em;
    }
 `

const UIUXShowcasePlayerWrapper = styled.div`
    border: 2px solid white;
    width: 30%;
    min-width: 320px;
    min-height: 450px;
    padding: 1em 1em;

    @media only screen and (max-width : 500px) {
        min-width: 100%;
    }
`

const UIUXShowcasePlayer = ({url}) => {
    return <UIUXShowcasePlayerWrapper>
        <ReactPlayer
            url={url}
            controls={true}
            loop={true}
            playing={true}
            muted={true}
            width="100%"
            height="100%"
            playsinline={true}
        />
    </UIUXShowcasePlayerWrapper>
}

const UIUXShowcase = ({id, title, videoUrl, children}) => {
    return <Section id={id} style={{minHeight: "auto"}}>
        <UIUXShocaseWrapper>
            <UIUXShowcaseTitle>
                <BGGradient/>
                {title}
            </UIUXShowcaseTitle>
            <UIUXShowcaseContentWrapper>
                <div>{children}</div>
                <UIUXShowcasePlayer url={videoUrl}/>
            </UIUXShowcaseContentWrapper>
        </UIUXShocaseWrapper>
    </Section>
}

const UIUXShowcaseMultiItem = ({id, title, bodies, videoUrls, children}) => {
    return <Section id={id} style={{minHeight: "auto"}}>
        <UIUXShocaseWrapper>
            <UIUXShowcaseTitle>
                <BGGradient/>{title}
            </UIUXShowcaseTitle>
            <UIUXShowcaseMultiContentWrapper>
                {bodies.map((body, idx) => {
                    return <div>
                        <UIUXShowcasePlayer url={videoUrls[idx]}/>
                        <div style={{marginTop: "1em"}}>{body}</div>
                    </div>
                })}
                <div>{children}</div>
            </UIUXShowcaseMultiContentWrapper>
        </UIUXShocaseWrapper>
    </Section>
}

export { UIUXShowcase, UIUXShowcaseMultiItem }
