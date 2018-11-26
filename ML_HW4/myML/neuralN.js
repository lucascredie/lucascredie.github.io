/*
Lucas Credie 2018
Simple neural network lib
*/

class NeuralNetwork { //3 layer neural network

    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;

        //weights between input and hidden layer.
        this.weights_IH = new Matrix(this.hiddenNodes, this.inputNodes);
        //weights between hidden and output layer
        this.weights_HO = new Matrix(this.outputNodes, this.hiddenNodes);

        //how are the weights initialized?? in this case randomly.. :)
        this.weights_IH.randomize();
        this.weights_HO.randomize();
      
        //we create a bias for every node in that layer
        //they will be added after the weighted sum is calculated.
        //initializing it here keeps it separated from adding it in the input. 
        this.bias_H = new Matrix(this.hiddenNodes, 1);
        this.bias_O = new Matrix(this.outputNodes, 1);
        this.bias_H.randomize();
        this.bias_O.randomize();
        this.LEARNING_RATE = 0.1;
    }

    feedForward(inputArr) { 

        //input is suposed to be a matrix! method for that...
        let input = Matrix.arrayToMatrix(inputArr);

        //we start by getting the weighted sum of
        let hidden = Matrix.multiply(this.weights_IH, input);

        //then we add the bias
        hidden.add(this.bias_H);

        //then we use an activation function by passing the sigmoid method as parameter.
        hidden.applyFunction(sigmoid);

        //same stuff to get output. this is 3 layers for now
        let output = Matrix.multiply(this.weights_HO, hidden);
        output.add(this.bias_O);
        output.applyFunction(sigmoid);

        //remember this is output from feed forward that is being returned
        //returns output array and hidden for training
        let returnOBJ = {output: output, hidden: hidden};
        return returnOBJ;
    }

    train(input_array, targets) {
        //NOTE that this could be a loop to support multiple layers but here we are using 3
        let inputs = Matrix.arrayToMatrix(input_array);
        let outputOBJ = this.feedForward(input_array);
        
        let hidden = outputOBJ.hidden; //hidden already with sigmoid applied from object
        
        let outputs = outputOBJ.output; //forward feed output

        //making a matrix from array
        targets = Matrix.arrayToMatrix(targets);
        
        //calculate the error 
        let outputErrors  = Matrix.subtract(targets, outputs);
        
        

        // =====================================================================
        //  HIDDEN TO OUTPUT backward chain
        // =====================================================================
        //GRADIENT
        //deltas: change in weight is = 
        //learning rate * error * sigmoid of output * (1 - sigmoig of the output) * input transposed
        //sigmoid(x) * (1 - sigmoid(x)) its the derivative
        
        let gradients = Matrix.applyFunction(outputs, deriSigmoid);
       
        gradients.multiply(outputErrors); 
        gradients.multiply(this.LEARNING_RATE);
        
        //DELTAS
        //this is the layer
        let hiddenTransposed = Matrix.transpose(hidden);
        let weightHODeltas = Matrix.multiply(gradients, hiddenTransposed);

        this.weights_HO.add(weightHODeltas);
        this.bias_O.add(gradients);  //adjust bias by its deltas
        
        //for hidden layer errors, we have to transpose the matrix first so we can 
        //use it to get the weighted sum
        let weightHOTrans = Matrix.transpose(this.weights_HO);
        //doing the weighted sum for hidden layer's erros
        let hiddenErrors = Matrix.multiply(weightHOTrans, outputErrors);
         
        // =====================================================================
        //      INPUT TO HIDDEN backward chain
        // =====================================================================
        
        //hidden gradient
        let hidden_gradient = Matrix.applyFunction(hidden, deriSigmoid);
        hidden_gradient.multiply(hiddenErrors, 3);
        hidden_gradient.multiply(this.LEARNING_RATE, 4);
        

        //hidden deltas
        let inputTransposed = Matrix.transpose(inputs);
        let weightIHDeltas = Matrix.multiply(hidden_gradient, inputTransposed);

        this.weights_IH.add(weightIHDeltas);
        this.bias_H.add(hidden_gradient);

        return hiddenErrors;
    }

    setWeights(in1, in2) { //arrays coming from input
        let w1 = Matrix.arrayToMatrix(in1);
        let w2 = Matrix.arrayToMatrix(in2);
        this.weights_IH = w1;
        this.weights_HO = w2;
    } 
}

function sigmoid(x) {
    //exp does e ^ -x here
    return 1 / (1 + Math.exp(-x));
}

//derivative of sigmoid is S(x) * (1 - S(x))
//this assumes y was already 'sigmoided'
function deriSigmoid(y) {
    return y * (1 - y);
}

// =============================================================================
//  TEST
// =============================================================================



