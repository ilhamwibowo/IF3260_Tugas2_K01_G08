export function createHollowCube() { 
    const vertices = [
      // Front face
      -0.5, -0.5,  0.5,     // 0
       0.5, -0.5,  0.5,     // 1
       0.5,  0.5,  0.5,     // 2
      -0.5,  0.5,  0.5,     // 3

      // Back face
      -0.5, -0.5, -0.5,     // 4
      -0.5,  0.5, -0.5,     // 5
       0.5,  0.5, -0.5,     // 6
       0.5, -0.5, -0.5,     // 7

      // Top face   
      -0.5,  0.5, -0.5,     // 8
      -0.5,  0.5,  0.5,     // 9
       0.5,  0.5,  0.5,     // 10
       0.5,  0.5, -0.5,     // 11

      // Bottom face
      -0.5, -0.5, -0.5,     // 12
       0.5, -0.5, -0.5,     // 13
       0.5, -0.5,  0.5,     // 14
      -0.5, -0.5,  0.5,     // 15

      // Right face
       0.5, -0.5, -0.5,     // 16
       0.5,  0.5, -0.5,     // 17
       0.5,  0.5,  0.5,     // 18
       0.5, -0.5,  0.5,     // 19

      // Left face
      -0.5, -0.5, -0.5,     // 20
      -0.5, -0.5,  0.5,     // 21
      -0.5,  0.5,  0.5,     // 22
      -0.5,  0.5, -0.5,     // 23


      //////////// Inner Cubes
      // Front Inner cube 
        -0.4, -0.4,  0.5,   // 24
        0.4, -0.4,  0.5,    // 25
        0.4,  0.4,  0.5,    // 26
        -0.4,  0.4,  0.5,   // 27

        // Back face
      -0.4, -0.4, -0.5,     // 28
      -0.4,  0.4, -0.5,     // 29
       0.4,  0.4, -0.5,     // 30
       0.4, -0.4, -0.5,     // 31

        // Top face
      -0.4,  0.5, -0.4,     // 32
      -0.4,  0.5,  0.4,     // 33
       0.4,  0.5,  0.4,     // 34
       0.4,  0.5, -0.4,     // 35

        // Bottom face
      -0.4, -0.5, -0.4,     // 36
      0.4, -0.5, -0.4,      // 37
      0.4, -0.5,  0.4,      // 38
     -0.4, -0.5,  0.4,      // 39

        // Right face
       0.5, -0.4, -0.4,     // 40
       0.5,  0.4, -0.4,     // 41 
       0.5,  0.4,  0.4,     // 42
       0.5, -0.4,  0.4,     // 43

      // Left face
      -0.5, -0.4, -0.4,      // 44
      -0.5, -0.4,  0.4,      // 45
      -0.5,  0.4,  0.4,      // 46
      -0.5,  0.4, -0.4,      // 47

      
      //////////// Inner Cubes
      // Front Inner cube 
      -0.4, -0.4,  0.5,       // 24
      0.4, -0.4,  0.5,        // 25
      0.4,  0.4,  0.5,        // 26
      -0.4,  0.4,  0.5,       // 27

      // Back face
    -0.4, -0.4, -0.5,     // 28
    -0.4,  0.4, -0.5,     // 29
     0.4,  0.4, -0.5,     // 30
     0.4, -0.4, -0.5,     // 31

      // Top face
    -0.4,  0.5, -0.4,     // 32
    -0.4,  0.5,  0.4,     // 33
     0.4,  0.5,  0.4,     // 34
     0.4,  0.5, -0.4,     // 35

      // Bottom face
    -0.4, -0.5, -0.4,     // 36
    0.4, -0.5, -0.4,      // 37
    0.4, -0.5,  0.4,      // 38
   -0.4, -0.5,  0.4,      // 39

      // Right face
     0.5, -0.4, -0.4,     // 40
     0.5,  0.4, -0.4,     // 41 
     0.5,  0.4,  0.4,     // 42
     0.5, -0.4,  0.4,     // 43

    // Left face
    -0.5, -0.4, -0.4,      // 44
    -0.5, -0.4,  0.4,      // 45
    -0.5,  0.4,  0.4,      // 46
    -0.5,  0.4, -0.4,      // 47

      
      //////////// Inner Cubes
      // Inner cube 
      -0.4, -0.4,  0.4,       // 48
      0.4, -0.4,  0.4,        // 49
      0.4,  0.4,  0.4,        // 50
      -0.4,  0.4,  0.4,       // 51

      // Back face
    -0.4, -0.4, -0.4,     // 52
    -0.4,  0.4, -0.4,     // 53
     0.4,  0.4, -0.4,     // 54
     0.4, -0.4, -0.4,     // 55

      // Top face
    -0.4,  0.4, -0.4,     // 56
    -0.4,  0.4,  0.4,     // 57
     0.4,  0.4,  0.4,     // 58
     0.4,  0.4, -0.4,     // 59

      // Bottom face
    -0.4, -0.4, -0.4,     // 60
    0.4, -0.4, -0.4,      // 61
    0.4, -0.4,  0.4,      // 62
   -0.4, -0.4,  0.4,      // 63

      // Right face
     0.4, -0.4, -0.4,     // 64
     0.4,  0.4, -0.4,     // 65 
     0.4,  0.4,  0.4,     // 66
     0.4, -0.4,  0.4,     // 67

    // Left face
    -0.4, -0.4, -0.4,      // 68
    -0.4, -0.4,  0.4,      // 69
    -0.4,  0.4,  0.4,      // 70
    -0.4,  0.4, -0.4,      // 71


          //////////// Inner Dupes Cubes
      // Front Inner cube 
      -0.4, -0.4,  0.5,       // 24
      0.4, -0.4,  0.5,        // 25
      0.4,  0.4,  0.5,        // 26
      -0.4,  0.4,  0.5,       // 27

      // Back face
    -0.4, -0.4, -0.5,     // 28
    -0.4,  0.4, -0.5,     // 29
     0.4,  0.4, -0.5,     // 30
     0.4, -0.4, -0.5,     // 31

      // Top face
    -0.4,  0.5, -0.4,     // 32
    -0.4,  0.5,  0.4,     // 33
     0.4,  0.5,  0.4,     // 34
     0.4,  0.5, -0.4,     // 35

      // Bottom face
    -0.4, -0.5, -0.4,     // 36
    0.4, -0.5, -0.4,      // 37
    0.4, -0.5,  0.4,      // 38
   -0.4, -0.5,  0.4,      // 39

      // Right face
     0.5, -0.4, -0.4,     // 40
     0.5,  0.4, -0.4,     // 41 
     0.5,  0.4,  0.4,     // 42
     0.5, -0.4,  0.4,     // 43

    // Left face
    -0.5, -0.4, -0.4,      // 44
    -0.5, -0.4,  0.4,      // 45
    -0.5,  0.4,  0.4,      // 46
    -0.5,  0.4, -0.4,      // 47


    ];


    const faceColors = [
      [1.0,  0.0,  0.0,  1.0],
      [0.0,  1.0,  0.0,  1.0],
      [0.0,  0.0,  1.0,  1.0],
      [1.0,  1.0,  0.0,  1.0], 
      [1.0,  0.0,  1.0,  1.0],
      [0.0,  1.0,  1.0,  1.0],
    ];

    let colors = [];
    for (let j = 0; j < faceColors.length; j++) {
      const c = faceColors[j];
      colors = colors.concat(c, c, c, c);
    }

    for (let j = 0; j < faceColors.length; j++) {
        const c = faceColors[j];
        colors = colors.concat(c, c, c, c);
    }

    for (let j = 0; j < faceColors.length; j++) {
        const c = faceColors[j];
        colors = colors.concat(c, c, c, c);
    }

    for (let j = 0; j < faceColors.length; j++) {
        const c = faceColors[j];
        colors = colors.concat(c, c, c, c);
    }


    const faceNormals = [
      // Front face
      [0, 0, 1],
      // Back face
      [0, 0, -1],
      // Top face
      [0, 1, 0],
      // Bottom face
      [0, -1, 0],
      // Right face
      [1, 0, 0],
      // Left face
      [-1, 0, 0],
    ];
  
    let normals = [];
    for (let j = 0; j < faceNormals.length; j++) {
      const n = faceNormals[j];
      normals = normals.concat(n, n, n, n);
    }

    for (let j = 0; j < faceNormals.length; j++) {
        const n = faceNormals[j];
        normals = normals.concat(n, n, n, n);
      }

    for (let j = 0; j < faceNormals.length; j++) {
        normals = normals.concat(faceNormals[2], faceNormals[5], faceNormals[3], faceNormals[4]);
    }

    for (let j = 0; j < faceNormals.length; j++) {
        normals = normals.concat(faceNormals[2], faceNormals[5], faceNormals[3], faceNormals[4]);
    }

    const indices = [
        0, 1, 25,    0, 25, 24,     1,  2,  26,     1, 26, 25,      2, 3, 27,   2, 27, 26,  3 , 0, 24,      3, 24, 27
    ];

    let ctr = 0;
    for(let j = 0;j < 5;j++) {
        ctr += 4;
        for(let jj = 0; jj < 24; jj++) {
            indices.push(indices[jj]+ctr);
        }
    }

    shapeMade = false;
    ctr += 24;
    for(let j = 0;j < 6;j++) {
        ctr += 4;
        for(let jj = 0; jj < 24; jj++) {
            indices.push(indices[jj]+ctr);
        }
    }

    for(let i = 0;i < indices.length;i+=3) {
        console.log(indices[i], indices[i+1], indices[i+2]);
    }

    return { vertices, colors, indices, normals };
  }
