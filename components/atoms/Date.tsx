import {  Text, View } from "react-native";

export default function Date({ dateText }){
    return (
        <View>
            <Text 
                style={{padding: 10}}>
                    { dateText }
            </Text>
        </View>
    )
} 