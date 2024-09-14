import { Text, View } from "react-native";

export default function PostContent({ content }){
    return (
        <View>
            <Text style={{
                    fontWeight: "bold" 
                }}>
                    { content }
            </Text>
        </View>
    )
} 