import { RiDraftLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { TfiReceipt } from "react-icons/tfi";
import { FaUserCheck } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { FaFileCircleXmark } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";

export const ManagerSidebarData=[
    {
        title:"Home",
        icon:<AiOutlineHome />,
        link:"",
    },
    {
        title:"Team",
        icon:<RiTeamLine />,
        link:"team"
    },
    {
        title:"Expense claim",
        icon:<TfiReceipt />,
        link:"expenseClaim",
    },
    {
        title:"Drafts",
        icon:<RiDraftLine />,
        link:"draft",
    },
];
export const EmployeeSidebarData=[
    {
        title:"Home",
        icon:<AiOutlineHome />,
        link:"",
    },
    {
        title:"Expense claim",
        icon:<TfiReceipt />,
        link:"expenseClaim",
    },
    {
        title:"Drafts",
        icon:<RiDraftLine />,
        link:"draft",
    },
];

export const EmpStatusCard=[
    {
        title:"Approved",
        icon:<FaUserCheck />,
        count:'23'
    },
    {
        title:"Pending",
        icon:<MdPending/>,
        count:'110'
    },
    {
        title:"Processing",
        icon:<FiLoader />,
        count:'91'
    },
    {
        title:"Manager Rejected",
        icon:<FaFileCircleXmark />,
        count:'87'
    },
    {
        title:"Admin Rejected",
        icon:<FaFileCircleXmark />,
        count:'1'
    }
]
export const ManagerStatusCard=[
    {
        title:"Approved",
        icon:<FaUserCheck />,
        count:'23'
    },
    {
        title:"Pending",
        icon:<MdPending/>,
        count:'87'
    },
    {
        title:"Rejected",
        icon:<FaFileCircleXmark/>,
        count:'110'
    }
]
export const AdminCard=[
    {
        title:"Employee",
        icon:<IoMdPerson />
    },
    {
        title:"Manager",
        icon:<TbUsersGroup />
    }
]