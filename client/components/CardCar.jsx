import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Button,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import { useEffect, useState } from "react";
import car from "../assets/car2.png";
import emptyStar from "../assets/eto.png";
import star from "../assets/star1.png";
import RatingStar from "../assets/Svg/RatingStar.svg";
import BookMark from "../assets/Svg/bookMark.svg";
import TopCorner from "../assets/Svg/BookMarkDone.svg";
import { useDispatch, useSelector } from "react-redux";
import { CreateBookMark, removedBookMark, saveDetails } from "../store/carFetch.js";
import axios from "axios";
import { selectUser } from "../store/userSlice";
function CardCar({ oneCar, setNothing, handlePress }) {
  const [starSelected, setStarSelected] = useState(false);
  // const {process.env.EXPO_PUBLIC_SERVER_IP} = require("../env.js")
  const [isHeartClicked, setHeartClicked] = useState(false);
  // const [heartSelected, setHeartSelected] = useState(false);
  const loading = useSelector((state) => state.car.loading);
  const [done, setDone] = useState(null);
  const activeUser = useSelector(selectUser);
  const starImage = starSelected ? star : emptyStar;
  // const heartImage = heartSelected ? heartBleu : EmptyHeart;
  const dispatch = useDispatch();
  // console.log("Car dataaaaaaaaaaaa", oneCar);
  const handleStarPress = () => {
    setStarSelected(!starSelected);
  };
  const handleHeartPress = async () => {
    // setHeartSelected(!heartSelected);
    // if (!heartSelected) {
    // console.log(oneCar.id + "selim")
    setHeartClicked(!isHeartClicked);
    dispatch(CreateBookMark({ CarId: oneCar.id, UserId: activeUser.id }));
    // } else if (heartSelected) {
    // dispatch(removedBookMark(oneCar.id));
    // }
  };
  const checkBookMarked = async () => {
    try {
      const task = await axios.get(
        `http://${process.env.EXPO_PUBLIC_SERVER_IP}:5000/api/bookmarks/check/${activeUser.id}/${oneCar.id}`
      );
      if (task.data) {
        // console.log("taskkkkkkkkkkkkkk", task.data);
        setNothing("");
        setDone(true);
      } else {
        setNothing("");
        setDone(false);
      }
    } catch (er) {
      console.error(er);
    }
  };
  const handleRent = async () => {
    handlePress();
    dispatch(saveDetails(oneCar));
  };
  useEffect(() => {
    checkBookMarked();
  }, [loading]);
  return (
    <View style={styles.card}>
      {/* <Button title="Details & Booking" onPress={handleRent} /> */}
      <Pressable style={styles.Image} onPress={handleRent}>
        <Image style={styles.carImage} source={car}  />
        {Object.values(activeUser).length ? (
          !done ? (
            <BookMark onPress={handleHeartPress} />
          ) : (
            <TopCorner />
          )
        ) : null}
      </Pressable>
      <View style={styles.carDetails}>
        <View style={styles.NameAvaib}>
          <Text style={styles.carName}>{oneCar.model}</Text>
          <Text style={styles.avaible}>{oneCar.status}</Text>
        </View>
        <View style={styles.PriceStar}>
          {/* <View style={styles.reviews}> */}
          {/* <TouchableOpacity > */}
          {/* <RatingStar onPress={handleStarPress}/> */}
          {/* <Image style={styles.heart} source={starImage}></Image> */}
          {/* </TouchableOpacity> */}
          {/* <Text style={styles.avaible}>(150 review)</Text> */}
          {/* </View> */}
          <Text style={styles.carPrice}>
            ${oneCar.price}/{oneCar.period}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "98%",
    height: 250,
    borderTopEndRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  barText: {
    width: 360,
    height: 35,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  carImage: {
    width: 300,
    height: 150,
  },
  heart: {
    width: 30,
    height: 28,
  },
  Image: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: 10,
    height: 150,
  },
  NameAvaib: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 180,
  },
  PriceStar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviews: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  avaible: {
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
  },
  carPrice: {
    fontSize: 17,
    paddingLeft: width * 0.5,
    fontWeight: "bold",
    color: "#6C77BF",
  },
});

export default CardCar;
