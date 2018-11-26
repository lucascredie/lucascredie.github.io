//input is array [x, y], label 1 for  apples and -1 for oranges. there is an 1 there as a bias in the input
let bias = 1; 
//bias here is used in the input and should be added after the weighted sum before activation function

let oranges = [
    {input: [3.35716227590948, 2.81178103222314, bias], output: 1},
    {input: [2.65411214914886, 2.42899833641413, bias], output: 1},
    {input: [3.62700071080127, 1.20313521177626, bias], output: 1},
    {input: [2.27951778404949, 2.28557381182909, bias], output: 1},
    {input: [2.80005721114232, 2.34499868773217, bias], output: 1},
    {input: [3.40781114443807, 2.35595416175045, bias], output: 1},
    {input: [3.64512487746624, 2.33430025284102, bias], output: 1},
    {input: [3.59541903712168, 1.39877144261303, bias], output: 1},
    {input: [2.99010522111562, 1.92164135058401, bias], output: 1},
    {input: [2.19795721899942, 2.12865211733874, bias], output: 1},
]

let apples = [
    {input: [1.06266615323742, 1.14383821017927, bias], output: -1},
    {input: [0.426764324659268, 1.5954577328215, bias], output: -1},
    {input: [1.59458210082605, 0.981183361703341, bias], output: -1},
    {input: [1.16364618070433, 1.08731957141046, bias], output: -1},
    {input: [0.90664571115928, 1.36289527414665, bias], output: -1},
    {input: [0.705841728492906, 2.09159290909855, bias], output: -1},
    {input: [0.931802058456702, 1.0569656567604, bias], output: -1},
    {input: [1.53338410567959, 1.0296407302618, bias], output: -1},
    {input: [0.952175797258166, 0.583825268174989, bias], output: -1},
    {input: [1.14720540819632, 0.331909071031098, bias], output: -1},

]

//first row would be f f = f
let XOR = [
    {input: [-1, -1, bias], output: -1},
    {input: [-1, 1, bias], output: 1},
    {input: [1, -1, bias], output: 1},
    {input: [1, 1, bias], output: -1},
]