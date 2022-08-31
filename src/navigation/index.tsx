import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppScreenName, AppScreenParams } from "./types";
import ScreenHome from "../screen/ScreenHome";
import ScreenProductDetail from "../screen/ScreenProductDetail";
import ScreenProductCreate from "../screen/ScreenProductCreate";

const Stack = createNativeStackNavigator<AppScreenParams>();

const AppRootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={AppScreenName.HOME}>
            <Stack.Screen name={AppScreenName.HOME} component={ScreenHome} />
            <Stack.Screen name={AppScreenName.PRODUCT_DETAIL} component={ScreenProductDetail} />
            <Stack.Screen name={AppScreenName.PRODUCT_CREATE} component={ScreenProductCreate} />
        </Stack.Navigator>
    );
}

export default React.memo(AppRootNavigation);