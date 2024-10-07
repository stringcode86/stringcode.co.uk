import styled, { css } from 'styled-components'


const Section = styled.section`
    margin: 0 auto;
    color: white;
    max-width: 1400px;
    overflow: visible;
    margin-top: 3em;
    margin-bottom: 3em;
    padding: 1.5em 1.5em;
    
    @media only screen and (max-width : 500px) {
        padding: 1em 1em;
        margin-bottom: 1em;
    }
`

export default Section;
