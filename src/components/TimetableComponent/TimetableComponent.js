import React from 'react'
import './TimetableStyles.scss'
import { v4 as uuidv4 } from 'uuid';

import timetableData from '../../assets/data/timetableData'
import TimetableItem from '../TimetableItemComponent/TimetableItemComponent'

class TimetableComponent extends React.Component{
    constructor(){
        super()

        this.state = {
            timetable_data: timetableData
        }
    }

    render(){
        const {timetable_data} = this.state;
        return(
            <div className='grid-element'>
                {
                    timetable_data.map(({...otherTimetableProps})=>(
                        <div className='table-element' style={{
                            gridArea: `${otherTimetableProps.position.rowStart} / ${otherTimetableProps.position.columnStart} / ${otherTimetableProps.position.rowEnd} / ${otherTimetableProps.position.columnEnd}`
                        }}>
                        <TimetableItem key={uuidv4()} {...otherTimetableProps}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TimetableComponent;