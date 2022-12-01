import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
  return(
    <SafeAreaProvider>
      <View style={{flex:1, backgroundColor:'#ddd'}}>
        <DrawerContentScrollView 
          {...props}
          contentContainerStyle={{backgroundColor:'#aa0000', paddingTop:0}}
        >
          <ImageBackground
            source={require('../../assets/images/menu_background_1.jpg')}
            style={{padding: 40}}>
            <Image
              source={require('../../assets/images/Avatar.png')}
              style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, backgroundColor:'#ddd'}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                marginBottom: 5,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: 2, height: 2},
                textShadowRadius: 5
              }}>
              Welcome to the Weather App
            </Text>
          </ImageBackground>
          <View style={{flex:1, backgroundColor:'#ddd', paddingTop:10}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#333', backgroundColor:'#ddd'}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="share-social" size={22} />
              <Text style={{fontSize: 16,marginLeft: 5,}}>Share</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default CustomDrawer;