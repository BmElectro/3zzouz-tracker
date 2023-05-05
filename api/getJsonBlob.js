import fetch from 'node-fetch'


export default async function getBlob(req, res){
    try {
        const blob = await fetch(`https://jsonblob.com/api/jsonBlob/1104111775766560768`)
        res.json(await blob.json()) 
    } catch (error) { 
        res.json(error) 
    }
}