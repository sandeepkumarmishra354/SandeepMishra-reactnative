import React from "react";
import { View, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions, Text } from "react-native";
import Subtitle from "../../component/Subtitle";
import Title from "../../component/Title";
import { useAppNavigation, useAppRoute } from "../../navigation/hooks";
import { AppScreenName } from "../../navigation/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productAction } from "../../redux/slice/product";
import ActionContainer from "./ActionContainer";

const imageHeight = Dimensions.get("window").height / 3.5;

const ScreenProductDetail = () => {
    const navigation = useAppNavigation();
    const screenParams = useAppRoute<AppScreenName.PRODUCT_DETAIL>().params;
    const actionDispatcher = useAppDispatch();
    const { fetching, product } = useAppSelector(state => ({
        fetching: state.product.fetchingDetail,
        product: state.product.product,
    }));

    if (product)
        navigation.setOptions({
            title: product.name
        });

    React.useEffect(() => {
        actionDispatcher(productAction.fetchProductDetail(screenParams.id));
        return () => {
            actionDispatcher(productAction.setProductAsNull());
        }
    }, []);

    return (
        <View style={styles.main}>
            {
                (fetching)
                    ?
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator color="#1B98F5" size={26} />
                    </View>
                    :
                    product && <View style={{flex:1}}>
                        <ScrollView
                            style={styles.scrollview}
                            contentContainerStyle={{ padding: 12 }}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: product?.avatar }}
                                    resizeMode="contain" />
                            </View>
                            <View style={styles.titlePriceContainer}>
                                <Title style={styles.title}>
                                    {product.name}
                                </Title>
                                <Title style={styles.price}>
                                    {`$ ${product.price}`}
                                </Title>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>
                                    {`#${product.category}`}
                                </Text>
                            </View>
                            <Subtitle>
                                {product.description}
                            </Subtitle>
                        </ScrollView>
                        <ActionContainer/>
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        backgroundColor: "#fff",
        flex: 1
    },
    loaderContainer: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollview: {
        width: "100%",
        flexGrow: 1,
    },
    imageContainer: {
        width: "100%",
        height: imageHeight,
        elevation: 2,
        padding: 6,
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 6
    },
    titlePriceContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 22
    },
    title: {
        width: "75%",
        fontWeight: "bold"
    },
    price: {
        color: "#1B98F5",
        fontWeight: "bold"
    },
    category: {
        alignSelf: "flex-start",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16
    },
    categoryText: {
        color: "#242B2E"
    }
});

export default ScreenProductDetail;
