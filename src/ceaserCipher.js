export default function ceaserCipher(message){
    let arrayFromMessage=message.split("")
    const alphabetLC=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const alphabetUC=alphabetLC.map(letter=> letter.toUpperCase())
    let arrayFromEncryptedMessage=[]
    arrayFromMessage.forEach(character=>{
        let isLowerCaseLetter= alphabetLC.includes(character)
        let isUpperCaseLetter= alphabetUC.includes(character)
        if((isLowerCaseLetter == false) && (isUpperCaseLetter == false)){
            arrayFromEncryptedMessage.push(character)
        }
        else if(isLowerCaseLetter== true){
            let index=alphabetLC.indexOf(character)
            index= index+3
            switch(true){
                case index==26:
                    arrayFromEncryptedMessage.push(alphabetLC[0])
                    break;
                case index==27:
                    arrayFromEncryptedMessage.push(alphabetLC[1])
                    break;
                case index==28:
                    arrayFromEncryptedMessage.push(alphabetLC[2])
                    break;
                    default:
                        arrayFromEncryptedMessage.push(alphabetLC[index])
            }
            
        }else if(isUpperCaseLetter == true){
            let index=alphabetUC.indexOf(character)
            index= index+3
            switch(true){
                case index==26:
                    arrayFromEncryptedMessage.push(alphabetUC[0])
                    break;
                case index==27:
                    arrayFromEncryptedMessage.push(alphabetUC[1])
                    break;
                case index==28:
                    arrayFromEncryptedMessage.push(alphabetUC[2])
                    break;
                    default:
                    arrayFromEncryptedMessage.push(alphabetUC[index])
            }
        }
    })
    return arrayFromEncryptedMessage.join("")
}