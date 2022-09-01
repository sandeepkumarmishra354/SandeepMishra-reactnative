import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    icon: string,
    label: string,
    onPress?: () => void
}

const FloatingButton = (props: Props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={styles.main}>
                <Icon name={props.icon} color="#fff" size={24} />
                <Text style={styles.label}>
                    {props.label}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    main: {
        position: "absolute",
        bottom: 16,
        right: 16,
        elevation: 6,
        borderRadius: 22,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B98F5"
    },
    label: {
        color: "#fff",
        fontWeight:"bold",
        marginLeft: 5
    }
});

export default React.memo(FloatingButton);