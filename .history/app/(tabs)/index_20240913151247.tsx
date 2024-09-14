import { Text, View } from "react-native";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import Username from "@/components/atoms/UserName";
import Date from "@/components/atoms/Date";

export default function HomeScreen() {
  return (
    <View>
      <ProfilePicture profileimg="../../components/atoms/rat.jpg"></ProfilePicture>
      <Username usernameText="rhat"></Username>
      <Date dateText="02/27/24"></Date>
    </View>
  );
}
