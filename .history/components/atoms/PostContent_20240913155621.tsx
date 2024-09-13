import { Text, View } from "react-native";

export default function PostContent({ content }){
    return (
        <View>
            <Text style={{
                    color: "red"
                }}>
                    { content }
            </Text>
        </View>
    )
} 