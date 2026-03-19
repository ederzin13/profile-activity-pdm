import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/profile-icon.png")}
            />
            <Text style={styles.username}>Username</Text>
            <Text>User@mail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: "#e8e8e8",
    },
    username: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold",
    },
});
