import { mat, zeros, Matrix,  } from '@josh-brown/vector'

// We need:
// grid top left coord
// size of one grid cell CELLSIZE

enum ShapeType {
    Rectangle,
}

interface Shape {
    type: ShapeType;
    height: number;
    width: number;
    x: number; //top left corner x coord in pixel rep
    y: number; //top left corner y coord in pixel rep
    row: number; //top left corner on the grid (-1 default) 
    col: number; //top left corner on the grid (-1 default) 
}

interface PixelCoord {
    x: number;
    y: number;
}

interface GridCoord {
    row: number;
    col: number;
}

const MAX_X: number = 9000
const MAX_Y: number = 9000
const MAX_GRID = 30;
const CELLSIZE = MAX_X / MAX_GRID;

/*
find the top left corner for each shape (on the grid)
find the top left corner of final shape
check the size of hte final shape, if no match stop. Wrong solution
else, continue with solution check
*/

// Finds the top-left and bottom-right most corner coordinate among the set of shapes
// input: array of shape
// output: array of min and max coords (i.e. top-left most and bottom-right most)
function findMinMax(shapes: Shape[]): PixelCoord[] {
    let topLeft: PixelCoord = {x: MAX_X, y: MAX_Y};
    let bottomRight: PixelCoord = {x: 0, y: 0};
    shapes.forEach(sh => {
        if (sh.x < topLeft.x) {
            topLeft.x = sh.x;
        }
        if (sh.y < topLeft.y) {
            topLeft.y = sh.y;
        }
        if (sh.x > bottomRight.x) {
            bottomRight.x = sh.x;
        }
        if (sh.y > bottomRight.y) {
            bottomRight.y = sh.y;
        }
        
    });

    return [topLeft, bottomRight]
}

// Find top left corner for each shape (on the grid)
// input: array of shape coords, grid coords
function coordToGrid(shapes: Shape[], topLeft: PixelCoord): Shape[] {
    shapes.forEach(sh => {
        // find top left corner position on grid
        sh.row = (sh.y - topLeft.x) / CELLSIZE
        sh.col = (sh.x - topLeft.y) / CELLSIZE
    });
    return shapes
}


// Populating the matrix of the shape. This is to do solution check later on
// input: array of shapes
// output: array of matrices
function formShapeMatrices(shapes: Shape[], resultantTopLeft: GridCoord, resultantBottomRight: GridCoord) : Matrix[] {
    const resultantWidth = resultantBottomRight.col - resultantBottomRight.col;
    const resultantHeight = resultantBottomRight.row - resultantBottomRight.row;
    
    return shapes.map(sh => {
        // populate the rest of the shape with '1's
        switch (+sh.type) {
            case ShapeType.Rectangle:
                let mat = zeros([resultantHeight, resultantWidth])
                for(let r = sh.row - resultantTopLeft.row; r < sh.height; r++) {
                    for(let c = sh.col - resultantTopLeft.col; c < sh.width; r++) {
                        mat[r][c] = 1
                    }
                }
                return mat;
                break;
            default:
                return zeros([resultantHeight, resultantWidth])
                break;
        }
    });
}



// Compares the shape of the drawn matrix to the shape of the solution matrix.
function sizeCheck(inputSize: PixelCoord[], solutionSize: GridCoord[]) {
    
}

// Checks if matrices are a match.
function matchMatrices() {
    
}


// input: array of shape matrices, solution
// ouput: is solution or not
function solutionCheck() {
    
}

export {  }