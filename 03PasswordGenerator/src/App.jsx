import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] =useState(8);
  const [numAllowed, setNumAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword]= useState("");

  const passwordRef= useRef(null);

  const updatePassword= useCallback(()=>{
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num="0123456789"
    const symbol="~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
    let pass='';

    if(numAllowed){
      str+=num;
    }
    if(charAllowed){
      str+=symbol;
    }
    for(let i=0; i<length; i++ ){
      let index= Math.floor(Math.random()*str.length);
      pass+=str.charAt(index);
    }
    setPassword(pass);
  },[length, numAllowed, charAllowed, setPassword])

  useEffect(()=>{
    updatePassword();
  }, [length, charAllowed, numAllowed])

  const copyToClipboard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="px-5 py-5 my-10 bg-gray-800 rounded-xl max-w-xl mx-auto text-orange-500"> 
        <div className= "text-white text-center text-lg py-2">Password Generator</div>
        <div className='flex justify-center items-center my-3'>
          <input type="text" placeholder='Password...' className=" outline-none rounded-l-xl px-3 py-2 text-lg w-full" value= {password} readOnly ref={passwordRef}/>
          <button className='bg-blue-700 px-3 py-2 rounded-r-lg text-white text-lg hover:bg-blue-400' onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex items-center gap-2'>
          <input type="range" id= "slider" max={40} min={6} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="slider" className='mr-3'>Length: {length}</label>

          <input type="checkbox" id="num" defaultChecked={numAllowed} 
          onChange={()=>{setNumAllowed((prev)=>!prev)}}/>
          <label htmlFor='num' className='mr-3 cursor-pointer'>Numbers</label>

          <input type="checkbox" id="char" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor='char' className='cursor-pointer'>Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
