import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Subtitle from "../../component/Subtitle";

interface Props {
    //
}

const ActionContainer = (props: Props) => {
    return (
        <View style={styles.actionContainer}>
            <TouchableNativeFeedback>
                <View style={styles.actionItem}>
                    <Icon
                        style={{ marginRight: 8 }}
                        name="heart-outline"
                        color="#E03B8B"
                        size={24} />
                    <Subtitle style={{ color: "#E03B8B" }}>
                        Add to Wishlist
                    </Subtitle>
                </View>
            </TouchableNativeFeedback>
            <View style={styles.verticalLine} />
            <TouchableNativeFeedback>
                <View style={styles.actionItem}>
                    <Icon
                        style={{ marginRight: 8 }}
                        name="cart-outline"
                        color="#1B98F5"
                        size={24} />
                    <Subtitle style={{ color: "#1B98F5" }}>
                        Move to Cart
                    </Subtitle>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    actionContainer: {
        width: "100%",
        height: 60,
        backgroundColor: "#fff",
        elevation: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    actionItem: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    verticalLine: {
        width: 1,
        height: "90%",
        backgroundColor: "#F5F5F5"
    }
});

export default React.memo(ActionContainer);