// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboargingscreen from './Screens/Onboargingscreen'
import Onboargingscreen2 from './Screens/Onboargingscreen2'
import Onboargingscreen3 from './Screens/Onboargingscreen3'
import Onboargingscreen4 from './Screens/Onboargingscreen4'
import Splash from './Screens/Splash'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Home from './Screens/Home'
import Offers from './Screens/Offers'
import MainScreen from './BottomTab/MainScreen'
import Search from './BottomTab/Search'
import Tabs from './BottomTab/Tabs';
import Bookmark from './BottomTab/Bookmark';
import Setting from './Components/Setting'
import one from './Detailproduct/one'
import two from './Detailproduct/two'
import three from './Detailproduct/three'
import four from './Detailproduct/four'
import five from './Detailproduct/five'
import six from './Detailproduct/six'
import seven from './Detailproduct/Seven'
import eight from './Detailproduct/eight'
import Pay from './Pay.js/Pay'
import Subtotal from './Pay.js/Subtotal'
import SelectCard from './Pay.js/SelectCard'
import Enterpin from './Pay.js/Enterpin'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Onboargingscreen" component={Onboargingscreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Onboargingscreen2" component={Onboargingscreen2}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Onboargingscreen3" component={Onboargingscreen3}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Onboargingscreen4" component={Onboargingscreen4}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Signup" component={Signup}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Tabs" component={Tabs}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Offers" component={Offers}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Search" component={Search}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Setting" component={Setting}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Pay" component={Pay}
          options={{
            headerShown: false,
          }} />


        <Stack.Screen name="Subtotal" component={Subtotal}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="SelectCard" component={SelectCard}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Enterpin" component={Enterpin}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="one" component={one}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="two" component={two}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="three" component={three}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="four" component={four}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="five" component={five}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="six" component={six}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="seven" component={seven}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="eight" component={eight}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Bookmark" component={Bookmark}
          options={{
            headerShown: false,
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;