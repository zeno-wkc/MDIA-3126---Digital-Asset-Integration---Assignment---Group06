import { Text, View } from "react-native";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import Username from "@/components/atoms/UserName";

export default function UserInformation() {
  return (
    <View 
        style={{
          flex: 1,
          width: 32,
          alignItems: "center",
        }}>
      <ProfilePicture profileimg="../../components/atoms/rat.jpg"></ProfilePicture>
      <Username usernameText="RATT"></Username>
    </View>
  );
}