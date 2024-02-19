
const ApiFirebaseClient = (req, res) => {
    res.json({
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId:process.env.PROJECTID,
        storageBucket:process.env.STORAGEBUCKET ,
        messagingSenderId:process.env.MESSAGINSENDERID ,
        appId: process.env.MESSAGINSENDERID
    })
}


export default ApiFirebaseClient