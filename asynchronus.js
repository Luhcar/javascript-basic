// const token = ~~[Math.random() * 123456]
// const pictures = ["1.jpg", "2.jpg", "3.jpg"]

// function login (username, callback){
//     console.log('processing token now...')
//     setTimeout(() => {
//         callback({token, username})
//     }, 200)
// }

// function getUser (token, callback){
//     console.log('processing apikey now...')
//     if(token)
//         setTimeout(() => {
//             callback({apiKey : "key456"})
//         }, 500)
// }

// function getPictures(apiKey, callback){
//     console.log('processing pic now...')
//     if(apiKey)
//         setTimeout(() => {
//             callback ({pic : pictures})
//         }, 1500)
//     }

// login("cumi_goreng", function (response){
//     const {token} = response
//     getUser(token, function (response) {
//         const {apiKey} = response
//         getPictures(apiKey, function (response){
//             const {pic} = response
//             console.log(pic)
//         })
//     })
// })

// ==========================================================================================

const token = ~~[Math.random() * 123456]
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login (username){
    console.log('processing token now...')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username != "cumi_goreng") failed("sorry wrong data")
            success({token})
        }, 200)
    })
    
}

function getUser (token){
    console.log('processing apikey now...')
    return new Promise((success, failed) => {
        if(!token) failed("sorry, no token")
        setTimeout(() => {
            success({apiKey : "key456"})
        }, 500)
    })

}

function getPictures(apiKey){
    console.log('processing pic now...')
    return new Promise ((success, failed) => {
        if(!apiKey) failed("sorry, no apikey")
        setTimeout(() => {
            success ({pic : pictures})
        }, 1500)
    })
    
    }

/*
const user = login("cumi_goreng")
user.then(function (response){
    const {token} = response
    getUser(token).then(function (response){
        const {apiKey} = response
        getPictures(apiKey).then(function (response){
            const {pic} = response
            console.log(pic);
        })
    }).catch(err => console.log(err))
}).catch(err => console.log(err))
*/

// VERSI SIMPLE
async function UserDisplay(){
    try{
    const {token} = await login("cumi_goreng")
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)

    console.log(`
    token anda adalah: ${token}
    apikey anda adaah: ${apiKey}
    hasil request gambar: ${pic}
    `)

    } catch (err) {
        console.log(err);
    }
    
}

UserDisplay()