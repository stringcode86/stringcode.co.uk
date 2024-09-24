import './WebGLCircle.css'
import * as THREE from 'three'
import fragmentShader from '../assets/shaders/fragment.glsl?raw'
import vertexShader from '../assets/shaders/vertex.glsl?raw'
import { useEffect, useRef } from "react"


function WebGLCircle() {

    const refContainer = useRef(null)

    useEffect(() => {
        let x, y, w, h = 1
        const scene = new THREE.Scene()
        const vMouse = new THREE.Vector2()
        const vMouseDamp = new THREE.Vector2()
        const vResolution = new THREE.Vector2()
        const aspect = w / h
        const camera = new THREE.OrthographicCamera(
            -aspect, aspect, 1, -1, 0.1, 1000
        )
        camera.position.z = 1

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
        if (refContainer.current && refContainer.current.children.length === 0) {
            refContainer.current.appendChild(renderer.domElement)
        }

        const geometry = new THREE.PlaneGeometry(1, 1)
        const material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                u_mouse: { value: vMouseDamp },
                u_resolution: { value: vResolution },
                u_pixelRatio: { value: 2 }
            },
            defines: {
                VAR: 2
            }
        });

        const quad = new THREE.Mesh(geometry, material)
        scene.add(quad)


        let time, lastTime = 0
        const update = () => {
            // calculate delta time
            time = performance.now() * 0.001
            const dt = time - lastTime
            lastTime = time

            // ease mouse motion with damping
            for (const k in vMouse) {
                if (k == 'x' || k == 'y') {
                    vMouseDamp[k] = THREE.MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt)
                }
            }

            // render scene
            requestAnimationFrame(update)
            renderer.render(scene, camera)
        };
        update()

        const resize = () => {
            w = refContainer.current.getBoundingClientRect().width
            h = refContainer.current.getBoundingClientRect().height

            const dpr = Math.min(window.devicePixelRatio, 2)

            renderer.setSize(w, h)
            renderer.setPixelRatio(dpr)

            camera.left = -w / 2
            camera.right = w / 2
            camera.top = h / 2
            camera.bottom = -h / 2
            camera.updateProjectionMatrix()

            quad.scale.set(w, h, 1)
            vResolution.set(w, h).multiplyScalar(dpr)
            material.uniforms.u_pixelRatio.value = dpr
        };
        resize()

        // Add handlers
        const onPointerMove = (e) => {
            x = refContainer.current.getBoundingClientRect().x
            y = refContainer.current.getBoundingClientRect().y
            vMouse.set(e.pageX - x, e.pageY - y)
        }

        window.addEventListener('resize', resize)
        document.addEventListener('mousemove', onPointerMove)
        document.addEventListener('pointermove', onPointerMove)
        document.body.addEventListener(
            'touchmove',
            function (e) {e.preventDefault()},
            { passive: false}
        )

    }, [])

    return (
        <div className="WebGLCircle" ref={refContainer}></div>
    );
}

export default WebGLCircle