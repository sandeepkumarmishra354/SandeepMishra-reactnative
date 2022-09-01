import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppScreenName, AppScreenParams } from "./types";
import ScreenHome from "../screen/home";
import ScreenProductDetail from "../screen/product-detail";
import ScreenProductCreate from "../screen/product-create";
import Title from "../component/Title";

const Stack = createNativeStackNavigator<AppScreenParams>();

const AppRootNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={AppScreenName.HOME}
            screenOptions={{
                headerTitle: (props) => <Title>{props.children}</Title>
            }}>
            <Stack.Screen
                name={AppScreenName.HOME}
                component={ScreenHome}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={AppScreenName.PRODUCT_DETAIL}
                component={ScreenProductDetail} />
            <Stack.Screen
                name={AppScreenName.PRODUCT_CREATE}
                component={ScreenProductCreate} />
        </Stack.Navigator>
    );
}

export default React.memo(AppRootNavigation);