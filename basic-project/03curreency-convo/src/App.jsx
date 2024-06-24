import { useState } from 'react'
import usecurrrncyinfo from './hooks/useCurrencyinfo'

import { InputBox } from './component'

function App() {
  const[amount , setAmount] = useState(0)
  const[from , setFrom] = useState('USD')
  const[to , setTo] = useState('INR')
  const [convertAmount, setconvertAmount] = useState(0)
  const currencyInfo = usecurrrncyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setconvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert =()=>{
    setconvertAmount(amount* currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=400')`
    }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto bprdor border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <h1 className='text-2xl font-bold text-gray-800'>Currency Converter</h1>
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount)=>setAmount(amount)}
                currencyOption={options}
                onCurrencychange={(currency)=>setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2
                -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >
                  swap
                </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                lebel="To"
                amount={convertAmount}
                currencyOption={options}
                onCurrencychange={(currency)=>setTo(currency)}
                selectCurrency={from}
                amountDisable

              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
