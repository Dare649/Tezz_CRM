import {BsArrowRight} from 'react-icons/bs';

const Workspace = () => {
  return (
    <div className='bg-slate-100 mb-16 h-full'>
      <div className='lg:p-9 p-2'>
        <h1 className='text-xl font-bold'>Your Workspace</h1>
        <h3 className='text-gray-500 font-medium text-md mt-2'>Welcome, xxx</h3>
        <p className='mt-6 font-bold mb-3'>Overview</p>
          <div className='lg:flex lg:gap-20 lg:flex-row md:flex md:flex-col mb-5'>

            <div className='lg:w-[45%] lg:h-44  bg-white mb-5'>
              <div className='bg-amber-500 w-full h-5 '></div>
              <div className='bg-amber-200 w-full h-8 '>
                <h1 className=' ml-3 font-bold'>Today's Agenda</h1>
              </div>
              <div className='w-full h-full md:w-[100%] md:h-[45%] py-5'>
                <p className='lg:mx-10 mx-5 lg:mt-7 '>You don't have any event schedule for today. <span className='text-amber-500 font-bold'>Add</span></p>
              </div>
            </div>

            <div className='lg:w-[45%] lg:h-64 bg-white'>
              <div className='bg-amber-500 w-full h-5'></div>
              <div className='bg-amber-200 w-full h-10 flex items-center justify-between'>
                <h1 className='lg:ml-2 font-bold'>Activity Report</h1>
                <button>
                  <span className='flex gap-2 p-2'>
                    <p className='text-amber-500 font-semibold'>View full activity report</p>
                    <p className='text-amber-500 font-semibold mt-1.5'><BsArrowRight/></p>
                  </span>
                </button>
              </div>

              <div className='mx-2 w-full py-5'>
                <div className='flex gap-2 mt-3 '>
                <div className='w-56 h-[2px]  mt-3 bg-gray-500'></div>
                <p className='pr-2'>Tuesday (18th sept, 2019)</p>
                </div>
                <p>You added a new client</p>
                <p className='text-amber-500 font-bold ml-8'>Odusote Mayokun</p>
                <div className='bg-amber-100 border-l-2 border-amber-500 w-36 ml-8'>
                  <p className='text-gray-500 m-1'>Status: Pending</p>
                </div>
              </div>
            </div>
          </div>
            <div className='lg:w-[45%] lg:h-64 bg-white pb-7'>
              <div className='bg-amber-500 w-full h-5'></div>
              <div className='bg-amber-200 w-full h-10 flex item-center justify-between'>
                <h1 className='mt-2 ml-3 font-bold lg:'>Task that are due</h1>
                <button>
                  <span className='flex mr-2'>
                    <p className='text-amber-500 font-semibold '>Create Task</p>
                    <p className='text-amber-500 font-semibold mt-1.5'><BsArrowRight/></p>
                  </span>
                </button>
              </div>
              <div className='bg-amber-100 mt-5 mx-4 p-5 rounded-sm'>
                <p className='font-bold'>Follow up with 
                  <span className='text-amber-500 font-bold ml-1'>Odusote</span>
                </p>
                <div className='flex gap-4'>
                  <p>Due on: 1/21/2021</p>
                  <p>Created on: 1/15/2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Workspace
