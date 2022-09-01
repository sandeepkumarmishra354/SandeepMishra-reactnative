import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppNavigation } from "../..//navigation/hooks";
import { AppScreenName } from "../../navigation/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { categoryAction } from "../../redux/slice/category";
import { productAction } from "../../redux/slice/product";
import { ICategory } from "../../redux/types/category";
import { IProduct } from "../../redux/types/products";
import Categories from "./Categories";
import Header from "./Header";
import ProductList from "./ProductList";

const ScreenHome = () => {
    const navigation = useAppNavigation();
    const actionDispatcher = useAppDispatch();
    const [selectedCategory, setSelectedCategory] = React.useState<ICategory | null>(null);

    const { product, category } = useAppSelector(state => ({
        product: {
            fetching: state.product.fetchingList,
            products: state.product.products
        },
        category: {
            fetching: state.category.fetching,
            categories: state.category.categories,
        }
    }));

    const productList = React.useMemo(() => {
        if (selectedCategory)
            return product.products.reduce<IProduct[]>((prev, curr) => {
                if (curr.category === selectedCategory.name)
                    prev.push(curr);
                return prev;
            }, []);
        return product.products;
    }, [product.products, selectedCategory]);

    React.useEffect(() => {
        actionDispatcher(productAction.fetchProductList());
        actionDispatcher(categoryAction.fetchCategories());
    }, []);

    const onProductPress = React.useCallback((product: IProduct) => {
        navigation.navigate(AppScreenName.PRODUCT_DETAIL, {
            id: product._id
        });
    }, []);

    const onCategoryPress = React.useCallback((category: ICategory) => {
        setSelectedCategory(category);
    }, []);

    const onCategoryReset = React.useCallback(() => {
        setSelectedCategory(null);
    }, []);

    return (
        <View style={styles.main}>
            <Header />
            <Categories
                loading={category.fetching}
                data={category.categories}
                selectedId={selectedCategory?._id ?? null}
                onReset={onCategoryReset}
                onItemPress={onCategoryPress} />
            <ProductList
                loading={product.fetching}
                data={productList}
                onItemPress={onProductPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    container: {
        flexGrow: 1,
        padding: 16
    }
});

export default ScreenHome;