import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { useAuth } from "../../context/AuthProvider";

export default function Login() {
    const { setUser } = useAuth();

    const login = () => {
        setUser({
            name: "John Doe",
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to StudyStats! Login Please.
            </Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.3)"
            />
            <TouchableOpacity style={styles.login} onPress={login}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    login: {
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
