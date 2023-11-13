import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import CardCar from "../components/CardCar.jsx";
import { useDispatch, useSelector } from "react-redux";
import back from "../assets/back.png";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import star from "../assets/star.jpg";
function FiltredCar() {
  const navigation = useNavigation();

  const avaibleCar = useSelector((state) => state.booking.avaibleCar);
  console.log(avaibleCar, "avaible");

  return (
    <View style={styles.homePage}>
      <ScrollView>
        <View>
          {avaibleCar
            ? avaibleCar.map((element, i) => (
                <View key={i} style={styles.all}>
                  <View style={styles.carCard}>
                    <View style={styles.items}>
                      <View style={styles.deleted2}></View>
                      <Image
                        style={styles.car}
                        source={{
                          uri: element.Media[0]?.media,
                        }}
                      />
                      <View style={styles.detail}>
                        <Text style={styles.title}>{element.model}</Text>
                        <View style={styles.stars}>
                          <Image style={styles.star} source={star} />
                          <Image style={styles.star} source={star} />
                          <Image style={styles.star} source={star} />
                          <Image style={styles.star} source={star} />
                          <Image style={styles.star} source={star} />
                        </View>

                        <Text style={styles.price}>
                          ${element.price}/{element.period}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            : null}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: "rgb(219, 217, 224)",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  all: {
    paddingBottom: 20,
  },
  backImage: {
    width: 22,
    height: 20,
    justifyContent: "flex-start",
  },
  favoriteCar: {
    marginBottom: 10,
  },
  messageContainer: {
    paddingTop: 15,
  },
  carImage: {
    width: 100,
    height: 100,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "grey",
  },

  message: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  emptyText1: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",

    color: "grey",
  },
  favouriteText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  carCard: {
    marginTop: "7%",
    borderColor: "grey",
    borderWidth: 2,
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  car: {
    width: 180,
    height: 120,

    borderRadius: 7,
  },
  star: {
    width: 15,
    height: 15,
  },
  items: {
    flexDirection: "row",
  },
  stars: {
    flexDirection: "row",
    gap: 3,
  },
  detail: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    width: 140,
    gap: 7,
    padding: 8,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  agencyName: {
    color: "lightgrey",
    fontSize: 14,
  },
  price: {
    color: "blue",
  },
  delete: {
    justifyContent: "flex-end",
    width: 20,
    height: 20,
  },

  deleted2: {
    width: 320,
    height: 10,
    position: "absolute",
    alignItems: "flex-end",
  },
});

export default FiltredCar;
