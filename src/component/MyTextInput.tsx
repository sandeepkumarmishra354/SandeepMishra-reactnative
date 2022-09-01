import React, { useState } from "react";
import {
    NativeSyntheticEvent, StyleSheet, Text, TextInput,
    TextInputFocusEventData, TextInputProps, View
} from "react-native";

const focusColor = "#1B98F5";
const blurColor = "#CAD5E2";

type InputEvent = NativeSyntheticEvent<TextInputFocusEventData>;

interface Props extends TextInputProps {
    label?: string
}

const MyTextInput = (props: Props, ref: any) => {
    const [isFocus, setIsFocus] = useState(false);

    const onBlur = (e: InputEvent) => {
        setIsFocus(false);
        props.onBlur?.(e);
    }
    const onfocus = (e: InputEvent) => {
        setIsFocus(true);
        props.onFocus?.(e);
    }

    if (!props.label)
        return (
            <TextInput
                {...props}
                ref={ref}
                placeholderTextColor="#758283"
                style={[styles.input, props.style, { borderColor: isFocus ? focusColor : blurColor }]}
                onFocus={onfocus}
                onBlur={onBlur} />
        );

    return (
        <View style={[styles.container, props.style]}>
            <Text
                style={styles.label}
                numberOfLines={1}>
                {props.label}
            </Text>
            <TextInput
                {...props}
                ref={ref}
                style={[styles.input, { borderColor: isFocus ? focusColor : blurColor }]}
                placeholderTextColor="#758283"
                onFocus={onfocus}
                onBlur={onBlur} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#CAD5E2",
        color: "#242B2E",
        fontWeight: "400",
        borderRadius: 5,
        paddingLeft: 16,
        height: 45,
        fontSize: 15,
    },
    label: {
        color: "#242B2E",
        marginBottom: 4,
        marginLeft: 3,
        fontSize: 15
    }
});

export default React.memo(React.forwardRef<TextInput, Props>(MyTextInput));