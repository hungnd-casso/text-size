import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
/**
 * Below code is to limit the max size of text font user can custom in Accessibility
 * StackOverflow: https://stackoverflow.com/a/65193181/27724785
 */
// interface TextWithDefaultProps extends Text {
//   defaultProps?: { maxFontSizeMultiplier?: number; allowFontScaling?: boolean };
// }
// interface TextInputWithDefaultProps extends TextInput {
//   defaultProps?: { maxFontSizeMultiplier?: number; allowFontScaling?: boolean };
// }
// (Text as unknown as TextWithDefaultProps).defaultProps =
//   (Text as unknown as TextWithDefaultProps).defaultProps || {};
// (
//   Text as unknown as TextWithDefaultProps
// ).defaultProps!.maxFontSizeMultiplier = 1.1;
// (Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = true;

// (TextInput as unknown as TextInputWithDefaultProps).defaultProps =
//   (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
// (
//   TextInput as unknown as TextInputWithDefaultProps
// ).defaultProps!.maxFontSizeMultiplier = 1.1;
// (
//   TextInput as unknown as TextInputWithDefaultProps
// ).defaultProps!.allowFontScaling = true;

export default function App() {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={true} maxFontSizeMultiplier={1.2}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
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
