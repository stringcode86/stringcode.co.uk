import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {LineMaterial} from 'three/addons/lines/LineMaterial.js'
import {LineSegments2} from "three/addons/lines/LineSegments2.js"
import {LineSegmentsGeometry} from "three/addons/lines/LineSegmentsGeometry.js"
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js'
import {UnrealBloomPass} from '../../utils/UnrealBloomPass.js'
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js'
import {useEffect, useRef} from "react";
import Theme from "../../theme/Theme.js";


const Scene3D = (props) => {
    const refContainer = useRef(null)

    useEffect(() => {
        let w, h = 100
        let x, y = 0

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer(
            {antialias: true, alpha: true, powerPreference: "high-performance"}
        )

        if (refContainer.current && refContainer.current.children.length === 0) {
            refContainer.current.appendChild(renderer.domElement)
            w = refContainer.current.getBoundingClientRect().width
            h = refContainer.current.getBoundingClientRect().height

            renderer.setClearColor(Theme.colors.background, 0)
            renderer.setSize(w, h)
            renderer.setAnimationLoop(animate)
        }

        // const controls = new OrbitControls(camera, renderer.domElement)
        camera.position.set(props.position.x, props.position.y, props.position.z)
        camera.rotation.set(props.rotation.x, props.rotation.y, props.rotation.z)

        const edgeMaterial = new LineMaterial({color: Theme.colors.primary, linewidth: 5})
        const meshMaterial = new THREE.MeshBasicMaterial(
            { color: Theme.colors.backgroundMesh, transparent: true, opacity: 1.0}
        )

        const loader = new GLTFLoader()
        const meshes = []
        loader.load(props.url, function (object) {
            object.scene.traverse(function (child) {
                if (child.isMesh) {
                    meshes.push(child)
                }
            })

            for (let mesh of meshes) {
                let edges = new THREE.EdgesGeometry(mesh.geometry, props.edgesThreshold)
                let wideEdges = new LineSegmentsGeometry().fromEdgesGeometry(edges)
                let line = new LineSegments2(wideEdges, edgeMaterial)
                mesh.add(line)
                mesh.material = meshMaterial
            }

            scene.add(object.scene)
        })

        const renderScene = new RenderPass(scene, camera);
        renderer.setClearColor(Theme.colors.background, 0);
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(w, h), 0.75, 0, 0
        )

        const outputPass = new OutputPass()
        const composer = new EffectComposer(renderer)
        composer.addPass(renderScene)
        composer.addPass(bloomPass)
        composer.addPass(outputPass)

        function onWindowResize() {
            w = refContainer.current.getBoundingClientRect().width
            h = refContainer.current.getBoundingClientRect().height
            renderer.setSize(w, h)
            renderer.domElement.width = w
            renderer.domElement.height = h
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            render()
        }

        function onMouseMove(event) {
            x = event.pageX
            y = event.pageY
        }

        function animate() {
            if (props.scrollRotate) {
                scene.rotation.y = window.scrollY / window.innerHeight + props.animRotateY; // window.scrollY / window.innerHeight
            } else if (props.animRotateY !== 0) {
                scene.rotation.y += -props.animRotateY
            } else if (x === undefined ) {
                scene.rotation.y = window.scrollY / window.innerHeight - 0.5
            } else {
                scene.rotation.x = (y - window.scrollY) / window.innerHeight - 0.5
                scene.rotation.y = x / window.innerWidth - 0.5
            }
            render()
        }

        function render() {
            // console.log(camera.position, camera.rotation)
            composer.render()
        }

        window.addEventListener("mousemove", onMouseMove, false)
        window.addEventListener('resize', onWindowResize, false)
        onWindowResize()
        animate()
    }, [])

    return (
        <div
            className="Scene3D"
            ref={refContainer}
            style={props.style}
        ></div>
    )
}

Scene3D.defaultProps = {
    url: '../assets/models/floppy_disk.glb',
    position: {x: 0, y: 0, z:0 },
    rotation: {x: 0, y: 0, z:0 },
    animRotateY: 0.0,
    edgesThreshold: 45,
    scrollRotate: false,
};

export default Scene3D
