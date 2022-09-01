import React from "react";
import { View, StyleSheet, TouchableNativeFeedback, Image } from "react-native";
import { IProduct } from "../redux/types/products";
import Subtitle from "./Subtitle";

interface Props extends IProduct {
    onItemPress: (product: IProduct) => void
}

const ProductCard = (props: Props) => {
    const onPress = () => {
        props.onItemPress(props);
    }

    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.item}>
                <Image
                    style={styles.itemImage}
                    source={{ uri: props.avatar }}
                    resizeMode="contain" />
                <View style={{ padding: 12 }}>
                    <Subtitle style={{ marginBottom: 5 }}>{props.name}</Subtitle>
                    <Subtitle style={{ color: "#1B98F5" }}>$ {props.price}</Subtitle>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 3,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "#fff"//"#F5F5F5"
    },
    itemImage: {
        width: "100%",
        height: 140,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
});

export default React.memo(ProductCard);