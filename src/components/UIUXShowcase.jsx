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
`

const UIUXShowcaseContentWrapper = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: row;
    margin: 3em 2em;
 `

const UIUXShowcasePlayerWrapper = styled.div`
    border: 2px solid white;
    width: 30%;
    min-width: 320px;
    min-height: 550px;
    padding: 1em 1em;
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

const UIUXShowcase = ({id, title, body, videoUrl}) => {
    return <Section id={id} style={{minHeight: "auto"}}>
        <UIUXShocaseWrapper>
            <UIUXShowcaseTitle>
                <BGGradient/>
                {title}
            </UIUXShowcaseTitle>
            <UIUXShowcaseContentWrapper>
                <div>{body}</div>
                <UIUXShowcasePlayer url={videoUrl}/>
            </UIUXShowcaseContentWrapper>
        </UIUXShocaseWrapper>
    </Section>
}

const UIUXShowcaseMultiItem = ({id, title, bodies, videoUrls}) => {
    return <Section id={id} style={{minHeight: "auto"}}>
        <UIUXShocaseWrapper>
            <UIUXShowcaseTitle>
                <BGGradient/>{title}
            </UIUXShowcaseTitle>
            <UIUXShowcaseContentWrapper>
                {bodies.map((body, idx) => {
                    return <div>
                        <UIUXShowcasePlayer url={videoUrls[idx]}/>
                        <div style={{marginTop: "1em"}}>{body}</div>
                    </div>
                })}
            </UIUXShowcaseContentWrapper>
        </UIUXShocaseWrapper>
    </Section>
}

export { UIUXShowcase, UIUXShowcaseMultiItem }