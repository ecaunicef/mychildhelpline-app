import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../../utils/colors'
import { StyleSheet, Text, View } from 'react-native'

const Score = ({ firstPlayerScore, secondPlayerScore }) => (
    <View style={styles.scoreWrapper}>
        <View style={styles.scoreInfoWrapper}>
            <Icon name="close" size={30} color={colors.primaryDarker} />
            <Text style={styles.scoreText}>{firstPlayerScore || '-'}</Text>
        </View>
        <View style={styles.scoreInfoWrapper}>
            <Icon
                name="circle-outline"
                size={26}
                color={colors.primaryDarker}
            />
            <Text style={styles.scoreText}>{secondPlayerScore || '-'}</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    scoreWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        fontSize: 26,
        color: colors.darkGrey,
    },
    scoreInfoWrapper: {
        // flex-basis: 40%;
        width: '40%',
        borderRadius: 6,
        background: colors.white,
        borderBottomWidth: 4,
        borderBottomColor: colors.primaryDarker,
        marginVertical: 0,
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default Score
