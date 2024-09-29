import './Logo.css';
import WebGLCircle from "./WebGLCircle.jsx";
import WebGLSupport from "../../utils/WebGLDetector.js";


const Logo = ({title = "stringCode", style}) => {

    const webGLStatus = WebGLSupport()

    return (
        <div className="Logo" style={style}>
            {webGLStatus === 1 ? (<WebGLCircle/>) : null}
            <div className={'Logo-content-wrapper'}>
                <h1 className={'Logo-title'}>{title}</h1>
                {webGLStatus !== 1 ? (<h2>This site looks cooler when WebGL is enabled</h2>) : null}
            </div>
        </div>
    )
}

export default Logo;