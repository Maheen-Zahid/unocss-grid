export default {

  generateRandomLetter(letters) {
    return letters[Math.floor(Math.random() * letters.length)];
  },
  
  generateGrids(numGrids, numRowsCols) {
    const grids = [];

    for (let gridIndex = 0; gridIndex < numGrids; gridIndex++) {
      const grid = [];
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let rowIndex = 0; rowIndex < numRowsCols; rowIndex++) {
        const row = [];

        for (let colIndex = 0; colIndex < numRowsCols; colIndex++) {
          const letter = this.generateRandomLetter(letters);
          row.push(letter);
          letters = letters.replace(letter,'');
        }

        grid.push(row);
      }

      grids.push(grid);
    }

    return grids;
  },
};
