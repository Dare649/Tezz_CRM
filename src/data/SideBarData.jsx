import {MdOutlineDashboard} from 'react-icons/md';
import {FaUsers, FaTasks} from 'react-icons/fa';
import {GrSchedulePlay} from 'react-icons/gr';
import {BiMoneyWithdraw} from 'react-icons/bi';
import {AiOutlineMessage} from 'react-icons/ai';
import {TbReportAnalytics} from 'react-icons/tb';


export const links = [
    {
        title:'Workspace',
        path: '/workspace',
        icon: <MdOutlineDashboard/>,
        id:1
    },
    {
        title:'Clients',
        path: '/clients',
        icon: <FaUsers/>,
        id:2
    },
    {
        title:'Schedule Appointment',
        path: '/schedule_appointment',
        icon: <GrSchedulePlay/>,
        id:3
    },
    {
        title:'Payment',
        path: '/payment',
        icon: <BiMoneyWithdraw/>,
        id:4
    },
    {
        title:'Task',
        path: '/task',
        icon: <FaTasks/>,
        id:5
    },
    {
        title:'Message',
        path: '/message',
        icon: <AiOutlineMessage/>,
        id:6
    },
    {
        title:'Reports',
        path: '/reports',
        icon: <TbReportAnalytics/>,
        id:7
    },
]