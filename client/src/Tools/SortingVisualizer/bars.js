/*eslint-disable */
import React from 'react'


function bars(props) {
    return (
        <div className="array-bar-parent">
          <div>

            <div
            className="array-bar"
            style={{
              backgroundColor: props.color,
              height: `${props.value * props.relativeHeight}px`,
            }} />
             <div 
             className="array-bar-values"
             style={{
                 color: props.color
             }}
             >
                 {props.value}
             </div>
            </div>

        </div>
            
                
    )
}



export default bars

/*eslint-disable */