import React from "react"
import ReactDOM from "react-dom"
import PersonalInfo from "./components/PersonalInfo"
import ReactMarkdown from "react-markdown"

export default function App(){


  const markdowntest = `
  
  # testing markdown
  this would be *italic*, and this would be **bold**`;
  


  return(
    <>
      <PersonalInfo/>
      <ReactMarkdown>
        {markdowntest}
      </ReactMarkdown>

    </>
  )
}