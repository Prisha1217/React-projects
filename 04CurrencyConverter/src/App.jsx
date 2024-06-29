import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromAmt, setFromAmt]= useState();
  const [toAmt, setToAmt]= useState();
  const swap= ()=>{
    const temp= fromAmt;
    setFromAmt(toAmt);
    setToAmt(temp);
    const temp2= fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp2);
  }

  let data= useCurrencyInfo(fromCurrency);
  const option= Object.keys(data);

  const calculateToAmount=()=>{
    setToAmt(data[toCurrency] * fromAmt)
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        calculateToAmount(fromAmt)
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            selectCurrency={fromCurrency}
                            onCurrencyChange={(fromCurrency)=>setFromCurrency(fromCurrency)}
                            amount={fromAmt}
                            currencyOptions={option}
                            onAmountChange={(fromAmt)=>setFromAmt(fromAmt)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick= {swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            selectCurrency={toCurrency}
                            onCurrencyChange={(toCurrency)=>(setToCurrency(toCurrency))}
                            amount={toAmt}
                            onAmountChange={(fromAmt)=>calculateToAmount(fromAmt)}
                            currencyOptions={option}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >
                        Convert from {fromCurrency} to {toCurrency}
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
