import {IoIosNotificationsOutline} from 'react-icons/io'

const NavBar = () => {
  return (
    <div className="w-screen relative z-50">
      <nav className="fixed w-full z-40 top-0 left-0 h-12 bg-white">
        <div className="flex gap-5 pr-4 items-center justify-end py-2"> 
          <div>
            <IoIosNotificationsOutline
            size={30}
            className='text-bold'
            />
          <div >
            <span className='bg-red-700 text-white w-3 h-3 rounded-full pl-1 pb-1 text-[10px] font-bold absolute top-3 right-[133px]'>2</span>
          </div>
          </div>
          <h1 className='font-bold text-sm'>Kelvin</h1>
          <img src="images/tour.jpg" alt="profile picture" 
          className='w-8 h-8 rounded-full'
          />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
