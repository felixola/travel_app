import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements'; 
import CategoryButtons from '@/components/CategoryButtons';

const Page = () => {
    const headerHeight = useHeaderHeight();
    const [category, setCategory ] = useState('All');
    const onCatChnaged = ( category: string) => {
        setCategory(category);
    };
  return (
    <>
    <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: "", 
        headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{marginLeft: 20}}>
                <Image source={{
                    uri: "https://loremflickr.com/320/240"
                }} style={{width: 40, height: 40, borderRadius: 10}} />
            </TouchableOpacity>
        ),

        headerRight: () => (
            <TouchableOpacity onPress={() => {}} style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10, 
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4},
                shadowOpacity: 0.1, 
                shadowRadius: 3
                }}>
                <Ionicons name="notifications" size={20} color={Colors.black}/>
            </TouchableOpacity>)
       }}/>

       <View style={[styles.container, {paddingTop: headerHeight}]}>

            <Text style={styles.headingTxt}>Explore the beautiful world!</Text>

            <View style={styles.searchSectionWrapper}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={18} style={{marginRight: 5}} color={Colors.black}/>
                    <TextInput placeholder="Search..." />
                </View>

                <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                    <Ionicons name="options" size={28} color={Colors.white}/>
                </TouchableOpacity>
            </View>

            
            <CategoryButtons onCategoryChanged={onCatChnaged}/>

       </View>

    </>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20, 
        backgroundColor: Colors.bgColor,
    },
    headingTxt: {
        fontSize: 28, 
        fontWeight: '800', 
        color: Colors.black,
        marginTop: 10,
    },
    searchSectionWrapper: {
         flexDirection: 'row',
         marginVertical: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
    },
    filterBtn: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        borderRadius: 10, 
        marginLeft: 10, 
    }
})