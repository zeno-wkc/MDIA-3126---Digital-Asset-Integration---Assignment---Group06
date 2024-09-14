import { Text, View } from "react-native";

export default function Username({ usernameText }){
    return (
        <View>
            <Text style={{
                    fontSize: 32,
                }}>
                    { usernameText }
            </Text>
        </View>
    )
} 