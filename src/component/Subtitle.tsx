import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface Props {
    style?: StyleProp<TextStyle>,
    children: React.ReactNode
}

const Subtitle = (props: Props) => {
    return (
        <Text style={[styles.subtitle, props.style]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: "#242B2E"
    }
});

export default React.memo(Subtitle);