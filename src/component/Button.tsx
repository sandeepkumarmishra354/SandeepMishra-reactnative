import React from "react";
import {
    View, StyleSheet, Pressable, Text, StyleProp,
    ViewStyle, TextStyle, ActivityIndicator
} from "react-native";

const RIPPLE = { color: "#00000050", borderless: true, radius: 5 };

interface Props {
    label: string,
    loading?: boolean,
    disable?: boolean,
    loaderColor?: string,
    loaderSize?: number,
    containerStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
}

const Button = (props: Props) => {
    return (
        <Pressable
            onPress={props.disable ? undefined : props.onPress}
            android_ripple={RIPPLE}>
            <View style={[styles.view, props.containerStyle]}>
                {
                    props.loading
                        ?
                        <ActivityIndicator
                            color={props.loaderColor ?? "#fff"}
                            size={props.loaderSize ?? 22} />
                        :
                        <Text style={[styles.text, props.textStyle]}>
                            {props.label}
                        </Text>
                }
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        elevation: 4,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B98F5"
    },
    text: {
        fontSize: 15,
        color: "#fff"
    }
});

export default React.memo(Button);