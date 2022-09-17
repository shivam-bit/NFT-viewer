export const createRequestUrlForNFTsInWallet = (wallet,chain,collections,cursor) =>{
    const collectionPath = collections ? '&'+collections:collections;
    const cursorPath = cursor? `&cursor=${cursor}`:'';
    const chainPath = `chain=${chain.toLowerCase()}`;
    const baseUrl = 'https://deep-index.moralis.io/api/v2/';
    const finalUrl = baseUrl+wallet+"/nft?"+chainPath+"&format=decimal"+collectionPath+cursorPath;
    return finalUrl;
}