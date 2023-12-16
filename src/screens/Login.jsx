import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomTextInput from "../components/CustomTextInput";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { LOGIN } from "../store/userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dontGoBack] = useState(true);
  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  
  const handleBackNav = () => {
    navigation.addListener("beforeRemove", (e) => {
      if (dontGoBack) {
        e.preventDefault();
      }
    });
  };
  const handleNaviagation = () => {
    navigation.navigate("Signup");
  };

  const handleSignin = async () => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      res = doc.data()
      if(res.password === password){
        dispatch(LOGIN({
          name:res.name,
          email:res.email,
          phone:res.phone,
          address:res.address,
          washing:res.washing,
        }))
        navigation.navigate('BottomTab')
      }else{
        console.log('false')
      }
      
    });
  };

 

  return (
    <View style={safeAreaStyle.maincontainer}>
      <View style={safeAreaStyle.container}>
        <View style={safeAreaStyle.imageContainer}>
          <Image
            style={safeAreaStyle.image}
            source={require("../assets/images/Logo-green.png")}
          />
        </View>
        <View style={safeAreaStyle.formContainer}>
          <View>
            <Text style={{ fontSize: 30, lineHeight: 40, color: "#000" }}>
              Welcome Back!
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 19,
                color: "#000",
                marginVertical: 8,
                width: "90%",
              }}
            >
              Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula.
            </Text>
          </View>
          <View style={{ gap: 20 }}>
            <CustomTextInput placeholder={"Phone Number / Email"} handleText={(text)=>setEmail(text)} />
            <CustomTextInput placeholder={"Password"} type="password" handleText={(text)=>setPassword(text)} />
          </View>
          <Text style={{ alignSelf: "flex-end" }}>Forgot Password ?</Text>
          <View style={{ paddingHorizontal: 70 }}>
            <Button btnText="Login" handleNavigation={handleSignin}/>
          </View>
          <Text style={{ alignSelf: "center", marginVertical: 50 }}>
            Need an account?
          </Text>
        </View>
        <TouchableOpacity
          style={safeAreaStyle.btnContainer}
          onPress={handleNaviagation}
        >
          <Text
            style={{
              fontSize: 18,
              lineHeight: 40,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = (insets) =>
  StyleSheet.create({
    maincontainer: {
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    container: {
      height: "100%",
      backgroundColor: "#FFF",
    },
    imageContainer: {
      height: 100,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    image: {},
    formContainer: {
      flex: 1,
      flexDirection: "column",
      gap: 30,
      paddingHorizontal: 20,
      fontWeight: 700,
    },
    btnContainer: {
      height: 60,
      backgroundColor: "#00C464",
    },
  });
