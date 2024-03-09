import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Splashscreen from '../Authentication/Splashscreen';
import Loginscreen from '../Authentication/Loginscreen';
import Bottomnavigation from './Bottomnavigation';
import Takeurlscreen from '../Authentication/Takeurlscreen';
import Phonenumber from '../Authentication/Phonenumber';
import Pinscreen from '../Authentication/Pinscreen';
import Otpscreen from '../Authentication/Otpscreen';

const Auth = createStackNavigator();

const Authstack = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name='Splash'
                component={Splashscreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name='takeurl'
                component={Takeurlscreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
                <Auth.Screen
                name='phonenumber'
                component={Phonenumber}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
              <Auth.Screen
                name='otp'
                component={Otpscreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <Auth.Screen
                name='pin'
                component={Pinscreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name='Login'
                component={Loginscreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name='bottom'
                component={Bottomnavigation}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    )
}

export default Authstack
