// import test from "node:test";
import capitalize from "./src/index";
import reverse from "./src/reverse"
import calculator from './src/calculate'
import ceaserCipher from "./src/ceaserCipher"
import analyzeArray from "./src/analyzeArray"


//testing capitalize() 
test("is first letter capitalized", ()=>{
    expect(capitalize("word")).toBe("Word")
})

//testing reverse()
test("is String reversed", ()=>{
    expect(reverse("PALINDROME")).toBe("EMORDNILAP")
})

//testing calculate()
test("5*5 = 25",()=>{
    expect(calculator.multiply(5,5)).toEqual(25)
})

test("5+5 = 25",()=>{
    expect(calculator.add(5,5)).toEqual(10)
})

test("5-5 = 25",()=>{
    expect(calculator.subtract(5,5)).toEqual(0)
})

test("5/5 = 25",()=>{
    expect(calculator.divide(5,5)).toEqual(1)
})

//Testing ceaser Chipher
test("letters shifted + 3", ()=>{
    expect(ceaserCipher("hello")).toBe("khoor")
})

test("letters overlap if xX, yY ,zZ", ()=>{
    expect(ceaserCipher("xyz")).toBe("abc")
})

test("Non-letters will be pushed into message", ()=>{
    expect(ceaserCipher("H3llo!")).toBe("K3oor!")
})

//testing analyzeArray()
test("average of 4,3,2 = 3", ()=>{
    expect(analyzeArray([4,3,2]).average).toBe(3)
})

test("length of 4,3,2,5,6,2,1 = 7", ()=>{
    expect(analyzeArray([4,3,2,5,6,1,33]).length).toBe(7)
})

test("Min of 4,3,35,55,7,89,33,2222 = 3", ()=>{
    expect(analyzeArray([4,3,35,55,7,89,33,2222]).min).toBe(3)
})

test("max of 4,3,35,55,7,89,33,2222 = 4", ()=>{
    expect(analyzeArray([4,3,35,55,7,89,33,2222]).max).toBe(2222)
})



