import React, { createContext, useCallback, useContext, useState } from 'react'
import { Platform, StatusBar, StatusBarStyle } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export const DEFAULT_BAND_COLOR = '#FFFFFF'

const StatusBarBandContext = createContext<{
    color: string
    setColor: (c: string) => void
    resetColor: () => void
}>({ color: DEFAULT_BAND_COLOR, setColor: () => {}, resetColor: () => {} })

export const StatusBarBandProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [color, setColor] = useState(DEFAULT_BAND_COLOR)
    const resetColor = useCallback(() => setColor(DEFAULT_BAND_COLOR), [])

    return (
        <StatusBarBandContext.Provider value={{ color, setColor, resetColor }}>
            {children}
        </StatusBarBandContext.Provider>
    )
}

export const useStatusBarBandColor = () => useContext(StatusBarBandContext).color

/**
 * Replacement for `<StatusBar backgroundColor>`, which is a silent no-op under
 * edge-to-edge rendering (`edgeToEdgeEnabled=true`): paints the root inset band
 * on Android and sets the icon style. The colour applies while the screen is
 * focused and reverts to the default on blur.
 *
 * On iOS only `<StatusBar barStyle>` is rendered — screens keep their own
 * top spacers there.
 */
const ScreenStatusBar = ({
    color,
    barStyle,
}: {
    color: string
    barStyle: StatusBarStyle
}) => {
    const { setColor, resetColor } = useContext(StatusBarBandContext)

    useFocusEffect(
        useCallback(() => {
            if (Platform.OS === 'android') {
                setColor(color)
                return resetColor
            }
        }, [color, setColor, resetColor])
    )

    return <StatusBar barStyle={barStyle} />
}

export default ScreenStatusBar
