import Scene3D from "../components/Scene3D.jsx";
import Section from "../components/Section.jsx";
import styled from "styled-components";
import Theme from "../theme/Theme.js";

const Section3DSceneWrapper = styled.div`
    overflow: visible;
    display: flex;
    gap: 2em;
    align-items: flex-start;
    flex-direction: row-reverse;
`

const Scene3DWrapper = styled.div`
    //float: right;
    //margin-bottom: 1em;
    //width: 30%;
    
    position: relative;
    min-width: 30%;
    aspect-ratio: 1 !important;
    overflow: visible;
    //background-color: red;
    > * {
        position: absolute;
        top: -5%;
        bottom: -20%;
        left: -12.5%;
        right: -12.5%;
        overflow: visible;
        //background-color: #00FF00AA;
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