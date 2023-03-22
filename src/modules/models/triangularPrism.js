export function createTriangularPrism() { 
    // duplicates, if color same no need
    const vertices = [
      // Front bottom
      -0.5, -(Math.sqrt(3)/4), 0.5,
      0.5, -(Math.sqrt(3)/4), 0.5,
      0.25, -(Math.sqrt(3)/8), 0.5,
      -0.25, -(Math.sqrt(3)/8), 0.5,

      // Front right
      0.5, -(Math.sqrt(3)/4), 0.5,
      0, Math.sqrt(3)/4, 0.5,
      0, Math.sqrt(3)/8, 0.5,
      0.25, -(Math.sqrt(3)/8), 0.5,
      
      // Front left
      0, Math.sqrt(3)/4, 0.5,
      -0.5, -(Math.sqrt(3)/4), 0.5,
      -0.25, -(Math.sqrt(3)/8), 0.5,
      0, Math.sqrt(3)/8, 0.5,

      // Front bottom inside
      -0.25, -(Math.sqrt(3)/8), 0.5,
      0.25, -(Math.sqrt(3)/8), 0.5,
      0.25, -(Math.sqrt(3)/8), 0.25,
      -0.25, -(Math.sqrt(3)/8), 0.25,

      // Front right inside
      0.25, -(Math.sqrt(3)/8), 0.5,
      0, Math.sqrt(3)/8, 0.5,
      0, Math.sqrt(3)/8, 0.25,
      0.25, -(Math.sqrt(3)/8), 0.25,

      // Front left inside
      0, Math.sqrt(3)/8, 0.5,
      -0.25, -(Math.sqrt(3)/8), 0.5,
      -0.25, -(Math.sqrt(3)/8), 0.25,
      0, Math.sqrt(3)/8, 0.25,

      // Back bottom
      -0.5, -(Math.sqrt(3)/4), -0.5,
      0.5, -(Math.sqrt(3)/4), -0.5,
      0.25, -(Math.sqrt(3)/8), -0.5,
      -0.25, -(Math.sqrt(3)/8), -0.5,

      // Back right
      0.5, -(Math.sqrt(3)/4), -0.5,
      0, Math.sqrt(3)/4, -0.5,
      0, Math.sqrt(3)/8, -0.5,
      0.25, -(Math.sqrt(3)/8), -0.5,
      
      // Back left
      0, Math.sqrt(3)/4, -0.5,
      -0.5, -(Math.sqrt(3)/4), -0.5,
      -0.25, -(Math.sqrt(3)/8), -0.5,
      0, Math.sqrt(3)/8, -0.5,

      // Back bottom inside
      -0.25, -(Math.sqrt(3)/8), -0.5,
      0.25, -(Math.sqrt(3)/8), -0.5,
      0.25, -(Math.sqrt(3)/8), -0.25,
      -0.25, -(Math.sqrt(3)/8), -0.25,

      // Back right inside
      0.25, -(Math.sqrt(3)/8), -0.5,
      0, Math.sqrt(3)/8, -0.5,
      0, Math.sqrt(3)/8, -0.25,
      0.25, -(Math.sqrt(3)/8), -0.25,

      // Back left inside
      0, Math.sqrt(3)/8, -0.5,
      -0.25, -(Math.sqrt(3)/8), -0.5,
      -0.25, -(Math.sqrt(3)/8), -0.25,
      0, Math.sqrt(3)/8, -0.25,

      // Bottom bottom
      -0.5, -(Math.sqrt(3)/4), 0.5,
      0.5, -(Math.sqrt(3)/4), 0.5,
      0.25, -(Math.sqrt(3)/4), 0.25,
      -0.25, -(Math.sqrt(3)/4), 0.25,

      // Bottom right
      0.5, -(Math.sqrt(3)/4), 0.5,
      0.5, -(Math.sqrt(3)/4), -0.5,
      0.25, -(Math.sqrt(3)/4), -0.25,
      0.25, -(Math.sqrt(3)/4), 0.25,

      // Bottom top
      0.5, -(Math.sqrt(3)/4), -0.5,
      -0.5, -(Math.sqrt(3)/4), -0.5,
      -0.25, -(Math.sqrt(3)/4), -0.25,
      0.25, -(Math.sqrt(3)/4), -0.25,

      // Bottom left
      -0.5, -(Math.sqrt(3)/4), -0.5,
      -0.5, -(Math.sqrt(3)/4), 0.5,
      -0.25, -(Math.sqrt(3)/4), 0.25,
      -0.25, -(Math.sqrt(3)/4), -0.25,

      // Bottom bottom inside
      -0.25, -(Math.sqrt(3)/4), 0.25,
      0.25, -(Math.sqrt(3)/4), 0.25,
      0.25, -(Math.sqrt(3)/8), 0.25,
      -0.25, -(Math.sqrt(3)/8), 0.25,

      // Bottom right inside
      0.25, -(Math.sqrt(3)/4), 0.25,
      0.25, -(Math.sqrt(3)/4), -0.25,
      0.25, -(Math.sqrt(3)/8), -0.25,
      0.25, -(Math.sqrt(3)/8), 0.25,

      // Bottom top inside
      0.25, -(Math.sqrt(3)/4), -0.25,
      -0.25, -(Math.sqrt(3)/4), -0.25,
      -0.25, -(Math.sqrt(3)/8), -0.25,
      0.25, -(Math.sqrt(3)/8), -0.25,

      // Bottom left inside
      -0.25, -(Math.sqrt(3)/4), -0.25,
      -0.25, -(Math.sqrt(3)/4), 0.25,
      -0.25, -(Math.sqrt(3)/8), 0.25,
      -0.25, -(Math.sqrt(3)/8), -0.25,

      // Right bottom
      0, Math.sqrt(3)/4, 0.5,
      0.5, -(Math.sqrt(3)/4), 0.5,
      3/8, -(Math.sqrt(3)/8), 0.25,
      1/8, Math.sqrt(3)/8, 0.25,

      // Right right
      0.5, -(Math.sqrt(3)/4), 0.5,
      0.5, -(Math.sqrt(3)/4), -0.5,
      3/8, -(Math.sqrt(3)/8), -0.25,
      3/8, -(Math.sqrt(3)/8), 0.25,

      // Right top
      0.5, -(Math.sqrt(3)/4), -0.5,
      0, Math.sqrt(3)/4, -0.5,
      1/8, Math.sqrt(3)/8, -0.25,
      3/8, -(Math.sqrt(3)/8), -0.25,

      // Right left
      0, Math.sqrt(3)/4, -0.5,
      0, Math.sqrt(3)/4, 0.5,
      1/8, Math.sqrt(3)/8, 0.25,
      1/8, Math.sqrt(3)/8, -0.25,

      // Right bottom inside
      1/8, Math.sqrt(3)/8, 0.25,
      3/8, -(Math.sqrt(3)/8), 0.25,
      0.25, -(Math.sqrt(3)/8), 0.25,
      0, Math.sqrt(3)/8, 0.25,

      // Right right inside
      3/8, -(Math.sqrt(3)/8), 0.25,
      3/8, -(Math.sqrt(3)/8), -0.25,
      0.25, -(Math.sqrt(3)/8), -0.25,
      0.25, -(Math.sqrt(3)/8), 0.25,

      // Right top inside
      3/8, -(Math.sqrt(3)/8), -0.25,
      1/8, Math.sqrt(3)/8, -0.25,
      0, Math.sqrt(3)/8, -0.25,
      0.25, -(Math.sqrt(3)/8), -0.25,

      // Right left inside
      1/8, Math.sqrt(3)/8, -0.25,
      1/8, Math.sqrt(3)/8, 0.25,
      0, Math.sqrt(3)/8, 0.25,
      0, Math.sqrt(3)/8, -0.25,

      // Left bottom
      -0.5, -(Math.sqrt(3)/4), 0.5,
      0, Math.sqrt(3)/4, 0.5,
      -1/8, Math.sqrt(3)/8, 0.25,
      -3/8, -(Math.sqrt(3)/8), 0.25,

      // Left right
      0, Math.sqrt(3)/4, 0.5,
      0, Math.sqrt(3)/4, -0.5,
      -1/8, Math.sqrt(3)/8, -0.25,
      -1/8, Math.sqrt(3)/8, 0.25,

      // Left top
      0, Math.sqrt(3)/4, -0.5,
      -0.5, -(Math.sqrt(3)/4), -0.5,
      -3/8, -(Math.sqrt(3)/8), -0.25,
      -1/8, Math.sqrt(3)/8, -0.25,

      // Left left
      -0.5, -(Math.sqrt(3)/4), -0.5,
      -0.5, -(Math.sqrt(3)/4), 0.5,
      -3/8, -(Math.sqrt(3)/8), 0.25,
      -3/8, -(Math.sqrt(3)/8), -0.25,

      // Left bottom inside
      -3/8, -(Math.sqrt(3)/8), 0.25,
      -1/8, Math.sqrt(3)/8, 0.25,
      0, Math.sqrt(3)/8, 0.25,
      -0.25, -(Math.sqrt(3)/8), 0.25,

      // Left right inside
      -1/8, Math.sqrt(3)/8, 0.25,
      -1/8, Math.sqrt(3)/8, -0.25,
      0, Math.sqrt(3)/8, -0.25,
      0, Math.sqrt(3)/8, 0.25,

      // Left top inside
      -1/8, Math.sqrt(3)/8, -0.25,
      -3/8, -(Math.sqrt(3)/8), -0.25,
      -0.25, -(Math.sqrt(3)/8), -0.25,
      0, Math.sqrt(3)/8, -0.25,

      // Left left inside
      -3/8, -(Math.sqrt(3)/8), -0.25,
      -3/8, -(Math.sqrt(3)/8), 0.25,
      -0.25, -(Math.sqrt(3)/8), 0.25,
      -0.25, -(Math.sqrt(3)/8), -0.25,
    ];

    const faceColors = [
      // Front face: red
      [1.0,  0.0,  0.0,  1.0],
      // Back face: green
      [0.0,  1.0,  0.0,  1.0],
      // Side 1 face: blue
      [0.0,  0.0,  1.0,  1.0],
      // Side 2 face: yellow
      [1.0,  1.0,  0.0,  1.0],
      // Side 3 face: purple
      [1.0,  0.0,  1.0,  1.0],
    ];

    let colors = [];
    for (let j = 0; j < 2; j++) {
      const c = faceColors[j];
      for (let k = 0; k < 24; k++) {
        colors = colors.concat(c);
      }
    }
    for (let j = 2; j < faceColors.length; j++) {
      const c = faceColors[j];
      for (let k = 0; k < 32; k++) {
        colors = colors.concat(c);
      }
    }

    const faceNormals = [
      // Front bottom
      [0, 0, 1],
      // Front right
      [0, 0, 1],
      // Front left
      [0, 0, 1],
      // Front bottom inside
      [0, 1, 0],
      // Front right inside
      [-1, -1, 0],
      // Front left inside
      [1, -1, 0],
      // Back bottom
      [0, 0, -1],
      // Back right
      [0, 0, -1],
      // Back left
      [0, 0, -1],
      // Back bottom inside
      [0, 1, 0],
      // Back right inside
      [-1, -1, 0],
      // Back left inside
      [1, -1, 0],
      // Bottom bottom
      [0, -1, 0],
      // Bottom right
      [0, -1, 0],
      // Bottom top
      [0, -1, 0],
      // Bottom left
      [0, -1, 0],
      // Bottom bottom inside
      [0, 0, -1],
      // Bottom right inside
      [-1, 0, 0],
      // Bottom top inside
      [0, 0, 1],
      // Bottom left inside
      [1, 0, 0],
      // Right bottom
      [1, 1, 0],
      // Right right
      [1, 1, 0],
      // Right top
      [1, 1, 0],
      // Right left
      [1, 1, 0],
      // Right bottom inside
      [0, 0, 1],
      // Right right inside
      [-1, 1, 0]
      // Right top inside
      [0, 0, -1],
      // Right left inside
      [1, -1, 0],
      // Left bottom
      [-1, 1, 0],
      // Left right
      [-1, 1, 0],
      // Left top
      [-1, 1, 0],
      // Left left
      [-1, 1, 0],
      // Left bottom inside
      [0, 0, -1],
      // Left right inside
      [-1, -1, 0],
      // Left top inside
      [0, 0, 1],
      // Left left inside
      [1, 1, 0],
    ];
  
    let normals = [];
    for (let j = 0; j < faceNormals.length; j++) {
      const n = faceNormals[j];
      normals = normals.concat(n, n, n, n);
    }

    let indices = [];
    for (let j = 0; j < vertices.length-3; j+=4) {
      indices.push(j, j+1, j+2, j, j+2, j+3);
    }

    return { vertices, colors, indices, normals };
  }
