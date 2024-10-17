import styled from 'styled-components'
import Theme from "../../theme/Theme.js";
import LinesImg from "../../assets/images/lines.png";


const OverlayLines = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    width: 200vw;
    height: 200vh;
    background: url("${LinesImg}");
    transform: translate(-50vw, -100vh);
    z-index: 100;
    opacity: 0.05;
    animation: flicker 0.2s linear infinite;
`

export default OverlayLines
