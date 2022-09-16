// import { json } from "stream/consumers";

export const formatForReactSelect = (dataArray) =>{
    const formattedArray = dataArray.map((collection)=>{
        return {
            label: collection.name || collection.symbol,
            value: collection.tokenAddress
        }
    })
    return formattedArray;
}

export const formatNftImageUrl = (url) => {
    if(!url){
        return '/metamask-fox.svg';
    }
    const ipfsId = url.split('/').at(-1);
    const newUrl = `https://ipfs.io/ipfs/${ipfsId}`;
    return newUrl;
}

export const destructureCollectionsString = (collectionsString) => {
    if(!collectionsString) return []
const collectionsArray = collectionsString.split('&').map((collection) => {
    return collection.split('=').at(-1)
	});
return collectionsArray; 
}

export const convertMetadataToObject = (dataArray) => {
const result =  dataArray.map((nft)=>{
    return {
        ...nft,
        metadata: JSON.parse(nft.metadata)
    }
})
// console.log({result})
return result;
}