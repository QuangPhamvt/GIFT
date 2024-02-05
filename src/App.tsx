import React from 'react'
import { useRecoilState } from 'recoil'
import './App.css'
import gif from './assets/replace.gif'
import accpectLogo from './assets/accept.png'
import { acceptState, rejectState } from './store/atom'
import { LIST_REJECTED } from './constant'

function App() {
  const [rejected, setRejected] = useRecoilState(rejectState)
  const [accept, setAccept] = useRecoilState(acceptState)
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const onClickRejected = () => {
    setRejected(preState => preState + 1)
    if (buttonRef.current) {
      buttonRef.current.style.transform = `scale(${1 + 0.5 * (rejected + 1)})`
    }
  }
  const onClickAccept = () => {
    setAccept(preState => !preState)
  }
  return (
    <div style={{ rowGap: `${rejected ? rejected + 1 : 1}rem` }} className='bg-[#FF9BD2] w-screen h-screen flex-col flex justify-center items-center select-none'>
      {
        !accept && (
          <>
            {
              rejected <= 4 &&
              <div className='w-84 flex flex-col items-center space-y-2'>
                <img src={gif} />
                <p className='font-bold text-black text-2xl'>Will you be my Valentine</p>
              </div>
            }
            <div
              style={{
                columnGap: `${rejected ? rejected + 1 : 1}rem`,
                flexDirection: rejected <= 5 ? 'row' : 'column',
                rowGap: `${rejected ? rejected + 1 : 1}rem`
              }}
              className='inline-flex flex-wrap'
            >
              <button ref={buttonRef} onClick={onClickAccept} className='bg-[#A8DF8E] px-4 py-2 border-2 rounded-md font-bold hover:border-green-400 '>Yes</button>
              <button onClick={onClickRejected} className='bg-[#E76161] px-4 py-2 border-2 rounded-md font-bold hover:border-red-400'>{LIST_REJECTED[rejected] ? LIST_REJECTED[rejected] : LIST_REJECTED[LIST_REJECTED.length - 1]}</button>
            </div>
          </>
        )
      }
      {
        accept && (
          <div className='w-84 flex flex-col items-center space-y-2'>
            <img src={accpectLogo} />
            <p className='text-lg font-bold text-black'>Ok Yay!!</p>
          </div>
        )
      }
    </div>
  )
}

export default App
