import {  Text, View } from "react-native";

export default function Username({ usernameText }){
    return (
        <View>
            <Text style={{color:"salmon"}}>
                    { usernameText }
            </Text>
        </View>
    )
} 