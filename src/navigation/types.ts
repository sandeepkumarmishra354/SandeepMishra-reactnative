import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export enum AppScreenName {
    HOME = "home",
    PRODUCT_DETAIL = "product-details",
    PRODUCT_CREATE = "product-create",
}

export type ProductDetailScreenParams = {
    id: string
}

export type AppScreenParams = {
    [AppScreenName.HOME]: undefined,
    [AppScreenName.PRODUCT_DETAIL]: ProductDetailScreenParams,
    [AppScreenName.PRODUCT_CREATE]: undefined,
}

export type AppNavProps<S extends AppScreenName>
    = NativeStackScreenProps<AppScreenParams, S>;

export type AppNavType<S extends AppScreenName>
    = NativeStackNavigationProp<AppScreenParams, S>