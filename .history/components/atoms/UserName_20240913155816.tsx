import { Text, View } from "react-native";

export default function Username({ usernameText }){
    return (
        <View>
            <Text style={{
                    fontSize: 2
                }}>
                    { usernameText }
            </Text>
        </View>
    )
} 