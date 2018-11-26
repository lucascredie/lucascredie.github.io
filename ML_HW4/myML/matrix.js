/*
Lucas Credie 2018
JS matrix creation and operation library using ES6 class syntax!
*/

class Matrix {
    constructor(rows, columns) {
        this.rows = rows; //has rows
        this.cols = columns; //has columns
        this.values = []; //values will be a 2d array

        for (let i = 0; i < this.rows; i++) {
            this.values[i] = []; //every element in the row is also an array
            for (let j = 0; j < this.cols; j++) {
                this.values[i][j] = 0; //starts filling every item with a 0
            }
        }
    }

    add(n) {

        if(n instanceof Matrix) {
            //element wise
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.values[i][j] += n.values[i][j]; 
                }
            }
        } else {
            //scalar
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.values[i][j] += n; 
                }
            }
        }
    }

    static subtract(m1, m2) {
        if(m1.cols != m2.cols || m1.rows != m2.rows) {
            console.log("columns  and rows must match ");
            return undefined;
        } else {
            //return new matrix with number of rows of A and  number of columns of B
            let result = new Matrix(m1.rows, m1.cols);

            for (let i = 0; i < m1.rows; i++) {
                for (let j = 0; j < m1.cols; j++) {

                    result.values[i][j] = m1.values[i][j] - m2.values[i][j];
                
                } 
            }
            return result;
        }
     
    }


    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // this.values[i][j] = Math.floor(Math.random() * 10); 
                this.values[i][j] = Math.random() * 2 -1; //between -1 and 1
            }
        }
    }
    /*
        This makes it so the sum of the product between input and its weight is calculated
        as part of the feed forward algorithm before you add a bias, that is 
        used to 'direct' the output in a certein direction
    */
    static multiply(m1, m2) {
        if(m1.cols != m2.rows) {
            console.log("columns must match :)");
            return undefined;

        } else {
            //return new matrix with number of rows of A and  number of columns of B
            let result = new Matrix(m1.rows, m2.cols);

            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.cols; j++) {

                 let sum = 0;
                 for (let k = 0; k < m1.cols; k++) {
                     sum += m1.values[i][k] * m2.values[k][j];
                 }
                    result.values[i][j] = sum;
                } 
            }
            return result;
        }
       
    }

    static arrayToMatrix(arr) { //converts array to matrix with 1 column and length rows
        let newMatrix = new Matrix(arr.length, 1);
        for (let i = 0; i < arr.length; i++) {
            newMatrix.values[i][0] = arr[i];
        }
        return newMatrix;
    }

    toArray() { //flattens matrix into 1D array by column
        let newArray = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
               newArray.push(this.values[i][j]);  
            }
        }
        return newArray;
    }

     //Operations
     multiply(n) {
         //first row of A and first column of B have items multiplied and then added together
        
        if(n instanceof Matrix) {
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.cols; j++) {
                         this.values[i][j] *= n.values[i][j];
                    }
            }
           
        } else {
            //scalar
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.values[i][j] *= n; 
                }
            }
        }
    }

    //still need to transpose method
    static transpose(m) {
        let result = new Matrix(m.cols, m.rows); //reverts rows and columns

        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                //revert i j
                result.values[j][i] = m.values[i][j]; 
            }
        }

        return result;
    }

    //Generic function: appplies any function to all elements in element. parameter is a function
    //
    applyFunction(fn) {

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                //executes function on that value
                let currentElement = this.values[i][j]; 
                this.values[i][j] = fn(currentElement, i, j); //also passes location of item
            }
        }
    }
    static applyFunction(m, fn) {
        let result = new Matrix(m.rows, m.cols);

        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                //executes function on that value
                let currentElement = m.values[i][j]; 
                result.values[i][j] = fn(currentElement);
            }
        }
        
        return result;
        
    }

    print() {
        console.table(this.values);
    }

}


// =============================================================================
//      TESTS
// =============================================================================
// let m1 = new Matrix(3,2);
// let m2 = new Matrix(3,2);

// m1.randomize();
// m2.randomize();
// m1.print();
// m2.print();

// let m3 = Matrix.subtract(m1,m2);
// m3.print();




