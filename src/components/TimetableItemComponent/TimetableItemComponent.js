import React, {useState} from 'react'
import './TimetableItemStyles.scss'

const TimetableItem = ({lesson,homework,showHW}) => {

    const [showhw,setShowhw] = useState(showHW)

    return(
    <div className='table-item-container' onClick={()=>{setShowhw(!showhw)}}>
        <h2 className="lesson-name">{lesson}</h2>
        <div className={`${showhw?'showhw':''}`}>
        {
            homework.map((item)=>(
                <div key={item.id} className='homework-container'>
                    <span className='homework-component'>{item.info}</span>
                    <span className="due-date">{item.duedate}</span>
                </div>
            ))
        }
        </div>
    </div>
    )
};

export default TimetableItem;