import styled, { css } from 'styled-components'
import Theme from "../../theme/Theme.js";


const BGGradient = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    width: 200vw;
    height: 200vh;
    background: radial-gradient(50% 50% at 50% 50%, ${Theme.colors.primaryLowAlpha} 0%, rgba(255, 255, 255, 0) 100%);
    transform: translate(-50vw, -100vh);
    z-index: -0;
`

export default BGGradient
