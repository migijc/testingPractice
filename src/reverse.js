export default function reverse(phrase, returnPhrase, phraseToArray){
  phraseToArray=phraseToArray|| phrase.split('')
  returnPhrase=returnPhrase||[]
  if(phraseToArray.length==0){
      return returnPhrase.join('')
  }
  else{
      returnPhrase.push(phraseToArray.pop())
      return reverse(phrase,returnPhrase,phraseToArray)
  }
}

