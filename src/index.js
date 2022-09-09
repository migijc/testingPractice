import analyzeArray from "./analyzeArray"
export default function capitalize(word){
    let firstLetter=word[0]
    if(firstLetter.toUpperCase() === firstLetter){
        return word

    }
    else{
        firstLetter=firstLetter.toUpperCase()
        return firstLetter + word.slice(1)
    }
}

let a= analyzeArray([4,7,44,56,99,63,22,11,23,954])
console.log(a)





