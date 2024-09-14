import {  View } from "react-native";

export default function ProfilePicture({ profileimg }){
    return (
        <View>
            <img
                style={{
                    width: 150,
                    height: "5rem",
                    borderRadius: 56,
                    objectFit: "cover"
                }}
                src={profileimg} />
        </View>
    )
} 
    