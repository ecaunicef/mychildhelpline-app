import React from 'react'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import { deviceHeight, deviceWidth } from '../../utils/constants'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../../components/basedComponents/customText'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const LeafletMap = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const { latitude, longitude } = route.params

    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Leaflet Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <style>
          #map {
            width: 100vw;
            height: 100vh;
          }
        </style>
      </head>
      <body style="margin: 0">
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script>
          var map = L.map('map').setView([${latitude}, ${longitude}], 15);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);
          L.marker([${latitude}, ${longitude}]).addTo(map)
            .openPopup();
        </script>
      </body>
    </html>
  `

    return (
        <Modal animationType="fade" transparent={true} visible={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <LinearGradient
                        colors={['#fefffa', '#fff3bd', '#fefffa']}
                        start={{ x: 0, y: 0 }} // Top
                        end={{ x: 0, y: 1 }} // Bottom
                    >
                        <View style={styles.modalHeader}>
                            <CustomText style={styles.modalHeaderTitle}>
                                Location
                            </CustomText>
                            <TouchableOpacity
                                style={styles.headerClose}
                                onPress={() => {
                                    navigation.navigate('Resources')
                                }}
                            >
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.modalBody]}>
                            <WebView
                                originWhitelist={['*']}
                                source={{ html: htmlContent }}
                                style={styles.webview}
                            />
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: deviceWidth,
        height: deviceHeight,
    },
    modalView: {
        backgroundColor: '#FFF4CF',
        borderRadius: moderateScale(20),
        alignItems: 'center',
        overflow: 'hidden',
        width: deviceWidth - 30,
        height: deviceHeight * 0.5,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        paddingRight: 40,
        padding: moderateScale(10),
    },
    modalHeaderTitle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: '600',
        marginBottom: 0,
        width: '100%',
        textAlign: 'center',
    },
    headerClose: {
        position: 'absolute',
        top: 15,
        right: 15,
        opacity: 1,
        zIndex: 999,
    },
    modalBody: {},
    webview: {
        width: deviceWidth - 30,
        height: deviceHeight * 0.5,
        overflow: 'hidden',
    },
})

export default LeafletMap
