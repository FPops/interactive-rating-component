import React, {useState} from 'react'
import star from './assets/icon-star.svg'
import thankYou from './assets/illustration-thank-you.svg'


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");


  const Button = ({number}) => {
    return(
      <button onClick={() => setItems(number)} className='btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150 hover:bg-orange-500 hover:text-white active:bg-slate-30'>
        {number}
      </button>
    )
  }

  return (
    <>
      {!isSubmitted &&     <div className='bg-gray-900 h-screen flex items-center justify-center'>
      <div className='bg-gray-800 max-w-[400px] rounded-3xl px-8 py-6'>
        <img src={star} alt="a logo of a star" className='bg-slate-700 p-3 rounded-full mb-8' />

        <h2 className='font-bold text-3xl text-white mb-4'>How did we do?</h2>
        <p className='text-slate-400 mb-5 '>Please let us know how we did with your support request. All feedback is appreciated to help us improve out offering!</p>
        <div>
          <ul className='grid grid-cols-5 w-full mb-8 ml-3'>
            <li><Button number={1}/></li>
            <li><Button number={2}/></li>
            <li><Button number={3}/></li>
            <li><Button number={4}/></li>
            <li><Button number={5}/></li>
          </ul>
        </div>
        <button onClick={() => setIsSubmitted(true)} className='bg-orange-500 text-white hover:bg-white hover:text-orange-500 p-2 rounded-full w-full'>Submit</button>
      </div>


      </div>}
      {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted} />}
    </>

  );
}

const ThankYou = ({items,setIsSubmitted}) => {

  return(
    <div className='bg-gray-900 h-screen flex items-center justify-center'>

      <div className='bg-gray-800 max-w-[400px] rounded-3xl px-8 py-6 flex flex-col items-center justify-center'>

      <img src={thankYou} alt="phone with a cc around it" className='mb-6'/>

      <div className='bg-slate-700 rounded-full px-4 pt-1 pb-1 mb-10 flex items-center justify-center text-orange-600'>
        <p>You selected {items} out of 5</p>
      </div>

      <h1 className='text-3xl font-bold text-white mb-2'>Thank you!</h1>

      <p className='text-center text-slate-300 mb-4'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

      <button onClick={() => setIsSubmitted(false)} className='bg-orange-500 text-white hover:bg-white hover:text-orange-500 p-2 rounded-full w-full'>Back</button>
      
    </div>
    </div>
    

  )
}

export default App;
