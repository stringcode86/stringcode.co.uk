varying vec2 v_texcoord;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
    v_texcoord = uv;
}