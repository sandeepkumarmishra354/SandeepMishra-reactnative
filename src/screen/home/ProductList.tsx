import React from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import ProductCard from "../../component/ProductCard";
import { IProduct } from "../../redux/types/products";

interface Props {
    data: IProduct[]
    loading?: boolean,
    onItemPress: (product: IProduct) => void
}

const ProductList = (props: Props) => {

    const keyExtractor = React.useCallback((item: IProduct) => item._id, []);

    const renderItem = React.useCallback(({ item }: { item: IProduct }) => (
        <ProductCard {...item} onItemPress={props.onItemPress} />
    ), []);

    if (props.loading)
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color="#1B98F5" size={26} />
            </View>
        );

    return (
        <FlatList
            style={styles.flatlist}
            contentContainerStyle={styles.flatlistContainer}
            data={props.data}
            numColumns={2}
            keyExtractor={keyExtractor}
            renderItem={renderItem} />
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
    },
    flatlist: {
        flex: 1
    },
    flatlistContainer: {
        paddingHorizontal: 12,
        paddingBottom: 12
    },
    loaderContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default React.memo(ProductList);