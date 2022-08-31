import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface Props {
    style?: StyleProp<TextStyle>,
    children: React.ReactNode
}

const Title = (props: Props) => {
    return (
        <Text style={[styles.title, props.style]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        color: "#242B2E"
    }
});

export default React.memo(Title);