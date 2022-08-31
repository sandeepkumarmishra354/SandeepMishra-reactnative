import React from "react";
import { Provider } from "react-redux";
import AppRootNavigation from "./navigation";
import { appStore } from "./redux";

const UPayments = () => {
    return (
        <Provider store={appStore}>
            <AppRootNavigation />
        </Provider>
    );
}

export default React.memo(UPayments);