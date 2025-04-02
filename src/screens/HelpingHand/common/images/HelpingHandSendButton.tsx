import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

function HelpingHandSendButton(props: any) {
    return (
        <Svg
            width={41}
            height={42}
            viewBox="0 0 41 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_d_763_4534)">
                <Path
                    d="M27.339 11.162l-15.291 5.441c-1.288 1.013-.537 1.884 0 2.192l6.695 2.808c.684 1.662 2.218 5.332 2.879 6.71.882 1.157 1.745.482 2.066 0 1.608-4.478 4.946-13.886 5.442-15.705.385-1.708-1.034-1.676-1.791-1.446z"
                    fill="#1B4987"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}

export default HelpingHandSendButton
