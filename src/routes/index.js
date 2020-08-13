import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import Registration from '../pages/registration';
import Confirmation from '../pages/confirmation';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <>
            <Stack.Navigator initialRouteName="AuthRoutes">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Register" component={Registration} options={{ title: '' }} />
                <Stack.Screen name="Confirmation" component={Confirmation} options={{ title: '' }} />
            </Stack.Navigator>
        </>
    );
}