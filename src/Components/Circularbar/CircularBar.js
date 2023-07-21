import React from 'react'
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CircularBar = ({value}) => {
  return (
    <CircularProgressbar 
               value={value} 
               maxValue={100} 
               text={`${value}%`}
               styles={buildStyles({
                strokeLinecap: 'butt',
                textSize:'22px',
                fontWeight:'600',
                pathColor: `#22D6AA`,
                textColor: '#0c0d0c',
                
                trailColor: '#E8FAF5',
                backgroundColor: '#3e98c7',
              })}
    />
  )
}
