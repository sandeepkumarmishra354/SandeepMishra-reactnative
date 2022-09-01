import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Title from "../../component/Title";

interface Props {
    onSearchPress?: () => void
}

const Header = (props: Props) => {
    return (
        <View style={styles.main}>
            <Title>UPayments Store</Title>
            <Icon
                name="search-outline"
                color="#242B2E"
                size={26}
                onPress={props.onSearchPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 4
    }
});

export default React.memo(Header);