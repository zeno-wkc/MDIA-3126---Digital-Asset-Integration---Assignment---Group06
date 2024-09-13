import { Text, View } from "react-native";
import ProfilePicture from "@/components/atoms/ProfilePicture";

export default function HomeScreen() {
  return (
    <View>
      <ProfilePicture profileimg="./rat.jpg"></ProfilePicture>
    </View>
  );
}
