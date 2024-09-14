import { Text, View } from "react-native";

export default function Username({ usernameText }){
    return (
        <View>
            <Text style={{
                    fontWeight: "bold",
                    width: 1 
                }}>
                    { usernameText }
            </Text>
        </View>
    )
} 