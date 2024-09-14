import { Text, View } from "react-native";
import UserInformation from "./UserInformation";
import Date from "@/components/atoms/Date";
import PostContent from "@/components/atoms/PostContent";

export default function Post() {
  return (
    <View style={{margin: 10, backgroundColor: "lightgrey", padding: 10, }}>
      <UserInformation></UserInformation>
      <PostContent content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"></PostContent>
      <Date dateText="02/27/24"></Date>
    </View>
  );
}