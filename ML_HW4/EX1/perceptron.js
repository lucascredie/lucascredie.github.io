
class Perceptron {
    constructor (nWeights, rate) {
        this.learningRate = rate;
        this.weights = new Array(nWeights); //initialize to array of size nWeights
        this.threshold = 0; //threshold

        //initialize weights randomly being either 1 or -1. could be a different function
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = randomN(-1, 1);
        }
        // this.weights[0] = 1;
        // this.weights[1] = -2;
        // console.log(this.weights);
        
    }

    feedForward(inputs) { //input here is an array
        let sum = 0;
        //calculate the sum of the product of input and its weight
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
            
        }
        //return with activation function, could be sigmoid, relu etc..
        return this.signActivate(sum);
    }

    train(inputs, desired) {
        // Guess the result
        let result = this.feedForward(inputs);
        // Compute the factor for changing the weight based on the error
        // Error = desired output - guessed output
        // Note this can only be 0, -2, or 2
        // Multiply by learning constant
        let error = desired - result;
        // Adjust weights based on weightChange * input
        for (let i = 0; i < this.weights.length; i++) {
          this.weights[i] += error * inputs[i] * this.learningRate;
        }
      }

    getWeights() { //return weights
        return this.weights;
    }

    //activation function that returns either 1 or -1 based on threshold
    signActivate(n) {
        if(n >= this.threshold) {
         return 1;
        } else {
         return -1;
        }
}

}
//random number function
function randomN(min, max) {
    return Math.random() * (max - min) + min;
}

