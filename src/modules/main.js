// main.js
import { createCube } from "./models/basicCube.js";
import { createTriangularPrism } from "./models/triangularPrism.js";
import { m4 } from "./utils/mat4.js";
import { Object3D } from "./Object3D.js";
import { Shader } from "./shaders/shaderProgram.js";
import { loadFile } from "./utils/loader.js";

/**
 * run with http-server
 * Need to process inputs.
 * Event listeners not yet all implemented. 
 *  
 */

const vertexShaderSource = `
  attribute vec4 a_position;
  attribute vec4 a_color;
  attribute vec3 a_normal;

  varying vec4 v_color;
  varying vec3 v_normal;

  uniform mat4 u_matrix;
  uniform mat4 u_normalMatrix;

  void main() {
    gl_Position = u_matrix * a_position;
    v_color = a_color;
    v_normal = mat3(u_normalMatrix) * a_normal;
  }
`
const fragmentShaderSource = `
  precision mediump float;
  
  varying vec4 v_color;
  varying vec3 v_normal;

  uniform vec3 u_lightDirection;
  uniform bool u_enableShading;

  void main() {
    vec3 normal = normalize(v_normal);
    float lightIntensity = dot(normal, u_lightDirection);
    vec4 shadedColor = vec4(v_color.rgb * lightIntensity, v_color.a);
    gl_FragColor = u_enableShading ? shadedColor : v_color;
  }
`;

var projection_type = 'perspective';

