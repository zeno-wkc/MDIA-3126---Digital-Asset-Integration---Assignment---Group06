import {  View } from "react-native";

export default function ProfilePicture({ profileimg }){
    return (
        <View>
            <img
                style={{
                    width: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                src={profileimg} />
        </View>
    )
} 
    