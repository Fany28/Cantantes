import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ArtistasOverviewScreen from './screens/ArtistasOverviewScreen';
import ArtistaDetailScree from './screens/ArtistaDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: { backgroundColor: '#213E5F'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#DF351B'}
          }}
        >
          <Stack.Screen 
            name="Generos Musicales" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
            name="ArtistasOverview" 
            component={ArtistasOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#C39898'}
            }} 
          />
          <Stack.Screen 
            name="ArtistaDetail" 
            component={ArtistaDetailScree} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
