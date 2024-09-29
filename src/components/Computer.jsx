import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {LineMaterial} from 'three/addons/lines/LineMaterial.js'
import {LineSegments2} from "three/addons/lines/LineSegments2.js"
import {LineSegmentsGeometry} from "three/addons/lines/LineSegmentsGeometry.js"
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js'
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js'
import {UnrealBloomPass} from '../utils/UnrealBloomPass.js'
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js'
// import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
// import Stats from "three/addons/libs/stats.module"
import {useEffect, useRef} from "react";
import modelUrl from '../assets/models/old_pc_low_poly_game_model.glb'

function Computer() {

    const edgeColor = 0x24F29C
    const meshColor = 0x121417
    const bgColor = 0x212429
    const bgAlpha = 0.0
    const refContainer = useRef(null)

    useEffect(() => {
        const scene = new THREE.Scene()
        let w = 10
        let h = 10
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer(
            {antialias: true, alpha: true, powerPreference: "high-performance"}
        )
        renderer.setClearColor(bgColor, bgAlpha)
        renderer.setSize(w, h)
        renderer.setAnimationLoop(animate)

        if (refContainer.current && refContainer.current.children.length === 0) {
            refContainer.current.appendChild(renderer.domElement)
            w = refContainer.current.getBoundingClientRect().width
            h = refContainer.current.getBoundingClientRect().height
            renderer.setSize(w, h)
        }

        const controls = new OrbitControls(camera, renderer.domElement)
        camera.position.set(72, 40, 100)
        camera.rotation.set(-0.38, 0.58, 0.21)

        const edgeMaterial = new LineMaterial({color: edgeColor, linewidth: 5})
        const meshMaterial = new THREE.MeshBasicMaterial({
            color: meshColor,
            transparent: true,
            opacity: 1.0 // 0.99
        })

        const loader = new GLTFLoader()
        const path = modelUrl
        loader.load(path, function (object) {
            const meshes = []
            object.scene.traverse(function (child) {
                if (child.isMesh) {
                    meshes.push(child)
                }
            })

            for (let mesh of meshes) {
                let edges = new THREE.EdgesGeometry(mesh.geometry, 30)
                let wideEdges = new LineSegmentsGeometry().fromEdgesGeometry(edges)
                let line = new LineSegments2(wideEdges, edgeMaterial)
                mesh.add(line)
                mesh.material = meshMaterial
            }

            scene.add(object.scene)
        })

        const params = {threshold: 0, strength: 0.75, radius: 0.0, exposure: 0.5}
        const renderScene = new RenderPass(scene, camera);
        renderer.setClearColor(bgColor, bgAlpha);
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.4, 0.85
        );
        bloomPass.threshold = params.threshold;
        bloomPass.strength = params.strength;
        bloomPass.radius = params.radius;

        const outputPass = new OutputPass()
        const composer = new EffectComposer(renderer)
        composer.addPass(renderScene)
        composer.addPass(bloomPass)
        composer.addPass(outputPass)

        function onWindowResize() {
            w = refContainer.current.getBoundingClientRect().width
            h = refContainer.current.getBoundingClientRect().height
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
            renderer.domElement.width = w
            render()
        }

        window.addEventListener('resize', onWindowResize, false)

        function animate() {
            // requestAnimationFrame(animate)
            // controls.update()
            render()
            // stats.update()
            // TODO: Only update when camera changed
            console.log(camera.position, camera.rotation)
        }

        function render() {
            composer.render();
            // renderer.render(scene, camera)
        }

        onWindowResize()
        animate()
    }, [])

    return (
        <div
            className="Computer"
            ref={refContainer}
            style={{ minWidth: '100px', minHeight: '100px'}}
        ></div>
    )
}

export default Computer