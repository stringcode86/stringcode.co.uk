import Logo from "../components/Logo";

/**
 * Detects if WebGL is enabled.
 * Inspired from http://www.browserleaks.com/webgl#howto-detect-webgl
 *
 * @return { number } -1 for not Supported,
 *                    0 for disabled
 *                    1 for enabled
 */
function WebGLSupport() {
    // Check for the WebGL rendering context
    if ( !! window.WebGLRenderingContext) {
        var canvas = document.createElement("canvas"),
            names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
            context = false;

        for (var i in names) {
            try {
                context = canvas.getContext(names[i]);
                if (context && typeof context.getParameter === "function") {
                    // WebGL is enabled.
                    return 1;
                }
            } catch (e) {}
        }

        // WebGL is supported, but disabled.
        return 0
    }

    // WebGL not supported.
    return -1
}

export default WebGLSupport;