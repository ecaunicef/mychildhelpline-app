import React from 'react'
import { Text, TextProps, TextStyle, ViewStyle } from 'react-native'
import { useAppSelector } from '../../store/hooks'

interface CustomTextProps extends TextProps {
    style?: TextStyle | ViewStyle | (TextStyle | ViewStyle)[]
    children: React.ReactNode
}

const CustomText: React.FC<CustomTextProps> = ({
    children,
    style,
    ...props
}) => {
    const accessibility: any = useAppSelector((state) => state.accessibility)

    const defaultFontFamily = accessibility.fontFamily || 'System'

    const enhanceTextStyle = (baseStyle: TextStyle) => ({
        ...baseStyle,
        fontSize: (baseStyle.fontSize || 0) + accessibility.fontSize,
        letterSpacing:
            (baseStyle.letterSpacing || 0) + accessibility.texSpacing,
        lineHeight: (baseStyle.lineHeight || 0) + accessibility.lineHeight,
        fontFamily:
            accessibility.dyslexiaFriendly > 0
                ? accessibility.dyslexiaFriendly == 1
                    ? 'UserwayDyslexiaFont-Regular'
                    : 'UserwayDyslexiaFont-Bold'
                : defaultFontFamily,
    })

    const finalStyle = Array.isArray(style)
        ? style.map((s) => enhanceTextStyle(s as TextStyle))
        : style && 'fontSize' in style
        ? enhanceTextStyle(style as TextStyle)
        : style

    return (
        <Text style={finalStyle} {...props}>
            {children}
        </Text>
    )
}

export default CustomText
