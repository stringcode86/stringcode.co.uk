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
                    During the interview process there is often a task. Coin Watch is simple app that
                    is a good example of such task. Written in six different ways. App allows user to
                    view coins and various details about them. It allows user to bookmark coins. Uses
                    coin gecko API. Review the code
                    on <a href="https://github.com/stringcode86/coinwatch" target="_blank">GitHub</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Web front end</h2>
                <div className="ReviewCode">
                    React.js, Redux front end app version of Coin Watch,
                    review <a href="https://github.com/stringcode86/coinwatch" target="_blank">here</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Mobile React Native (iOS & Android)</h2>
                <div className="ReviewCode">
                    React Native app version of Coin Watch for iOS and Android.
                    review <a href="https://github.com/stringcode86/coinwatch" target="_blank">here</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>iOS UIKit (with KMM)</h2>
                <div className="ReviewCode">
                    Kotlin multi-platform version of the app. Share core library that contains all the
                    business logic written in Kotlin. Compiles native binary for each platform. Vends
                    view models to thin UI Layer written in Swift leveraging UIKit. UI layer sends events
                    to Core library. Apps uses Viper architecture. Review
                    code <a href="https://github.com/stringcode86/coinwatch" target="_blank">here</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>iOS Swift UI</h2>
                <div className="ReviewCode">
                    Pure SwiftUI version of the app. Uses all the SwiftUI latest best practices. Review
                    code <a href="https://github.com/stringcode86/coinwatch" target="_blank">here</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Android View based (with KMM)</h2>
                <div className="ReviewCode">
                    Kotlin multi-platform version of the app. Share core library that contains all the
                    business logic written in Kotlin. Compiles native binary for each platform. Vends
                    view models to thin UI Views layer, leveraging Fragment. UI layer sends events to
                    Core library. Apps uses Viper architecture. Review
                    code <a href="https://github.com/stringcode86/coinwatch" target="_blank">here</a>.
                </div>
            </ReviewCodeItem>
            <ReviewCodeItem>
                <h2>Android Jetpack Compose</h2>
                <div className="ReviewCode">
                    Pure Jetpack Compose version of the app. Uses all the Jetpack Compose latest best practices.
                    Review code <a href="https://github.com/stringcode86/coinwatch" target="_blank">here</a>.
                </div>
            </ReviewCodeItem>
        </ReviewItemsWrapper>
    </Section>
}

export default ReviewCode