function main() {
    const canvas = document.querySelector('#canvas');
    const gl = canvas.getContext('webgl');
    const fileSelector = document.getElementById('fileInput');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Set up shaders and cube properties
    const shader = new Shader(gl, vertexShaderSource, fragmentShaderSource);
    var { vertices, colors, indices, normals } = createTriangularPrism();
    var cube = new Object3D(gl, vertices, colors, indices, normals, shader);

    let enableShading = false;
    
    // Set up camera properties
    var cameraPosition = [0, 0, 5];
    const target = [0, 0, 0];
    const up = [0, 1, 0];

    // Projection constants
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const fov = Math.PI / 4; 
    const near = 0.1;
    const far = 100;

    const theta = 45;
    const phi = 45;

    const left = -2;
    const right = 2;
    const bottom = -2;
    const top = 2;

    // Light direction
    const lightDirection = [0.5, 0.7, 1];

    // This is for testing purposes. Will be changed in future development
    const cameraSpeed = 0.1;
    document.addEventListener('keydown', (event) => {
      if (event.key === 'r') {
        rotate = !rotate;
      }

      else if (event.key === 'ArrowUp') {
        cameraPosition[2] -= cameraSpeed;
      } else if (event.key === 'ArrowDown') {
        cameraPosition[2] += cameraSpeed;
      } else if (event.key === 'ArrowLeft') {
        cameraPosition[0] -= cameraSpeed;
      } else if (event.key === 'ArrowRight') {
        cameraPosition[0] += cameraSpeed;
      } else if (event.key === "q" || event.key === "Q") {
        enableShading = !enableShading;
      } else if (event.key === "a" || event.key === "A") {
        cube.translate(-0.5, 0, 0);
      } else if (event.key === "d" || event.key === "D") {
        cube.translate(0.5, 0, 0);
      } else if (event.key === "s" || event.key === "S") {
        cube.translate(0, 0, -0.5);
      } else if (event.key === "w" || event.key === "W") {
        cube.translate(0, 0, 0.5);
      } else if (event.key === "t" || event.key === "t") {
        cube.rotateX(0.1);
        cube.rotateY(0.1);
      } 

      drawScene()
    });
    

    /////////// Event Listeners ////////////
    document.getElementById("loadButton").addEventListener("click", () => {
      const fileInput = document.getElementById("fileInput");
      const file = fileInput.files[0];
  
      if (!file) {
          alert("No file selected!");
          return;
      }

      loadFile(
          file,
          (fileContent) => {
              cube = new Object3D(gl, fileContent.vertices, fileContent.colors, fileContent.indices, fileContent.normals, shader);
              drawScene();
          },
          (error) => {
              console.error("Error reading file:", error);
          }
      );
    });

    let rx_prev = 0;
    document.getElementById("rx_slider").oninput = function () {
      let value = document.getElementById("rx_slider").value;
      cube.rotateX(value - rx_prev);
      rx_prev = value;
      drawScene();
    };

    let ry_prev = 0;
    document.getElementById("ry_slider").oninput = function () {
      let value = document.getElementById("ry_slider").value;
      cube.rotateY(value - ry_prev);
      ry_prev = value;
      drawScene();
    };

    let rz_prev = 0;
    document.getElementById("rz_slider").oninput = function () {
      let value = document.getElementById("rz_slider").value;
      cube.rotateZ(value - rz_prev);
      rz_prev = value;
      drawScene();
    };

    let tx_prev = 0;
    document.getElementById("tx_slider").oninput = function () {
      let value = document.getElementById("tx_slider").value;
      cube.translate(value - tx_prev, 0, 0);
      tx_prev = value;
      drawScene();
    };

    let ty_prev = 0;
    document.getElementById("ty_slider").oninput = function () {
      let value = document.getElementById("ty_slider").value;
      cube.translate(0, value - ty_prev, 0);
      ty_prev = value;
      drawScene();
    };

    let tz_prev = 0;
    document.getElementById("tz_slider").oninput = function () {
      let value = document.getElementById("tz_slider").value;
      cube.translate(0, 0, value - tz_prev);
      tz_prev = value;
      drawScene();
    };

    let sx_prev = 1;
    document.getElementById("sx_slider").oninput = function () {
      let value = document.getElementById("sx_slider").value;
      cube.scale(value / sx_prev, 1, 1);
      sx_prev = value;
      drawScene();
    };

    let sy_prev = 1;
    document.getElementById("sy_slider").oninput = function () {
      let value = document.getElementById("sy_slider").value;
      cube.scale(1, value / sy_prev, 1);
      sy_prev = value;
      drawScene();
    };

    let sz_prev = 1;
    document.getElementById("sz_slider").oninput = function () {
      let value = document.getElementById("sz_slider").value;
      cube.scale(1, 1, value / sz_prev);
      sz_prev = value;
      drawScene();
    };

    // Event listener for projection type
    document.getElementById("mode_select").addEventListener("change", function() {
      projection_type = this.value;
      drawScene();
    });

    document.getElementById("shading").addEventListener("change", function() {
      enableShading = this.checked ? true : false;
      drawScene();
    });
    
    function resizeCanvasToDisplaySize(canvas) {
      const width = canvas.clientWidth * window.devicePixelRatio;
      const height = canvas.clientHeight * window.devicePixelRatio;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    
    /////////// drawwwwzzzz /////////////////
    // Draw scene for each frame
    function drawScene() {
      // Clear canvas and setup viewport.
      resizeCanvasToDisplaySize(gl.canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0.8, 0.8, 0.8, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);

      var projectionMatrix = m4.identity();

      // Set up projection matrix
      if (projection_type == "perspective") {
        projectionMatrix = m4.perspective(fov, aspect, near, far);
      }
      else if (projection_type == "orthographic") {
        projectionMatrix = m4.orthographic(projectionMatrix, left, right, bottom, top, near, far);
      }
      else if (projection_type == "oblique") {
        var obliqueMatrix = m4.identity();
        var orthoMatrix = m4.identity();

        obliqueMatrix = m4.oblique(projectionMatrix, theta, phi);
        orthoMatrix = m4.orthographic(projectionMatrix, left, right, bottom, top, near, far);
        
        projectionMatrix = m4.translate( m4.multiply(obliqueMatrix, orthoMatrix), 1.75, 1.75, 1.75);
      }

      // Set up camera matrix, and get the view matrix relative to the camera
      const cameraMatrix = m4.lookAt(cameraPosition, target, up);
      const viewMatrix = m4.inverse2(cameraMatrix);
      
      // This is for the light to be at fixed location when the camera moves
      const viewLightDirection = m4.transformDirection(viewMatrix, lightDirection);

      const modelViewMatrix = m4.multiply(viewMatrix, cube.modelMatrix);
      const normalMatrix = m4.transpose(m4.inverse2(modelViewMatrix));

      // Combined matrix
      const matrix = m4.multiply(projectionMatrix, modelViewMatrix);
      
      cube.draw(matrix, normalMatrix, viewLightDirection, enableShading);
      // requestAnimationFrame(drawScene);
    }

    drawScene();
  }

  main();