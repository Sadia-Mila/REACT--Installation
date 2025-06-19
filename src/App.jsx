import './App.css'

import Card from './components/Card'
import Button from './components/Button'

function App() {
  

  return (
    <>
       
      <Card bgColor={"bg-violet-400"} cardTitle={"This is my First React Project Card"} cardDescription ={"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} className = {"mb-5 py-2 px-3 bg-teal-400 rounded-lg text-white font-bold hover:bg-teal-900 hover:text-amber-400"} btnText={"Read More"}/>

      <Button className = {"ml-20 mt-5 mr-3 py-2 px-3 bg-violet-400 rounded-lg text-white font-bold hover:bg-blue-500 hover:text-black"} btnTxt={"Click Me"}/>
     <Button className = {"py-2 px-3 bg-teal-400 rounded-lg text-white font-bold hover:bg-blue-500 hover:text-amber-500"} btnTxt={"Subbmit"}/>
    </>
  )
}

export default App
