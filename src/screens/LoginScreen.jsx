import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useThemeStore from '../store/themeStore'

export default function LoginScreen({ navigation }) {
  const theme = useThemeStore((state) => state.theme)

  const handleSocialLogin = (provider) => {
    // Implement social login logic
  }

  return (
    <View className={`flex-1 items-center justify-center bg-${theme}-background`}>
      <Text className={`text-3xl font-bold mb-8 text-${theme}-text`}>
        Welcome to ListShare
      </Text>
      
      <TouchableOpacity
        onPress={() => handleSocialLogin('google')}
        className={`bg-${theme}-primary px-6 py-3 rounded-lg mb-4`}>
        <Text className="text-white font-semibold">Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSocialLogin('github')}
        className={`bg-${theme}-primary px-6 py-3 rounded-lg`}>
        <Text className="text-white font-semibold">Continue with GitHub</Text>
      </TouchableOpacity>
    </View>
  )
}
