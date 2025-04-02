import React from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import style from '../../components/styles'
import NotificationSVG from '../../../assets/svgs/Notification'
import Humburger from '../../../assets/svgs/Humburger'
import CloudBG2 from '../../../assets/svgs/CloudBg2'
import CustomText from '../../components/basedComponents/customText'
import AccessibilitySVG from '../../../assets/svgs/AccessibilitySVG'
import HomeCardBG from '../../../assets/svgs/HomeCardBG'
import MyRightsSVG from '../../../assets/svgs/MyRights'
import TheParentingHubSVG from '../../../assets/svgs/TheParentingHub'
import GovernmentServicesSVG from '../../../assets/svgs/GovernmentServices'
import ResourcesSVG from '../../../assets/svgs/Resources'
import MyChildHelplineSVG from '../../../assets/svgs/MyChildHelpline'
import EasternCaribbeanArea from '../../../assets/svgs/EasternCaribbeanArea'
import localization from '../../utils/localization'

const data = [
    {
        id: 1,
        title: 'myrights',
        subtitle: 'ourrights',
        icon: <MyRightsSVG width={moderateScale(50)} />,
        backgroundColor: '#FF669A',
        fillColor: '#DA1D5E',
        link: 'MyRights',
    },
    {
        id: 2,
        title: 'parentinghub',
        subtitle: 'parentingtitle',
        icon: <TheParentingHubSVG width={moderateScale(50)} />,
        backgroundColor: '#FF6247',
        fillColor: '#E23B1E',
        link: 'https://www.unicef.org/parenting/',
    },
    {
        id: 3,
        title: 'gosservices',
        subtitle: 'gosservicessubtitle',
        icon: <GovernmentServicesSVG width={moderateScale(50)} />,
        backgroundColor: '#90D039',
        fillColor: '#74B918',
        link: 'https://ab.gov.ag/detail_page.php?page=21',
    },
    {
        id: 4,
        title: 'resources',
        subtitle: 'resourcessubtitle',
        icon: <ResourcesSVG width={moderateScale(50)} />,
        backgroundColor: '#4BDCEE',
        fillColor: '#13BFD6',
        link: 'Resources',
    },
    {
        id: 5,
        title: 'mychildhelpline',
        subtitle: 'mychildhelplinesubtitle',
        icon: <MyChildHelplineSVG width={moderateScale(50)} />,
        backgroundColor: '#F15D5D',
        fillColor: '#E11F1F',
        link: 'https://www.mychildhelpline.org',
    },
    {
        id: 6,
        title: 'UNICEF',
        subtitle: 'UNICEFsubtitle',
        icon: <EasternCaribbeanArea width={moderateScale(50)} />,
        backgroundColor: '#9194FB',
        fillColor: '#5357DC',
        link: 'https://www.unicef.org/easterncaribbean/',
    },
]
const InformationKiosk = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>() // Add the type to navigation

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity
                                style={styles.headerSpace}
                                onPress={() => {
                                    navigation.navigate('Settings')
                                }}
                            >
                                <Humburger />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerCenter}>
                            <CustomText style={styles.name}>
                                {localization['informationkiosk']}
                            </CustomText>
                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity
                                style={styles.headerSpace}
                                onPress={() => {
                                    navigation.navigate('Accessibility')
                                }}
                            >
                                <AccessibilitySVG />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.headerSpace,
                                    styles.paddingLeftCustom,
                                ]}
                                onPress={() => {
                                    navigation.navigate('Notifications')
                                }}
                            >
                                <NotificationSVG />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Header Section */}

                    {/* Main Content */}
                    <View style={styles.profileContainer}>
                        <CustomText style={styles.greeting}>
                            {localization['yourdestination']}
                        </CustomText>
                    </View>
                    <CloudBG2 style={styles.dayImage} />
                </View>
                <View style={style.cardBox}>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                style.card,
                                { backgroundColor: item.backgroundColor },
                            ]}
                            onPress={() => {
                                if (item.link.startsWith('http')) {
                                    navigation.navigate('WebView', {
                                        url: item.link,
                                        title: localization[item.title],
                                    })
                                } else {
                                    navigation.navigate(item.link)
                                }
                            }}
                        >
                            <View style={[style.textSectionBG]}>
                                <HomeCardBG
                                    fillColor={item.fillColor}
                                    backgroundColor={item.backgroundColor}
                                ></HomeCardBG>
                            </View>
                            <View
                                style={[
                                    style.textSection,
                                    {
                                        borderBottomRightRadius: 20,
                                        minHeight: moderateScale(120),
                                    },
                                ]}
                            >
                                <CustomText style={style.title}>
                                    {localization[item.title]}
                                </CustomText>
                                <CustomText style={style.subtitle}>
                                    {localization[item.subtitle]}
                                </CustomText>
                            </View>
                            <View style={style.iconSection}>{item.icon}</View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default InformationKiosk

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff8bb75',
    },
    headerSpace: {
        padding: 5,
    },
    paddingLeftCustom: {
        paddingLeft: moderateScale(10),
    },
    dayImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(10),
        paddingHorizontal: moderateScale(10),
    },
    headerLeft: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    headerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        maxWidth: '80%',
    },
    headerRight: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        paddingRight: moderateScale(10),
        paddingLeft: moderateScale(10),
    },
    greeting: {
        color: '#FFF',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
    },
    name: {
        color: '#FFF',
        fontSize: moderateScale(20),
        lineHeight: moderateScale(20),
        textAlign: 'center',
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
    },
    // ============================================= InformationKiosk Css
})
