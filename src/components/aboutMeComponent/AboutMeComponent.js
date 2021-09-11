import React from 'react';
import './AboutMeStyles.scss'

import DATA from '../../assets/data/AboutMeData.js'
import {Cards, CardHeader, Card} from '@material-ui/core'

class AboutMe extends React.Component{
    constructor(){
        super()

        this.state={
            profile_data:DATA
        }
    }

    render(){
        const {profile_data} = this.state
        const {name,imageUrl,desc} = {...profile_data}

        return(
            <div>hi</div>
        )
        
    }
}

export default AboutMe;