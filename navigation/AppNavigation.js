import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArtistasScreen from '../screens/ArtistasScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Category'>
            <Stack.Screen name='Category' component={CategoryScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Artistas' component={ArtistasScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
