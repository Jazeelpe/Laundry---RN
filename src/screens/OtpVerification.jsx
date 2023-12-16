import React, { useState ,useRef} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";
import Button from "../components/Button";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const OtpVerification = ({ route }) => {
  const [isSent, setIsSent] = useState(false);

  const insets = useSafeAreaInsets();
  const safeAreaStyle = styles(insets);
  const navigation = useNavigation();
  const { email, phoneNumber, name } = route.params;

  const app = getApp();
  const auth = getAuth(app);

  const recaptchaVerifier = useRef(null);
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = useState();
  const attemptInvisibleVerification = false;
 
  const createNewUser =async()=>{
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      phone: phoneNumber,
      address: "",
    });
 }
  const handleOtpMessage = async () => {
    // The FirebaseRecaptchaVerifierModal ref implements the
    // FirebaseAuthApplicationVerifier interface and can be
    // passed directly to `verifyPhoneNumber`.
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      setIsSent(!isSent);
      showMessage({
        text: "Verification code has been sent to your phone.",
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  const handleOTPVerfication = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      createNewUser();
      navigation.navigate("Agreement",{email});
      console.log("Phone authentication successful 👍" )
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return (
    <View style={safeAreaStyle.maincontainer}>
       <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
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
              Verification…
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
              tortor mauris condimentum.
            </Text>
          </View>
          <View style={{ gap: 20, alignSelf: "center" }}>
            <Image
              style={{ resizeMode: "contain", height: 150 }}
              source={require("../assets/images/otp-bg.png")}
            />
          </View>
          <OtpInput
            numberOfDigits={6}
            onTextChange={(text) => setVerificationCode(text)}
          />
          <Text style={{ alignSelf: "flex-end", color: "#00C464" }}>
            Resend OTP
          </Text>
          <View style={{ paddingHorizontal: 70 }}>
            {isSent ? (
              <Button btnText="Verify" handleNavigation={handleOTPVerfication} />
            ) : (
              <Button btnText="Send OTP" handleNavigation={handleOtpMessage} />
            )}
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;

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
