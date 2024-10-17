import Logo from "../components/homepage/Logo.jsx";
import styled from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

const HomePageWrapper = styled.div`
    color: white;
    background: black;
    width: 100svw;
    height: 100svh;
    position: relative;
    @media only screen and (max-width : 500px) {
        > div:first-child{
            position: absolute !important;
            width: auto !important;
            height: auto !important;
            top: -22svw !important;
            bottom: -22svw !important;
            left: -22svw !important;
            right: -22svw !important;
        }
    }
`

const logoStyle = {
    width: '100svw',
    height: '100svh',
}

const HomePage = () => {
    return (
        <ErrorBoundary>
            <HomePageWrapper>
                <Logo style={logoStyle}/>
            </HomePageWrapper>
        </ErrorBoundary>
    )
}
export default HomePage
