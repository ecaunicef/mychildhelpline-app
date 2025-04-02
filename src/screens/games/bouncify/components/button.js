import React, { useRef } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

const Button = (props) => {
    const buttonContainer = useRef(null)

    const onPressIn = () => {
        buttonContainer.current.transitionTo({
            opacity: 0.7,
            transform: [{ scale: 0.95 }],
        })
    }

    const onPressOut = () => {
        buttonContainer.current.transitionTo({
            opacity: 1,
            transform: [{ scale: 1 }],
        })
    }

    const onPress = () => {
        if (props.onPress) props.onPress()
    }

    return (
        <Animatable.View
            useNativeDriver={true}
            style={[styles.buttonContainer, props.style]}
            ref={buttonContainer}
        >
            <TouchableOpacity
                style={styles.textContainer}
                activeOpacity={1}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                onPress={onPress}
            >
                <Animatable.Text style={[styles.text, props.theme]}>
                    {props.children}
                </Animatable.Text>
            </TouchableOpacity>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#EA225E',
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#59B9F9',
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
    },
    textContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        lineHeight: 37.5,
        color: 'white',
        textShadowOffset: { width: 0, height: 1 },
        textShadowColor: 'black',
        textShadowRadius: 2,
    },
})

export default Button
