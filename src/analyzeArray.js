import { init } from "es-module-lexer"

export default function analyzeArray(arrayOfNumbers){
    let length= arrayOfNumbers.length
    let sumOfAll=arrayOfNumbers.reduce((preValue, currentValue)=>{
        return (preValue + currentValue)
    })
    let average=sumOfAll/length
    let initialValue=0
    let min= arrayOfNumbers.reduce((prev, current)=>{
        initialValue
        if(prev>current){
            return current
        }
        else{
            return prev
        }
    })

    let max = arrayOfNumbers.reduce((prev, current)=>{
        initialValue
        if(prev>current){
            return prev
        }
        else{
            return current
        }
    })
    return {
        average,
        length,
        min,
        max,
    }
}