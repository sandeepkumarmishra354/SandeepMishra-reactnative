import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AppNavType, AppScreenName, AppScreenParams } from "./types";

export const useAppNavigation = <S extends AppScreenName>() =>
    useNavigation<AppNavType<S>>();

export const useAppRoute = <S extends AppScreenName>() =>
    useRoute<RouteProp<AppScreenParams, S>>();