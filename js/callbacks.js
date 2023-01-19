console.log("Hello this is callbacks!");


/*
    JavaScript Callbacks
*/

function filter(anArr){
    let output = [];
    for (let element of anArr){
        if (element % 2 === 0){ // Logic that determines if filtered
            output.push(element)
        };
    };
    return output;
}

let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(filter(numbers));

// Create a function to filter out based on any true condition from a function
function filterWithCallback(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // Logic that determines if filtered
            output.push(element)
        };
    };
    return output;
}

function isOdd(num){
    return num % 2 === 1;
}

console.log(filterWithCallback(numbers, isOdd));

console.log(filterWithCallback(numbers, num => num >= 25));

// isOdd and the arrow function are considered callback functions (because they are passed into another function as an argument to be executed later)
// filterWithCallback is considered a higher-order function (because it accepts a function as an argument)
console.clear();

function first(){
    console.log('Start')
    setTimeout(() => {
        console.log('This is the first');
        console.log('End')
    }, 3000)
};

function second(){
    console.log('This is the second');
};

// first();
// second();


// Real-ish life example

// Create a function that will take in a song name, download the song, and then play the song

// function downloadSong(songName){
//     console.log(`Downloading ${songName}...`);
//     setTimeout(() => {
//         console.log('Finished downloading');
//         return songName
//     }, 3000);
// };

// function playSong(songName){
//     let song = downloadSong(songName);
//     console.log(`${song} is playing...`);
// };


// playSong('Single Ladies');

// Fix issue with callbacks!

function downloadSong(songName, callback){
    console.log(`Downloading ${songName}...`);
    setTimeout(() => {
        console.log('Finished Downloading')
        console.log(callback);
        callback(songName);
    }, 3000)
}

function playSong(song){
    console.log(`${song} is playing...`)
}

// downloadSong('Formation', playSong);

// downloadSong('Lemonade', s => console.log(`Sending ${s}.mp4 to friend...`));

// Handling Errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database...`)
    setTimeout(() => {
        // Simulate a valid Song Choice
        let song;
        if (songName.length > 5){
            song = {
                title: songName,
                artist: 'Beyonce',
                duration: '3:25'
            };
            callbackSuccess(song)
        } else {
            callbackFail(songName);
        }
    }, 3000);
}

downloadSong2(
    'Halo', 
    song => console.log(`${song.title.toUpperCase()} by ${song.artist} is playing for the next ${song.duration}`),
    s => console.warn(`${s} is not in our database`)
    );
