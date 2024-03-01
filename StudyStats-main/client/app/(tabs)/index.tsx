import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../../context/AuthProvider";

export default function TabOneScreen() {
    const { setUser } = useAuth();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to StudyStats!</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
            </View>{" "}
            <TouchableOpacity
                style={styles.logout}
                onPress={() => setUser(null)}
            >
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    logout: {
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginTop: 200,
        backgroundColor: "#911f84",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});
