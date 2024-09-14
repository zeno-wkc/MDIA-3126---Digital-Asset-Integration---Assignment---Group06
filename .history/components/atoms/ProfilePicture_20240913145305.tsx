import {  View } from "react-native";

export default function ProfilePicture({ profileimg }){
    return (
        <View>
            <img
                style={{
                    width: "5rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                src={profileimg} />
        </View>
    )
} 
    