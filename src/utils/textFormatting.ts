
export const addEllipsesToText = (textString="",maxLength) => {
    if(textString.length<=maxLength){
        return textString;
    }
    return textString.substring(0,maxLength)+"...";
}

export const truncateTextInMiddle = (textString="",allowedLength=10) => {
    if(textString.length<=allowedLength*2){
        return textString;
    }
    return `${textString.substring(0, allowedLength)}...${textString.substring(textString.length - allowedLength)}`;
}