import React from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import CustomText from '../../components/basedComponents/customText'
import Layout from '../../components/common/Layout/Layout'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import localization from '../../utils/localization'

interface IPolices {
    id: number
    name: string
    link: string
}

const PoliciesList: IPolices[] = [
    {
        id: 1,
        name: 'privacypolicy',
        link: 'https://www.mychildhelpline.org/privacy_policy.html',
    },
    {
        id: 2,
        name: 'datasharingpolicy',
        link: 'https://www.mychildhelpline.org/privacy_policy.html',
    },
    {
        id: 3,
        name: 'datacollectionpolicy',
        link: 'https://www.mychildhelpline.org/privacy_policy.html',
    },
]

const Policies = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const handlePressPolicy = (item: IPolices) => {
        if (item) {
            navigation.navigate('WebView', {
                url: item.link,
                title: localization?.[item.name],
            })
        }
    }

    return (
        <View style={styles.container}>
            <Layout ScreenName="Policies" BackButton={true}>
                <ScrollView contentContainerStyle={styles.content}>
                    {PoliciesList?.map((items) => {
                        return (
                            <TouchableOpacity
                                style={styles.card}
                                key={items.id}
                                onPress={() => handlePressPolicy(items)}
                            >
                                <CustomText style={styles.cardText}>
                                    {localization[items.name]}
                                </CustomText>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </Layout>
        </View>
    )
}

export default Policies

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
    },
    cardText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(24),
        fontWeight: '500',
        color: '#333',
    },
})
