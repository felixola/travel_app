import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: Colors.bgColor,
            borderTopWidth: 0,
            padding: 0
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: '#999'
    }}>

        {/* Home */}
        <Tabs.Screen name='index' options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="compass" color={color} />,
        }}/>

        {/* Category */}
        <Tabs.Screen name='category' options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="space-dashboard" color={color} />,
        }} />
        {/* Search */}
        <Tabs.Screen name='search' options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <View style={{
                backgroundColor: Colors.primaryColor, 
                paddingHorizontal: 16, 
                paddingVertical: 12, 
                borderRadius: 10,
                height: 50,
                }}>
                <Ionicons size={24} name="search-outline" color={Colors.white} />
            </View> 
          )
        }}/>
        <Tabs.Screen name='bookmarks' options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="bookmark" color={color} />,
        }}/>
        <Tabs.Screen name='profile' options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}/>
    </Tabs>
  )
}

export default Page
