import { useEffect } from "react"


function App() {

  useEffect(() =>{
    setTimeout(() =>{
      window.close()
    }, 2000)
    
  }, [])

  if(window.closed){
    location.assign('/protected')
  }

  return <h1>Thanks for login</h1>
}

export default App
