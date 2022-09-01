import React from "react";
import { StyleSheet, ScrollView, DeviceEventEmitter } from "react-native";
import Button from "../../component/Button";
import MyTextInput from "../../component/MyTextInput";
import Subtitle from "../../component/Subtitle";
import { useAppNavigation } from "../../navigation/hooks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { EVENT_PRODUCT_CREATED, productAction } from "../../redux/slice/product";
import { ICategory } from "../../redux/types/category";
import { IProductCreate } from "../../redux/types/products";
import Categories from "../home/Categories";

type NewProductKeys = keyof IProductCreate;

const ScreenProductCreate = () => {
    const navigation = useAppNavigation();
    const actionDispatcher = useAppDispatch();

    const { creating, categories, categoryFetching } = useAppSelector(state => ({
        creating: state.product.creating,
        categoryFetching: state.category.fetching,
        categories: state.category.categories,
    }));

    const [selectedCategory, setSelectedCategory] = React.useState<ICategory | null>(null);
    const [newProduct, setNewProduct] = React.useState<Partial<IProductCreate>>({
        // this is fixed here without it I'm not able to create new product.
        developerEmail: "sandeepkumarmishra354@gmail.com"
    });

    // register for event "product created"
    // don't forget to unsubscribe while going back.
    React.useEffect(() => {
        DeviceEventEmitter.addListener(EVENT_PRODUCT_CREATED, () => {
            navigation.goBack();
        });
        return () => {
            DeviceEventEmitter.removeAllListeners(EVENT_PRODUCT_CREATED);
        }
    }, []);

    const onCategoryChange = React.useCallback((category: ICategory) => {
        setSelectedCategory(category);
    }, []);

    const onSubmitPress = React.useCallback(() => {
        actionDispatcher(productAction.createProduct({
            ...newProduct,
            category: selectedCategory?.name
        }));
    }, [selectedCategory, newProduct]);

    const onTextChange = (key: NewProductKeys) => {
        return (value: string) => {
            setNewProduct(prev => {
                const data = { ...prev };
                if (key === "price") {
                    const num = parseFloat(value);
                    if (Number.isNaN(num))
                        data["price"] = undefined;
                    else
                        data["price"] = num;
                } else {
                    data[key] = value;
                }
                return data;
            });
        };
    }

    return (
        <ScrollView
            style={styles.main}
            contentContainerStyle={{ padding: 16 }}>
            <MyTextInput
                style={styles.input}
                label="Product title"
                placeholder="ex- Black Jeans, Shirt, etc."
                value={newProduct.name}
                onChangeText={onTextChange("name")} />
            <MyTextInput
                style={styles.input}
                label="Product price"
                placeholder="ex- 250"
                keyboardType="number-pad"
                value={`${newProduct.price ?? ""}`}
                onChangeText={onTextChange("price")} />
            <MyTextInput
                style={styles.input}
                label="Product description"
                placeholder="short description about product."
                value={newProduct.description}
                onChangeText={onTextChange("description")} />
            <MyTextInput
                style={styles.input}
                label="Product image"
                placeholder="paste image url here."
                value={newProduct.avatar}
                onChangeText={onTextChange("avatar")} />
            <Subtitle style={{ marginBottom: 12 }}>
                {`Selected Category: ${selectedCategory?.name ?? ""}`}
            </Subtitle>
            <Categories
                loading={categoryFetching}
                data={categories}
                onItemPress={onCategoryChange}
                selectedId={selectedCategory?._id ?? null}
                disableCatTypeAll />
            <Button
                containerStyle={styles.submit}
                label="Add Product"
                loading={creating}
                disable={creating}
                onPress={onSubmitPress} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    submit: {
        marginTop: 16
    },
    input: {
        marginBottom: 12
    }
});

export default ScreenProductCreate;