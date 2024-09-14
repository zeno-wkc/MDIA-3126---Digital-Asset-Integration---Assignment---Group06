import { Text, View } from "react-native";

export default function PostContent({ usernameText }){
    return (
        <View>
            <Text style={{
                    fontWeight: "bold" 
                }}>
                    { usernameText }
            </Text>
        </View>
    )
} 