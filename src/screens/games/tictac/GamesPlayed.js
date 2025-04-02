import React, { useState, useEffect } from 'react'

import colors from '../../../utils/colors'
import { getGamesPlayed } from '../AsyncStorage'
import { StyleSheet, Text, View } from 'react-native'

const GamesPlayed = ({ hasGameEnded }) => {
    const [numberOfGamesPlayed, setNumberOfGamesPlayed] = useState(0)

    useEffect(() => {
        getGamesPlayed().then((gamesPlayed) =>
            setNumberOfGamesPlayed(gamesPlayed)
        )
    }, [hasGameEnded])

    return (
        <View style={styles.GamesPlayedWrapper}>
            <Text style={styles.GamesPlayedText}>
                GAMES PLAYED: {Number(numberOfGamesPlayed)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    GamesPlayedWrapper: {
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 0,
        paddingHorizontal: 30,
    },
    GamesPlayedText: {
        fontSize: 14,
        color: colors.primaryDarker,
        fontWeight: 'bold',
    },
})
export default GamesPlayed
