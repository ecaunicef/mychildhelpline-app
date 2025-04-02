import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Rect, Path } from "react-native-svg"

const CardLayout = (props:any) => {
    const { children, style } = props;
  return (
    <View style={[styles.svg, style]}>
    <Svg
      width={380}
      height={140}
      viewBox="0 0 380 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={380} height={140} rx={5} fill="#FEB242" />
      <Path
        d="M252 103L189 1H1v138.5c44.167 0 146.6-.5 209-.5 35 0 65-.5 42-36z"
        fill="#E18F15"
      />
    </Svg>
    <View style={styles.childrenContainer}>{children}</View>
    </View>
  )
}

export default CardLayout

const styles = StyleSheet.create({
    svg: {
        position: 'relative',
        width: 380,
        height: 140,
      },
    childrenContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
})