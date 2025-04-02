import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

function NotificationSVG(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={23}
            viewBox="0 0 20 23"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_d_680_741)">
                <Path
                    d="M17 9.79c-.5.13-1 .21-1.5.21A5.51 5.51 0 0110 4.5c0-1.47.58-2.8 1.5-3.79A1.93 1.93 0 0010 0C8.9 0 8 .9 8 2v.29C5.03 3.17 3 5.9 3 9v6l-2 2v1h18v-1l-2-2V9.79zM10 21c1.11 0 2-.89 2-2H8a2 2 0 002 2z"
                    fill="#fff"
                />
            </G>
            <Path
                d="M15.5 8C17.43 8 19 6.43 19 4.5S17.43 1 15.5 1 12 2.57 12 4.5 13.57 8 15.5 8z"
                fill={props?.newNotification ? "#FFB800" : "#FFFFFF"}
            />
            <Defs></Defs>
        </Svg>
    )
}

export default NotificationSVG
