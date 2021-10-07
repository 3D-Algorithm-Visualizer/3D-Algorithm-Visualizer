import React from 'react'

export default function ArrayContainer(props) {
    return (
        <div className="iteration-array-parent">
            <div className="array-bar-values-parent">
                <div className="array-bar-before-value">
                    {props.isFirst ? "[" : ","}
                </div>
                <div
                    className="iteration-array-values"
                    style={{
                        color: props.color
                    }}
                >
                    {props.value}
                </div>
                <div className="array-bar-after-value">
                    {props.isLast ? "]" : null}
                </div>
            </div>
        </div>

    )
}
