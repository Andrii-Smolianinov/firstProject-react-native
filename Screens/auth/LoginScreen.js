import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {  
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);  

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log("width", width);
    };
    Dimensions.addEventListener("change", onChange);
    
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("./assets/images/BG.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
           
            <View
              style={{
                ...styles.containerForm                
              }}
            >
              <Text style={styles.titleForm}>Увійти</Text>

              <TextInput
                style={styles.input}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={keyboardHide}
                onFocus={() => setIsShowKeyboard(true)}
              >
                <Text style={styles.titleButton}>Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  containerForm: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  titleForm: {
    marginTop: 32,
    marginBottom: 33,
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 15,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    color: "#E8E8E8",
    borderColor: "#E8E8E8",
    textAlign: "left",
  },
  button: {
    height: 51,
    marginTop: 43,
    marginBottom: 32,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  titleButton: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  dimensionsTtl: {
    fontSize: 16,
    marginVertical: 10,
    color: "#FFFFFF",
    marginHorizontal: 16,
  },
  dimensionsTxt: {
    fontSize: 14,
    color: "#FFFFFF",
    marginHorizontal: 16,
  },
});
