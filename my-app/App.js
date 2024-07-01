import React from 'react' ;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <StackNavigator>
                <Stack.Screen name = "Home"  component = {HomeScreen} />
                <Stack.Screen name = "Cart"  component = {CartScreen} />
            </StackNavigator>
        </NavigationContainer>
    );
}

export default App;