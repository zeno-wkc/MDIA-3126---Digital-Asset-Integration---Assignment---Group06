import {  View } from "react-native";

export default function ProfilePicture({ profileimg }){
    return (
        <View>
            <img
                style={{
                    width: "7rem",
                    borderRadius: "56"
                }}
                src={profileimg} />
        </View>
    )
} 
    