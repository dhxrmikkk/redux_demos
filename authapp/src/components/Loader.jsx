import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loader = ({ visible, height, width, color, secondaryColor, ariaLabel, wrapperStyle, wrapperClass, className }) => {

    return (
        <>
            <div className={className}>
                <Oval
                    visible={visible}
                    height={height}
                    width={width}
                    color={color}
                    secondaryColor={secondaryColor}
                    ariaLabel={ariaLabel}
                    wrapperStyle={wrapperStyle}
                    wrapperClass={wrapperClass}
                />
            </div>
        </>
    )
}

export default Loader