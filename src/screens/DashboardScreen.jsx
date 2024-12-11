import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import useThemeStore from '../store/themeStore'

export default function DashboardScreen() {
  const theme = useThemeStore((state) => state.theme)
  const [lists, setLists] = React.useState([])

  const renderListItem = ({ item }) => (
    <TouchableOpacity 
      className={`p-4 mb-4 rounded-lg bg-${theme}-primary bg-opacity-10`}>
      <Text className={`text-lg font-semibold text-${theme}-text`}>{item.title}</Text>
      <Text className={`text-sm text-${theme}-text opacity-60`}>
        Shared with {item.sharedWith.length} people
      </Text>
    </TouchableOpacity>
  )

  return (
    <View className={`flex-1 p-4 bg-${theme}-background`}>
      <Text className={`text-2xl font-bold mb-6 text-${theme}-text`}>
        Your Lists
      </Text>
      
      <FlatList
        data={lists}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity 
        className={`absolute bottom-6 right-6 w-14 h-14 rounded-full bg-${theme}-primary items-center justify-center`}>
        <Text className="text-white text-3xl">+</Text>
      </TouchableOpacity>
    </View>
  )
}
