import { Text, View } from "react-native";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import Username from "../atoms/Username";

export default function UserInformation() {
  return (
    <View 
        style={{
          flex: 1,
          display: "flex",
          width: 300,
          alignItems: "center",
          flexDirection: "row"
        }}>
      <ProfilePicture profileimg="../../components/atoms/rat.jpg"></ProfilePicture>
      <Username usernameText="RATT"></Username>
    </View>
  );
}