import React,{useState} from 'react'
import Offers from './offrers/Offers'
import List from './offrers/List'
import Don from './offrers/Don'
import Hit from './offrers/Hit'
import Done from './offrers/Done'
import './Navcard.scss'

const Navcard = () => {
    const [datas,setdatas]=useState(true)
    const [list,setList]=useState(false)
    const [don,setDon]=useState(false)
    const [hit,setHit]=useState(false)
    const [done,setDone]=useState(false)
  return (
    <div  style={{display:'flex'}}>
        <div className='card' style={{width:"300px",height:"500px",opacity:"0.4"}}>
      <ul className='ig'>
        <li onClick={()=>{setdatas(true);setList(false);setDone(false);setDon(false);setHit(false)}}>Member Exclusive Offer

        </li>
        <li onClick={()=>{setList(true);setdatas(false);setDone(false);setDon(false);setHit(false)}}>
        Urban Getaways
        </li >
        <li onClick={()=>{setDon(true);setdatas(false);setList(false);setDone(false);setHit(false)}}>
        Suite Surprises
        </li>
        <li onClick={()=>{setHit(true);setdatas(false);setList(false);setDon(false);setDone(false)}}>
        4D Offer
        </li>
        <li onClick={()=>{setDone(true);setdatas(false);setList(false);setDon(false);setHit(false)}}>
        Taj Holidays
        </li>
      </ul> </div>
      <div style={{width:'500px',height:'200px'}}>
        {
            datas?
            <Offers/>:""
        }
        {
            list?
            <List/>:""
        }
         {
            don?
            <Don/>:""
        } {
            hit?
            <Hit/>:""
        } {
            done?
            <Done/>:""
        }
        

      </div>
    </div>
  )
}

export default Navcard
