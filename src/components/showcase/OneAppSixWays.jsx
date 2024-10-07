import styled, { css } from 'styled-components'
import Theme from "../../theme/Theme.js";

const OneAppSixWaysSm = styled.div`
    color: ${Theme.colors.primary};
    font-size: 2.75em;
    font-weight: lighter;
    line-height: 1em;
    letter-spacing: 0.25em;
    padding-left: 0.45em;
`

const OneAppSixWaysLg = styled.div`
    color: ${Theme.colors.primary};
    font-size: 14.5em;
    line-height: 0.5em;
    letter-spacing: -0.34em;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: visible;
    margin-top: -0.15em;
    margin-bottom: 0.25em;
    ${props => props.blink ? css`
        animation: blinker 2.75s linear infinite;             
    ` : ''}
`

const OneAppSixWays = () => {
    return <div className={'OneAppSixWays'}>
        <OneAppSixWaysSm>ONE</OneAppSixWaysSm>
        <OneAppSixWaysLg>APP</OneAppSixWaysLg>
        <OneAppSixWaysSm>SIX</OneAppSixWaysSm>
        <OneAppSixWaysSm>WAYS</OneAppSixWaysSm>
        <OneAppSixWaysLg blink="true">{'>'}</OneAppSixWaysLg>
    </div>
}

export default OneAppSixWays;
