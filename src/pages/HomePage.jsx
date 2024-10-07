import Logo from "../components/homepage/Logo.jsx";

const homePageStyle = {
    color: "white",
    background: "black"
}

const HomePage = () => {

    return (
        <div className={'HomePage'} style={homePageStyle}>
            <Logo style={{width: '100vw', height: '100vh'}}/>
        </div>
    )
}
export default HomePage
