export const formatForReactSelect = (dataArray) =>{
    const formattedArray = dataArray.map((collection)=>{
        return {
            label: collection.name || collection.symbol,
            value: collection.tokenAddress
        }
    })
    return formattedArray;
}