import { Text, View } from "react-native";

export default function PostContent({ content }){
    return (
        <View>
            <Text style={{
                    fontWeight: "bold",
                    padding: 10
                }}>
                    { content }
            </Text>
        </View>
    )
} 