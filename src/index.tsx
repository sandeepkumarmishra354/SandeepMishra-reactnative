import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import AppRootNavigation from "./navigation";
import { appStore } from "./redux";

const UPayments = () => {
    return (
        <Provider store={appStore}>
            <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content"/>
            <AppRootNavigation />
        </Provider>
    );
}

export default React.memo(UPayments);