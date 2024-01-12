import React,{useState,useEffect} from 'react'
import './Cards.scss'

function Cards({value,select,setSelected}) {
    return (
        <div className={value.title=='Approved'?'CardContainer approved':
        value.title=='Pending'?'CardContainer pending':
        value.title=='Processing'?'CardContainer processing':
        value.title=='Admin Rejected'?'CardContainer AdminRejected':
        'CardContainer ManagerRejected'} onClick={()=>setSelected(value)}>
            <div className='cardDetails'>
                <div className='StatusCount'>{value.count}</div>
                <div className='CardIcon'>{value.icon}</div>
            </div>
            <div className='StatusTitle'>
                {value.title}
            </div>
        </div>
    )
}

export default Cards