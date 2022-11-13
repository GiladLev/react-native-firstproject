import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Button,
} from "react-native";
export default function App() {
  console.log("app executed");
  const handlePress = () => {
    console.log("handle press");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native -lllassd dsf ssfff ffdfffd dffddffddfdfdffdf fffffd
        dffd dffd
      </Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70, backgroundColor: "red" }}></View>
      </TouchableNativeFeedback>
      <Button title="Click me" onPress={()=>{console.log("click")}}/>



      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
