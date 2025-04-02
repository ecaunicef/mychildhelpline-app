import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native'

import CustomText from '../../components/basedComponents/customText'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Layout from '../../components/common/Layout/Layout'
import CommentTopSectionBoth from '../../../assets/svgs/CommentTopSectionBoth'
import { deviceWidth } from '../../utils/constants'
import localization from '../../utils/localization'

const MyChillSpot = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const handleVideosOpen = (videoUrl: string) => {
        navigation.navigate('VideosPlayer', { videoUrl })
    }

    return (
        <Layout ScreenName={localization['mychillspot']} BackButton={true}>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <CommentTopSectionBoth
                        commonCommentTitle={localization['welcomeMessage']}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleVideosOpen('breath')}
                    >
                        <Image
                            source={require('../../../assets/image/breath.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['breath']}
                        </CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleVideosOpen('count')}
                    >
                        <Image
                            source={require('../../../assets/image/count.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['counting']}
                        </CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default MyChillSpot

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth - 30,
        margin: 'auto',
        marginTop: 0,
        marginBottom: 30,
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto',
    },
})
