import { Link } from "react-router-dom"


const ClientsProfile = () => {
  return (
    <div className='bg-gray-100 h-full p-10'>
        <div>
            <h1 className="font-bold text-xl">Client Profile</h1>
            <p className="font-bold text-gray-500">View Client profile here</p>

            <div className='bg-white rounded-md w-full h-full mt-10 px-10 pt-14 '>
                <div className='bg-slate-100 rounded-md pt-8 pb-16'>
                    <div className='p-5'>
                        <h1 className="font-bold text-lg">Client's Picture</h1>
                        <div className='flex gap-16 mt-8'>
                            <div className="">
                                <img src='images/tour.jpg' alt="profile picture" className='w-20 h-20 border-2 border-amber-500 rounded-full bg-red-700'/>
                            </div>
                            <div className="w-60">
                                <h1 className="font-bold text-lg">Odusote Mayokun</h1>
                                <p className="font-bold text-gray-500">adegoketemitope1909@gmail.com</p>
                                <div className="flex justify-between w-full">
                                    <p className="font-bold text-gray-500">Female</p>
                                    <p className="font-bold text-gray-500">54 years old</p>
                                    <p className="font-bold text-gray-500">Nigerian</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-col gap-24 mt-20">
                    <div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Full Name</p>
                            <p className="font-bold text-md">Odusote Mayokun</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Applicant Fullname 
                            <span className="text-red-500 ml-2">
                                (as shown in passport)
                            </span>
                            </p>
                            <p className="font-bold text-md">Odusote Mayokun Kemi</p>
                        </div>
                        <div className="my-7 flex gap-20">
                            <div>
                                <p className="font-bold text-gray-500">Place of Birth</p>
                                <p className="font-bold text-md">Nigeria</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-500">Date of Birth</p>
                                <p className="font-bold text-md">04/11/2012</p>
                            </div>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Marital Status</p>
                            <p className="font-bold text-md">Married</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Current Occupation</p>
                            <p className="font-bold text-md">Engineer</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Residential Address</p>
                            <p className="font-bold text-md">No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Country of Interest </p>
                            <p className="font-bold text-md">Iceland</p>
                        </div>
                    </div>
                    <div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Email</p>
                            <p className="font-bold text-md">adegoketemitope1909@gmail.com</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Gender</p>
                            <p className="font-bold text-md">Female</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Country of Citizenship</p>
                            <p className="font-bold text-md">Nigeria, Uganda</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Education
                            <span className="text-red-500 ml-2">
                                (Client's highest level of Education)
                            </span>
                            </p>
                            <p className="font-bold text-md">Bachelor's Degree</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Phone Number</p>
                            <p className="font-bold text-md">+234(0)8160730668</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Mailing Address</p>
                            <p className="font-bold text-md">No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria</p>
                        </div>
                        <div className="my-7">
                            <p className="font-bold text-gray-500">Purpose of Traveling</p>
                            <p className="font-bold text-md">Trading</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pb-10">
                    <button className="bg-amber-500 py-2 px-14 rounded-md text-white font-medium">
                        <Link to={'/clients'}>
                            Back
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientsProfile
