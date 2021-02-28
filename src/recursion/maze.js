/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  /**
   * This inner function returns all paths.
   * Using an IIFE we find all pay=ths and just return the first one.
   */
  return (function solve(maze, index) {
    let paths = [];
    let row = index[0];
    let col = index[1];

    let mazeHeight = maze.length;
    let mazeWidth = maze[0].length;

    if ("e" === maze[row][col]) {
      return [""];
    }

    // mark the current spot as visited
    maze[row][col] = ".";

    //down
    let nextRow = row + 1;
    let nextCol = col;

    if (
      nextRow < mazeHeight &&
      (maze[nextRow][nextCol] === " " || maze[nextRow][nextCol] === "e")
    ) {
      let downResult = solve(maze, [nextRow, nextCol]);

      if (downResult.length != 0) {
        //We did find a solution
        downResult.forEach((p) => paths.push("D" + p));
      }
    }

    //right
    nextRow = row;
    nextCol = col + 1;

    if (
      nextCol < mazeWidth &&
      (maze[nextRow][nextCol] === " " || maze[nextRow][nextCol] === "e")
    ) {
      let rightResult = solve(maze, [nextRow, nextCol]);

      if (rightResult.length !== 0) {
        //We did find a solution
        rightResult.forEach((p) => paths.push("R" + p));
      }
    }

    //left
    nextRow = row;
    nextCol = col - 1;

    if (
      nextCol >= 0 &&
      (maze[nextRow][nextCol] === " " || maze[nextRow][nextCol] === "e")
    ) {
      let leftResult = solve(maze, [nextRow, nextCol]);

      if (leftResult.length !== 0) {
        //We did find a solution
        leftResult.forEach((p) => paths.push("L" + p));
      }
    }

    //up
    nextRow = row - 1;
    nextCol = col;

    if (
      nextRow >= 0 &&
      (maze[nextRow][nextCol] === " " || maze[nextRow][nextCol] === "e")
    ) {
      let upResult = solve(maze, [nextRow, nextCol]);

      if (upResult.length !== 0) {
        //We did find a solution
        upResult.forEach((p) => paths.push("U" + p));
      }
    }

    // if all fails - no directions work
    maze[row][col] = " ";

    return paths;
  })(maze, index)[0];
}

module.exports = mazeSolver;
