import ParticlesBg from "particles-bg"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
export default function Landing() {
  const Navigate = useNavigate()
  return <>
    <div>
      <ParticlesBg type="square" bg={true} />
      <div>
        <Header />
        <div className=" flex items-center justify-center h-screen flex-col gap-8">
          <div>
            <h1 className=" text-2xl font-extrabold">Your Ultimate Event Planner</h1>
          </div>
          <div className=" flex gap-10">
            <button className=" bg-black pl-5 pr-5 pt-2 pb-2 rounded-xl text-white hover:bg-white hover:border-2 hover:text-black hover:duration-300" onClick={()=>Navigate('/login')}>Login</button>
            <button className=" bg-green-500 pl-5 pr-5 pt-2 pb-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300">Signup</button>
          </div>
        </div>
      </div>
    </div>

  </>
}