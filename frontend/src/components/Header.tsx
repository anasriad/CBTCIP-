import { useSelector } from 'react-redux'
import Logo from '../assets/logo.png'
import { getCurrentUser } from '../states/authSlice/auth'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const CurrentUser = useSelector(getCurrentUser)
  const Navigate = useNavigate()
  return <>
    <header>
      <div className='pt-2 pl-3 pb-2 bg-black flex justify-between'>
        <div onClick={()=>Navigate('/landing')} className=' hover:cursor-pointer'>
          <img src={Logo} />
        </div>
        <div className=' flex gap-7 pr-9'>

          {
            CurrentUser && <>
              <button className=' underline text-white hover:no-underline hover:duration-300'>{`${CurrentUser.FirstName} ${CurrentUser.LastName}`}</button>
            </>
          }
          {
            !CurrentUser && <>
              <button className=' underline text-white hover:no-underline hover:duration-300'>About Us</button>
              <button className=' underline text-white hover:no-underline hover:duration-300'>Contact Us</button>
            </>
          }

        </div>
      </div>
    </header>
  </>
}