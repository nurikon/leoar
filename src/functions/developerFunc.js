import { Dimensions, Platform, NativeModules } from "react-native";

const { width, height } = Dimensions.get("window");

export function dh(x) {
  const designHeight = 667;
  return (x / designHeight) * height;
}

export function dw(x) {
  const designWidth = 375;
  return (x / designWidth) * width;
}

export function ios() {
  const ios = Platform.OS === "ios" ? true : false;
  return ios;
}

export function android() {
  const android = Platform.OS === "android" ? true : false;
  return android;
}

export function statusbarHeight() {
  return NativeModules.StatusBarManager.HEIGHT;
}

export function Capitalize(str) {
  let text =
    str.charAt(0).toUpperCase() +
    str.slice(1).replace("İ", "I").replace("İ", "I").toLowerCase();
  return text;
}