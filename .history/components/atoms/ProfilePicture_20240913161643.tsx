import {  View } from "react-native";

export default function ProfilePicture({ profileimg }){
    return (
        <View>
            <img
                style={{
                    width: 80,
                    height: "5rem",
                    borderRadius: 56,
                    objectFit: "cover",
                    padding: 10
                }}
                src={profileimg} />
        </View>
    )
} 
    