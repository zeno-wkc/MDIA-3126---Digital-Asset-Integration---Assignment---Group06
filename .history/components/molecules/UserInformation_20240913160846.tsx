import { Text, View } from "react-native";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import Username from "@/components/atoms/UserName";

export default function UserInformation() {
  return (
    <View>
      <ProfilePicture profileimg="../../components/atoms/rat.jpg"></ProfilePicture>
      <Username usernameText="RATT"></Username>
    </View>
  );
}