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

const Arcade = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <Layout ScreenName={localization['mychillspot']} BackButton={true}>
            <ScrollView bounces={false}>
                <View style={styles.cardContainer}>
                    <CommentTopSectionBoth
                        commonCommentTitle={localization['welcomeArcade']}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Tictacoptions')
                        }}
                    >
                        <Image
                            source={require('../../../assets/image/tic.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['tictactoe']}
                        </CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Puzzle')
                        }}
                    >
                        <Image
                            source={require('../../../assets/image/Puzzle.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['puzzle']}
                        </CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Bouncify')
                        }}
                    >
                        <Image
                            source={require('../../../assets/image/bounce.png')}
                            style={styles.icon}
                        />
                        <CustomText style={styles.buttonText}>
                            {localization['bounce']}
                        </CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Arcade

const styles = StyleSheet.create({
    customMarginBottom: {
        marginBottom: 10,
    },
    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgBefore: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    bgImage: {},
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: 'bold',
    },
    modalHeaderTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
    },
    headerClose: {
        top: 0,
        right: 15,
        opacity: 1,
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        borderRadius: 50,
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.25)',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        borderRadius: 8,
        padding: 20,
        elevation: 5,
        position: 'relative',
        overflow: 'hidden',
    },
    label: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 8,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 140,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: '#FFD200',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: 'auto',
    },
    saveButtonText: {
        color: '#000',
        fontWeight: 'regular',
        fontSize: moderateScale(16),
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
        marginBottom: 30,
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
        flexWrap: 'wrap',
        width: '80%',
        margin: 'auto',
    },
})
