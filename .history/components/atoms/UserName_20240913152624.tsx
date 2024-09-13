import { Text, View } from "react-native";

export default function Username({ usernameText }){
    return (
        <View>
            <Text 
                style={{
                    width: "5rem",
                    height: "5rem",
                    borderRadius: 56,
                    objectFit: "cover"
                }}>
                    { usernameText }
            </Text>
        </View>
    )
} 