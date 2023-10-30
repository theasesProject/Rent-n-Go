import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import profil from "../assets/profile.png";
import React, { useState } from "react";
import bkg from "../assets/bkg.png";
import stg from "../assets/settings.png";
import lgt from "../assets/logout.png";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import UserProfileMain from "../components/UserProfileMain.jsx";

// temp photo
import photo from "../assets/profile.png";

function Userprofile({ navigation }) {
  const activeUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate("Home");
  };

  return (
    <View style={styles.userProfilePage}>
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          {/* <Image source={activeUser?.avatar} style={styles.profilePic} /> */}
          <Image source={photo} style={styles.profilePic} />

          <View style={styles.userNameContainer}>
            {/* <Text style={styles.userName}>{activeUser?.userName}</Text> */}
            <Text style={styles.userName}>{"Mohamed"}</Text>
          </View>
        </View>
        <View style={styles.editProfileContainer}>
          <Text style={styles.editProfile}>Edit Profile</Text>
        </View>
      </View>

      {/*  */}

      <UserProfileMain />

      {/*  */}

      <View style={styles.logoutBtnContainer}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Image source={lgt} style={styles.icon} />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userProfilePage: {
    flex: 1,
    padding: 20,
    position: "relative",
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    height: "15%",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editProfileContainer: {
    justifyContent: "center",
  },
  editProfile: {
    fontSize: 12,
    color: "#6C77BF",
  },
  bottomSection: {
    height: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profileOptions: {},
  profileOption: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  logoutBtnContainer: {
    position: "absolute",
    bottom: 10,
    left: 20,
    width: "100%",
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingTop: 20,
  },
  logoutBtn: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
export default Userprofile;
