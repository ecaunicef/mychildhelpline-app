import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { setLanguage, showLoading } from '../../store/actions/commonActions'
import localization from '../../utils/localization'
import AsyncStorageService from '../../utils/AsyncStorage'

const LanguageSwitcher: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const initializeLanguage = async () => {
            try {
                dispatch(showLoading())

                const storedLanguage = (await AsyncStorageService.getItem(
                    'language'
                )) as string

                const languageToSet = storedLanguage || 'en'

                dispatch(setLanguage(languageToSet))

                localization.setLanguage(languageToSet)

                dispatch(showLoading())
            } catch (error) {
                dispatch(showLoading())
            }
        }

        initializeLanguage()
    }, [dispatch])

    const handleLanguageChange = async (newLanguage: string) => {
        try {
            dispatch(setLanguage(newLanguage))

            localization.setLanguage(newLanguage)

            await AsyncStorageService.setItem('language', newLanguage)
        } catch (error) {
            console.error('Error saving language to AsyncStorage:', error)
        }
    }

    return (
        <View>
            <Text>{localization.callus}</Text>
            <Text>{localization.mymood}</Text>
            {['en', 'sp', 'du', 'fr'].map((lang) => (
                <Button
                    key={lang}
                    title={lang.toUpperCase()}
                    onPress={() => handleLanguageChange(lang)}
                />
            ))}
        </View>
    )
}

export default LanguageSwitcher
