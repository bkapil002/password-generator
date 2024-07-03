import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [Password , setPassword] = useState('')
    const [length , setLength] = useState(12)
    const [includeNumbers , setIncludeNumbers] = useState(true)
    const [includeSymbols , setIncludeSymbols] = useState(true)
    const [includeUppercase , setincludeUppercase] = useState(true)

    const passwordgenerator = () =>{
        const lowercase = 'abcdefghijklmnopqrstuvwxyz'
        const number = '0123456789'
        const Symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='
        const Uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let allCatagery = lowercase

        if(includeNumbers) allCatagery += number
        if(includeSymbols) allCatagery += Symbols
        if(includeUppercase) allCatagery += Uppercase

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const passwordLength = Math.floor(Math.random() * allCatagery.length);
            generatedPassword += allCatagery[passwordLength];
        }

        setPassword(generatedPassword)
        
    } 
  return (
    <div className='full'>
      <div className='flex justify-center '>
        <div>
        <h1 className='text-5xl font-bold'>Password Generator</h1>
         <div className=' bg-red-400 h-auto w-auto mx-auto rounded-lg '>
              <div>
                <div className=' mt-5 mx-auto '>
                        <div className=' mt-8 py-2 w-40 '></div>
                </div>

                  <div className='mt-4 '>
                      <div className='bg-white w-80 h-10 mx-auto rounded-lg text-center pt-2'>{Password}</div>
                  </div>



                <div className=' flex mt-5  justify-around'>

                <div>
                   <label className=' font-semibold text-1xl '>
                    <input className=' cursor-pointer m-1' type='checkbox' checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
                     Numbers
                   </label>
                </div>

                <div>
                   <label className=' font-semibold text-1xl '>
                    <input className=' cursor-pointer m-1' type='checkbox' checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
                     Symbols
                   </label>
                </div>

                <div>
                   <label className=' font-semibold text-1xl '>
                    <input className=' cursor-pointer m-1' type='checkbox' checked={includeUppercase} onChange={(e)=>setincludeUppercase(e.target.checked)} />
                     Uppercase Letters
                   </label>
                </div>
                </div>

                  <div className='flex justify-center mt-3'>
                       <label >
                        <input className='w-10 rounded-lg pl-1 font-semibold '
                          type='number'
                           value={length} 
                           onChange={(e)=>setLength(e.target.value)} 
                           min='4'
                          max='32'/>
                       </label>      
                  </div>


                  <div className='full justify-center flex mt-7 '>
                  <button className='w-60 h-10 bg-sky-800 mb-7 rounded-lg text-white font-semibold' onClick={passwordgenerator}>Password</button>
                  </div>
              </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
