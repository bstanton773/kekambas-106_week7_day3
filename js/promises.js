console.log('This is my promise to you.');



// /*
//     In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.
//     Has three states:
//     1. Pending: initial state, neither fulfilled nor rejected
//     2. Fulfilled: meaning that the operation was completed successfully, will return a value
//     3. Rejected: meaning that the operation failed, will return a error message
// */


// Promise-based function
// function downloadSong(songName){
//     console.log(`Searching for ${songName} in database...`);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (songName.length > 5){
//                 res({
//                     title: songName,
//                     artist: 'Beyonce',
//                     duration: '3:25'
//                 })
//             } else {
//                 rej(`${songName} is not in our database...`)
//             }
//         }, 5000)
//     })
// }


// let mySong = downloadSong('Single Ladies');
// console.log(mySong);

// function playSong(song){
//     console.log(`${song.title} by ${song.artist} is playing for the next ${song.duration}`)
// }

// mySong.then(playSong);

// downloadSong('Halo').then(playSong, err => console.error(err));
// downloadSong('Yonce').then(playSong).catch(e => console.warn(e));


// downloadSong('Drunk In Love')
//     .then(song => song.artist)
//     .then(artist => artist.toUpperCase())
//     .then(upperArtist => console.log(upperArtist))




// Real Life Example
// Get the price of a user's total based on their id
// userId -> user -> user's orders -> calculate the order total


function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Searching for user #${userId} in database...`)
        setTimeout(() => {
            // Set up some fake rule to determing existing user
            if (userId > 100){
                let user = {
                    id: userId,
                    username: 'johnqsample'
                };
                resolve(user);
            } else {
                reject(`No user with id #${userId}`)
            }
        }, 2000);
    });
};

function getUserOrder(user){
    return new Promise((res, rej) => {
        console.log(`Getting the orders for ${user.username}`)
        setTimeout(() => {
            if (user.id > 150){
                let orders = [
                    {prodName: 'Picture Frame', price: 25.95},
                    {prodName: 'Winter Hat', price: 19.45},
                    {prodName: 'Deck of Cards', price: 8.99},
                ];
                res(orders);
            } else {
                rej('This user has no orders');
            }
        }, 2000)
    })
}

function getOrderTotal(order){
    return new Promise((res, rej) => {
        console.log("Calculating order total...")
        setTimeout(() => {
            let total = 0;
            order.forEach(p => total += p.price);
            res(total);
        }, 1000)
    })
}


function getTotalFromUserId(userId){
    getUser(userId)
        .then(user => getUserOrder(user))
        .then(orders => getOrderTotal(orders))
        .then(total => console.log(`User #${userId} has a total of $${total}`))
        .catch(err => console.warn(err))
};

// Async / Await - allows us to write our code to LOOK more synchronous
// *It is simply syntactical sugar for Promises*

/*
Similar Function in Python:

def get_total_from_user_id(user_id):
    user = get_user(user_id)
    order = get_user_order(user)
    total = get_order_total(order)
    print(f"User #{user_id} has a total of ${total}")

*/

async function getUserTotal(userId){
    try{
        let user = await getUser(userId);
        let order = await getUserOrder(user);
        let total = await getOrderTotal(order);
        console.log(`User #${userId} has a total of $${total}`);
    } catch(err){
        console.warn(err);
    };
};

let arrowUserEx = async (id) => {
    let user = await getUser(id);
    return user
}
