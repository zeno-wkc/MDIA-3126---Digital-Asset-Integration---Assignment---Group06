import {  View } from "react-native";

export default function ProfilePicture({ profileimg }){
    return (
        <View>
            <img
                style={{
                    width: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                src={profileimg} />
        </View>
    )
} 
    