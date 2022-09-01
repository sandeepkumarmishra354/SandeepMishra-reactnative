import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CategoryItem from "../../component/CategoryItem";
import { ICategory } from "../../redux/types/category";

interface Props {
    data: ICategory[],
    selectedId: string | null,
    loading?: boolean,
    onReset: () => void,
    onItemPress: (category: ICategory) => void
}

const DummyCategory = () => (
    <View style={styles.dummy} />
);


const Categories = (props: Props) => {

    const onAllPress = () => {
        props.onReset();
    }

    return (
        <View style={styles.main}>
            <ScrollView
                contentContainerStyle={{ paddingVertical: 16 }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    props.loading
                        ?
                        [1, 2, 3, 4, 5].map(i => <DummyCategory key={`key-${i}`} />)
                        :
                        <>
                            <CategoryItem
                                _id="ALL"
                                name="ALL"
                                createdAt=""
                                updatedAt=""
                                onItemPress={onAllPress}
                                selected={props.selectedId === null} />
                            {props.data.map(cat => (
                                <CategoryItem
                                    key={cat._id}
                                    {...cat}
                                    onItemPress={props.onItemPress}
                                    selected={props.selectedId === cat._id} />
                            ))}
                        </>
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        paddingHorizontal: 12,
    },
    dummy: {
        width: 120,
        height: 40,
        borderRadius: 16,
        marginRight: 12,
        backgroundColor: "#F5F5F5"
    },
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
    itemText: {
        color: "#242B2E"
    }
});

export default React.memo(Categories);