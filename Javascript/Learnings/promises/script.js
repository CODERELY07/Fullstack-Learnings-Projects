// Example 1: Basic Promise usage

// Create a new Promise that resolves if a equals 2
let p = new Promise((resolve,reject) =>{
    let a = 1 + 1;
    if(a == 2){
        resolve('Success'); // Resolve the promise with 'Success'
    }else{
        reject('Failed'); // Reject the promise with 'Failed'
    }
});

// Use .then() to handle the resolved promise and .catch() for rejected promise
p.then((message)=>{
    console.log('This is in the then ' + message); // Log 'Success'
}).catch((message)=>{
    console.log("This is in the catch " + message); // Log 'Failed'
});


// Example 2: Handling different rejection scenarios

const userLeft = false;
const userWatching = false;

function watchTutorial(){
    return new Promise((resolve,reject) =>{ 
        if(userLeft){
            reject({ 
                name:'User Left',
                message: ':('
            });
        }else if(userWatching){
            reject({
                name:'User Watching Meme',
                message:'hahha'
            });
        }else{
            resolve('Thumbs up and Subscribe');
        }
    });
}

// Using .then() and .catch() to handle different rejection scenarios
watchTutorial().then((message) =>{
    console.log('Success: ' + message); // Log 'Thumbs up and Subscribe'
}).catch((error) =>{
    console.log(error.name + ' ' + error.message); // Log 'User Watching Meme hahha'
});


// Example 3: Promise.all() - Resolve when all promises resolve

const recordVideoOne = new Promise((resolve,reject)=>{
    resolve('Video 1 Recorded');
});
const recordVideoTwo = new Promise((resolve,reject)=>{
    resolve('Video 2 Recorded');
});
const recordVideoThree = new Promise((resolve,reject)=>{
    resolve('Video 3 Recorded');
});

// Promise.all() waits for all promises to resolve, then logs all resolved messages
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages); // Log ['Video 1 Recorded', 'Video 2 Recorded', 'Video 3 Recorded']
});


// Example 4: Promise.race() - Resolve when the first promise resolves

// Promise.race() resolves with the value of the first resolved promise
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(message); // Log 'Video 1 Recorded' (assuming recordVideoOne resolves first)
});
