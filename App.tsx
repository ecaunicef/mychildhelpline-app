import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/store/store'
import Toast from 'react-native-toast-message'
import Loader from './src/components/common/Loader'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Loader />
      </Provider>
      <Toast />
    </>
  )
}

export default App

const styles = StyleSheet.create({})
