//uses p5 for drawing on canvas or just as a "main" class
// Lucas Credie ex 2 XOR dataset. all js are imported in the html

//data for xor
//1 for true 0 for false
let XOR_DATA = [
    {inputs: [1, 0], targets: [1]},
    {inputs: [0, 1], targets: [1]},
    {inputs: [1, 1], targets: [0]},
    {inputs: [0, 0], targets: [0]},
   
]



function setup() {

    //this neural network has 2 inputs, being each either true or false
    let neuralNetwork = new NeuralNetwork(2,2,1);

    let count = 50000;

    //this method increases ammount of traning data by copying it and also shuffles it
 

    
    

    //INPUT AND LISTENERS
    let button = $("#predict");
    
        

    button.on("click", function(){
    
        console.clear();
        
        let tempData = XOR_DATA;

        for (let i = 0; i < 20; i++) {
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

    console.log("1, 0 -> 1");
    let predict = neuralNetwork.feedForward([1,0]);
    console.log(predict.output.values[0]);

    console.log("0, 1 -> 1");
    let predict2 = neuralNetwork.feedForward([0,1]);
    console.log(predict2.output.values[0]);

    console.log("1, 1 -> 1");
    let predict3 = neuralNetwork.feedForward([1,1]);
    console.log(predict3.output.values[0]);

    console.log("0, 0 -> 1");
    let predict4 = neuralNetwork.feedForward([0,0]);
    console.log(predict4.output.values[0]);

    let log = $("#log");
    log.html(`
    <p>
        1, 0 -> 1 |   <span>${predict.output.values[0]}</span>
    </p>

    <p>
        0, 1 -> 1 |   <span>${predict2.output.values[0]}</span>
    </p>

    <p>
        1, 1 -> 0 |   <span>${predict3.output.values[0]}</span>
    </p>

    <p>
        0, 0 -> 0 |   <span>${predict4.output.values[0]}</span>
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



