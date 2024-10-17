import Scene3D from "./Scene3D.jsx";
import Section from "./Section.jsx";
import styled from "styled-components";
import Theme from "../../theme/Theme.js";

const Section3DSceneWrapper = styled.div`
    overflow: visible;
    display: flex;
    gap: 2em;
    align-items: center;
    flex-direction: row-reverse;

    @media only screen and (max-width : 1023px) {
        flex-direction: column-reverse;
    }
`

const Scene3DWrapper = styled.div`
    position: relative;
    min-width: 30%;
    aspect-ratio: 1 !important;
    overflow: visible;
    > * {
        position: absolute;
        aspect-ratio: 1 !important;
        top: -12.5%;
        bottom: -12.5%;
        left: -12.5%;
        right: -12.5%;
        overflow: visible;
    }

    @media only screen and (max-width : 1023px) {
        width: 100%;
        max-width: 400px;
    }
`


const Section3DScene  = ({id, title, scene3DProps, children}) => {
    return <Section id={id}>
        <Section3DSceneWrapper>
            <Scene3DWrapper>
                <Scene3D
                    url={scene3DProps.url}
                    position={scene3DProps.position}
                    rotation={scene3DProps.rotation}
                    animRotateY={scene3DProps.animRotateY}
                    edgesThreshold={scene3DProps.edgesThreshold}
                    scrollRotate={scene3DProps.scrollRotate}
                />
            </Scene3DWrapper>
            <div>
                <h1 style={{color: Theme.colors.primary}}>{title}</h1>
                {children}
            </div>
        </Section3DSceneWrapper>
    </Section>
}

export default Section3DScene
