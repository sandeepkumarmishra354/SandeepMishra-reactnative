import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
    //
}

const CategoryItem = (props: Props) => {
    return (
        <View style={styles.main}>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        flex: 1
    }
});

export default React.memo(CategoryItem);