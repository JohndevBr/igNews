import { useState } from "react"

export const useLanguage =() => {
  const [ isEnglish, setIsEnglish ] = useState(true)

  function handleSelectEnglish () {
    setIsEnglish(true)
    console.log("PASSOU INGLES", isEnglish)
  }

  function handleSelectPtBR () {
    setIsEnglish(false)
    console.log("PASSOU PORTUGUES", isEnglish)
  }


  return [isEnglish, handleSelectEnglish, handleSelectPtBR];
}