import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CloseIcon(props: any) {
    return (
        <Svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.524 16.269l-6.36-6.37-6.36 6.37-1.42-1.42 6.37-6.36-6.37-6.36 1.42-1.42 6.36 6.37 6.36-6.36 1.41 1.41-6.36 6.36 6.36 6.36-1.41 1.42z"
                fill="#222"
            />
        </Svg>
    )
}

export default CloseIcon
