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
                // text:{
                //     fontWeight:'800',
                //     fontSize:'40px', 
                // },
                textSize:'22px',
                fontWeight:'600',
                pathColor: `#099c09`,
                textColor: '#0c0d0c',
                
                trailColor: '#abdeab',
                backgroundColor: '#3e98c7',
              })}
    />
  )
}
