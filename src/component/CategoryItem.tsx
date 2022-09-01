import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { ICategory } from "../redux/types/category";
import Subtitle from "./Subtitle";

interface Props extends ICategory {
    selected?: boolean,
    onItemPress: (category: ICategory) => void
}

const CategoryItem = (props: Props) => {
    const onPress = () => {
        props.onItemPress(props);
    }

    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.item}>
                <Subtitle>{props.name}</Subtitle>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    item: {
        height: 40,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 16,
        marginRight: 12,
        elevation: 1,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default React.memo(CategoryItem);