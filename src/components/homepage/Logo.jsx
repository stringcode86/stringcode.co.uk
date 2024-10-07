import WebGLCircle from "./WebGLCircle.jsx";
import WebGLSupport from "../../utils/WebGLDetector.js";
import styled from 'styled-components';

const LogoWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    color: white;
`

const WebGLCircleStyle =  {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
}

const LogoContentWrapper = styled.div`
    container-type: size;
    z-index: 1000;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    > h1 {
        font-size: min(8cqw, 8cqh);
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        text-transform: uppercase;
    } 
`

const Logo = ({title = "stringCode", style}) => {

    const webGLStatus = WebGLSupport()

    return (
        <LogoWrapper style={style}>
            {webGLStatus === 1 ? (<WebGLCircle style={WebGLCircleStyle}/>) : null}
            <LogoContentWrapper>
                <h1 className={'Logo-title'}>{title}</h1>
                {webGLStatus !== 1 ? (<h2>This site looks cooler when WebGL is enabled</h2>) : null}
            </LogoContentWrapper>
        </LogoWrapper>
    )
}

export default Logo;
