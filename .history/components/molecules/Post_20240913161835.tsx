import { Text, View } from "react-native";
import UserInformation from "./UserInformation";
import Date from "@/components/atoms/Date";
import PostContent from "@/components/atoms/PostContent";

export default function Post() {
  return (
    <View style={{margin: 10, backgroundColor: "grey", padding: 10, }}>
      <UserInformation></UserInformation>
      <Date dateText="02/27/24"></Date>
      <PostContent content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"></PostContent>
    </View>
  );
}