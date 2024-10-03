import styled, { css } from 'styled-components'
import Theme from "../theme/Theme.js";
import OneAppSixWays from "./OneAppSixWays.jsx";
import Section from "./Section.jsx";


const reviewCodeStyle = {
    display: "flex",
    gap: "1em",
}

const ReviewItemsWrapper = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
`

const ReviewCodeItem = styled.div`
    > h2 {
        color: ${Theme.colors.primary};
        margin-bottom: 0.25em;
    }

    &:hover > h2:after {
        content: ' >';
    }
`

const ReviewCode = ({id}) => {
    return <Section id={id} style={reviewCodeStyle}>
        <OneAppSixWays/>
        <ReviewItemsWrapper>
            <ReviewCodeItem>
                <h2>Review Code</h2>
                <div className="ReviewCode">
                    Now whenever you want to use that button you just import it like a regular react component. styled-components allow you to pass props for customisations so if you for example want to change the font-size of the button based on a prop you can do it like so.
                    Check it out on <a href="#">github</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Web front end</h2>
                <div className="ReviewCode">
                    Let's start by defining what styled-system is before we use it. From their Docs styled system is a collection of utility functions that add style props to your React components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties. Styled system is used with a CSS-in-JS library like styled-components.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Mobile React Native (iOS & Android)</h2>
                <div className="ReviewCode">
                    Let's start by defining what styled-system is before we use it. From their Docs styled system is a collection of utility functions that add style props to your React components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties. Styled system is used with a CSS-in-JS library like styled-components.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>iOS UIKit (with KMM)</h2>
                <div className="ReviewCode">
                    What if you want to pass a prop like size to your buttons which may be either small, medium and large? Well styled styled system allows us to do that through the variant function. Below is our final code that have all those things put together. Note that this is just a basic button, you can go even way more than this depending on your needs.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>iOS Swift UI</h2>
                <div className="ReviewCode">
                    What if you want to pass a prop like size to your buttons which may be either small, medium and large? Well styled styled system allows us to do that through the variant function.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Android View based (with KMM)</h2>
                <div className="ReviewCode">
                    What if you want to pass a prop like size to your buttons which may be either small, medium and large? Well styled styled system allows us to do that through the variant function. Below is our final code that have all those things put together. Note that this is just a basic button, you can go even way more than this depending on your needs.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Android Jetpack Compose</h2>
                <div className="ReviewCode">
                    What if you want to pass a prop like size to your buttons which may be either small, medium and large?
                </div>
            </ReviewCodeItem>
        </ReviewItemsWrapper>
    </Section>
}

export default ReviewCode