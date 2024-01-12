import React,{useState} from 'react'
import { EmpStatusCard, ManagerStatusCard,AdminCard } from '../../Constants/Constants'
import Cards from '../../Components/Cards/Cards'
import './Main.scss'
import { useSelector } from 'react-redux'
import Table from '../../Components/Table/Table'
import Dough from '../../Components/DoughnutChart/DoughnutChart'
import PieChart from '../../Components/Piechart/Piechart'
import Progress from '../../Components/ProgressChart/Progress'
import Search from '../../Components/Search/Search'

function Main() {
    const user=useSelector((state) => state.auth.user);
    const [app,setApp]=useState([
        {
            Date:'10/08/2023',
            ProjectName:'Abc',
            Status:'Approve',
            Amount:'3000',
        },
        {
            Date:'10/08/2023',
            ProjectName:'Abc',
            Status:'Approve',
            Amount:'3000'
        }
    ]
    )
    const [select,setSelected]=useState('')
    return (
        <div className='mainContainer'>
            <div><h1>
                Good Morning!</h1>
            </div>
            <div className='MainCardContainer'>
            {
                user.role=='Employee'?(EmpStatusCard.map((val,key)=>{
                    return (
                        <Cards value={val} select={select} setSelected={setSelected}/>
                    )
                    })):user.role=='Manager'?(ManagerStatusCard.map((val,key)=>{
                        return (
                            <Cards value={val} select={select} setSelected={setSelected}/>
                        )
                        })):AdminCard.map((val,key)=>{
                            return (
                                <Cards value={val} select={select} setSelected={setSelected}/>
                            )
                            })
            }
        </div>
        {/* <div className='Chart-TableContainer'>
            {select?<div className='SearchTable'>
                        <div className='SearchMain'>
                            <Search/>
                        </div>
                        <div className='TableMain'>
                            <Table Data={app}/>
                        </div>
                    </div>:<div><PieChart/><Dough/><Progress/></div>}
        </div> */}
        </div>
    )
}

export default Main