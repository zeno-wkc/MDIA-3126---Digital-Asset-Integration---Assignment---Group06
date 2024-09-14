import { Text, View } from "react-native";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import Username from "@/components/atoms/UserName";
import Date from "@/components/atoms/Date";
import PostContent from "@/components/atoms/PostContent";

export default function HomeScreen() {
  return (
    <View>
      <ProfilePicture profileimg="../../components/atoms/rat.jpg"></ProfilePicture>
      <Username usernameText="rhat"></Username>
      <Date dateText="02/27/24"></Date>
      <PostContent content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"></PostContent>
    </View>
  );
}
