import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const style = StyleSheet.create({
    // ============================================= Cards Css
    cardBox: {
        flex: 1,
        width: '100%',
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        paddingTop: moderateScale(20),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(70),
        position: 'relative',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: moderateScale(20),
    },
    textSection: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(10),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(20),
    },
    textSectionBG: {
        position: 'absolute',
        bottom: 35,
        left: '40%',
        transform: [{ translateX: '-50%' }],
    },
    cardSvg: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        height: '100%',
        margin: 'auto',
    },
    title: {
        fontSize: moderateScale(14),
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: moderateScale(18),
        marginBottom: 5,
        letterSpacing: 0,
        fontFamily: 'OpenSans-Regular',
    },
    subtitle: {
        fontSize: moderateScale(10),
        lineHeight: moderateScale(12.5),
        fontWeight: 'normal',
        color: '#fff',
        marginBottom: 0,
        letterSpacing: 0,
        fontFamily: 'OpenSans-Regular',
    },
    iconSection: {
        textAlign: 'center',
        alignItems: 'center',
        paddingLeft: moderateScale(0),
        width: moderateScale(120),
    },
    // ============================================= Cards Css
})

export default style
