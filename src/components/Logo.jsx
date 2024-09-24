import './Logo.css';
import WebGLCircle from "./WebGLCircle.jsx";
import WebGLSupport from "../utils/WebGLDetector";


const Logo = ({
  title = "stringCode"
}) => {

    const webGLStatus = WebGLSupport()

    return (
        <div className="Logo">
            {webGLStatus === 1 ? (<WebGLCircle/>) : null}
            <div className={'Logo-content-wrapper'}>
                <h1 className={'Logo-title'}>{title}</h1>
                {webGLStatus !== 1 ? (<h2>This site looks cooler when WebGL is enabled</h2>) : null}
            </div>
        </div>
    )
}

export default Logo;