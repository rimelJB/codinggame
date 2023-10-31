const binaryMatrix = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
  ];
  
  // Iterate through the matrix and replace 1 with '#' and 0 with '#'
  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[i].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        binaryMatrix[i][j] = '#';
      } else {
        binaryMatrix[i][j] = ' ';
      }
    }
  }
  
  // Print the updated matrix
  for (let i = 0; i < binaryMatrix.length; i++) {
    console.log(binaryMatrix[i].join(' '));
  }