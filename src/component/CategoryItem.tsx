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
            <View
                style={[styles.item, props.selected ? styles.selected : styles.unselected]}>
                <Subtitle style={{ color: props.selected ? "#F5F5F5" : "#242B2E" }}>
                    {props.name}
                </Subtitle>
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
        justifyContent: "center",
        alignItems: "center"
    },
    selected: {
        backgroundColor: "#242B2E",
    },
    unselected: {
        backgroundColor: "#F5F5F5",
    }
});

export default React.memo(CategoryItem);