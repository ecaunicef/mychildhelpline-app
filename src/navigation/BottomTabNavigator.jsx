import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View, Text } from 'react-native'
import * as React from 'react'
import HomeSvg from '../../assets/svgs/Home'
import InformationSvg from '../../assets/svgs/Information'
import LinearGradient from 'react-native-linear-gradient'
import { HelpingHand, Home } from '../screens'
import HelpingHandSVG from '../../assets/svgs/HelpingHand'
import { moderateScale } from 'react-native-size-matters'
import InformationKiosk from '../screens/InformationKiosk/InformationKiosk'
import localization from '../utils/localization'

const styles = StyleSheet.create({
    tabicon: {
        marginBottom: 3,
    },
})

const BottomTab = createBottomTabNavigator()

//bottom navigation in app
export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="MySpace"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: 'transparent',
                    borderTopLeftRadius: moderateScale(30),
                    borderTopRightRadius: moderateScale(30),
                    paddingTop: 26,
                    height: 70,
                    elevation: 0,
                    display: route.name === 'HelpingHand' ? 'none' : 'flex',
                },
                tabBarBackground: () => (
                    <View style={{ flex: 1 }}>
                        <LinearGradient
                            colors={['#56CCF2', '#1B4987']}
                            start={{ x: -0.4, y: -0.4 }}
                            end={{ x: 0.8, y: 0.8 }}
                            style={{
                                height: '100%',
                                borderTopLeftRadius: moderateScale(30),
                                borderTopRightRadius: moderateScale(30),
                            }}
                        />
                    </View>
                ),
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'red',
            }}
        >
            <BottomTab.Screen
                name={'MySpace'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <View
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: moderateScale(50),
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingBottom: 13,
                                }}
                            >
                                <HomeSvg
                                    width={moderateScale(22)}
                                    style={styles.tabicon}
                                />
                                <Text
                                    style={{
                                        fontSize: moderateScale(10),
                                        fontWeight: '400',
                                        color: '#fff',
                                    }}
                                >
                                    {localization['myspace']}
                                </Text>
                                <View
                                    style={{
                                        position: 'absolute',
                                        height: 2,
                                        width: '100%',
                                        borderRadius: 27,
                                        backgroundColor: '#fff',
                                        bottom: 1,
                                    }}
                                ></View>
                            </View>
                        ) : (
                            <View
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: moderateScale(50),
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingBottom: 13,
                                }}
                            >
                                <HomeSvg
                                    width={moderateScale(22)}
                                    style={styles.tabicon}
                                />
                                <Text
                                    style={{
                                        fontSize: moderateScale(10),
                                        fontWeight: '400',
                                        color: '#fff',
                                    }}
                                >
                                    {localization['myspace']}
                                </Text>
                            </View>
                        ),
                    tabBarShowLabel: false,
                }}
            />
            <BottomTab.Screen
                name={'InformationKiosk'}
                component={InformationKiosk}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <View
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: moderateScale(85),
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingBottom: 13,
                                }}
                            >
                                <InformationSvg
                                    width={moderateScale(18)}
                                    style={styles.tabicon}
                                />
                                <Text
                                    style={{
                                        fontSize: moderateScale(10),
                                        fontWeight: '400',
                                        color: '#fff',
                                    }}
                                >
                                    {localization['informationkiosk']}
                                </Text>
                                <View
                                    style={{
                                        position: 'absolute',
                                        height: 2,
                                        width: '100%',
                                        borderRadius: 27,
                                        backgroundColor: '#fff',
                                        bottom: 1,
                                    }}
                                ></View>
                            </View>
                        ) : (
                            <View
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: moderateScale(85),
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingBottom: 13,
                                }}
                            >
                                <InformationSvg
                                    width={moderateScale(18)}
                                    style={styles.tabicon}
                                />
                                <Text
                                    style={{
                                        fontSize: moderateScale(10),
                                        fontWeight: '400',
                                        color: '#fff',
                                    }}
                                >
                                    {localization['informationkiosk']}
                                </Text>
                            </View>
                        ),
                    tabBarShowLabel: false,
                }}
            />
            <BottomTab.Screen
                name={'HelpingHand'}
                component={HelpingHand}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <View
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: moderateScale(70),
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingBottom: 13,
                                }}
                            >
                                <HelpingHandSVG style={styles.tabicon} />
                                <Text
                                    style={{
                                        fontSize: moderateScale(10),
                                        fontWeight: '400',
                                        color: '#fff',
                                    }}
                                >
                                    {localization['helpinghand']}
                                </Text>
                                <View
                                    style={{
                                        position: 'absolute',
                                        height: 2,
                                        width: '100%',
                                        borderRadius: 27,
                                        backgroundColor: '#fff',
                                        bottom: 1,
                                    }}
                                ></View>
                            </View>
                        ) : (
                            <View
                                style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: moderateScale(70),
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingBottom: 13,
                                }}
                            >
                                <HelpingHandSVG
                                    width={moderateScale(22)}
                                    style={styles.tabicon}
                                />
                                <Text
                                    style={{
                                        fontSize: moderateScale(10),
                                        fontWeight: '400',
                                        color: '#fff',
                                    }}
                                >
                                    {localization['helpinghand']}
                                </Text>
                            </View>
                        ),
                    tabBarShowLabel: false,
                }}
            />
        </BottomTab.Navigator>
    )
}
