import React from "react";
import {
    View, StyleSheet, Text, StyleProp,
    ViewStyle, TextStyle, ActivityIndicator, TouchableNativeFeedback
} from "react-native";

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
        <TouchableNativeFeedback
            onPress={props.disable ? undefined : props.onPress}>
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
        </TouchableNativeFeedback>
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