//uses p5 for drawing on canvas or just as a "main" class
// Lucas Credie ex 3

//data is in data. js
//APPLES are 1, ORANGES are 0
function setup() {
    //point we are predicting if it is orange or apple
    
    //this neural network has 2 inputs, being each either true or false
    let neuralNetwork = new NeuralNetwork(2,2,1);

    let count = 60000;

    //INPUT AND LISTENERS
    let button = $("#predict");
    

    button.on("click", function(){
    
        console.clear();
        
        let tempData = ORANGES.concat(APPLES);
        
        for (let i = 0; i < 5; i++) {
            tempData = tempData.concat(tempData);
            tempData = shuffleIt(tempData);
        }
    
        for (let i = 0; i < count; i++) { //training it ... :)
            let data = random(tempData); //p5 random method returns random from array.
            neuralNetwork.train(data.inputs, data.targets);
        }
        
        predict(neuralNetwork);
    });
}

function predict(neuralNetwork) {

    let predictionInput = [1, 1];
    let predictionInput2 = [3.5, 2.5];
    
    let predict = neuralNetwork.feedForward(predictionInput);
    let predict2 = neuralNetwork.feedForward(predictionInput2);

    let log = $("#log");
    log.html(`

    <p>
    Input: (${predictionInput[0]}, ${predictionInput[1]}) -> APPLE |   <span>${predict.output.values[0]}</span>
    </p>
    <p>
        Input: (${predictionInput2[0]}, ${predictionInput2[1]}) -> ORANGE |   <span>${predict2.output.values[0]}</span>
    </p>

   
    `);


}

function getRandom() { //between -1 and 1
   return Math.random() * 2 -1;
}

function shuffleIt(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



