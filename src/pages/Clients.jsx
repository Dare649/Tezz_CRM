import { list } from "../data/TableData";
import { Link } from "react-router-dom";
import {CiSearch} from 'react-icons/ci';

const Clients = () => {
  return (
    <div className='bg-slate-100 h-full p-10 '>
      <div className='p-2 mb-3'>
        <h1 className="font-bold text-xl pb-5">Clients</h1>
        <p className="font-bold text-gray-400">Here's the clients list</p>
      </div>

      <div className='bg-white rounded-md '>
        <div className='flex justify-around pt-5 pb-16'>
          <div className="flex items-center bg-gray-300 w-[75%] h-12 p-3  border-2 rounded-md gap-2 border-gray-300">
            <CiSearch 
            className="text-gray-700"
            />
            <input type="search" name="search" id="search" 
              className='w-full font-medium bg-gray-300 py-3 outline-none'
              placeholder='Search by name, email ...'
            />
          </div>
          <button className='p-3 bg-amber-500 text-white rounded-md'>
            Add new clients
          </button>
        </div>

        <div className='px-9 pb-20'>
          <table className='w-full'>
            <thead className='bg-amber-100 border-b-2 border-b-amber-600'>
              <th className='p-4'>Name</th>
              <th className='p-4'>Email</th>
              <th className='p-4'>Phone</th>
              <th className='p-4'>Residential Address</th>
            </thead>
            <tbody>
                {
                  list.map((lists, index) =>(
                      <tr key={index}
                      className="pl-5 hover:border-l-4 hover:border-l-amber-500 hover:bg-amber-50 ">
                        <td className=" px-5 py-3 border-y"><Link to={'clients_profile'}>{lists.name}</Link></td>
                        <td className=" px-5 py-3 border-y"><Link to={'clients_profile'}>{lists.email}</Link></td>
                        <td className=" px-5 py-3 border-y"><Link to={'clients_profile'}>{lists.phone}</Link></td>
                        <td className=" px-5 py-3 border-y"><Link to={'clients_profile'}>{lists.address}</Link></td>
                      </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Clients
