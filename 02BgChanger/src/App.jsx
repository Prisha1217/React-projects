import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className= "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style= {{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>Pink</button>
          {/* cannot directly pass the function. When we pass the parameter the function gets called. onClick expects a function so a call back function is used  */}
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style= {{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>Orange</button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style= {{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style= {{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style= {{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style= {{backgroundColor:"black"}} onClick={()=> setColor("black")}>Black</button>
          <button className="px-4 py-1 rounded-full text-black shadow-lg outline-none" style= {{backgroundColor:"white"}} onClick={()=> setColor("white")}>White</button>
        </div>
      </div>
    </>
  )
}

export default App
