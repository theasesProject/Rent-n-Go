import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import filter from "../assets/filter.png";
import { useState } from "react";
import { DOMAIN_NAME } from "../env";
import axios from "axios";
function SearchBar({ onSearch }) {
  const [searchedCar, setSearchedCar] = useState("");

  const handleSearch = (text) => {
    setSearchedCar(text);
    searchCarsByModel(text);
  };

  const searchCarsByModel = async (model) => {
    try {
      const response = await axios.get(
        `http://${DOMAIN_NAME}:5000/searchName/${model}`
      );
      onSearch(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.searchBar}>
      {/* <View style={styles.searchDetails}> */}
      {/* <Text style={styles.FirstText}>Select or search your</Text>
        <Text style={styles.FirstText}>favourite location</Text> */}
      <View style={styles.inputAndButton}>
        <TextInput
          onChangeText={handleSearch}
          style={styles.input}
          value={searchedCar}
          placeholder="Search"
        />
        <View style={styles.filterImage}>
          <Image source={filter} style={styles.filter}></Image>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "rgb(237, 238, 247)",
    width: "90%",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  input: {
    backgroundColor: "rgb(219, 217, 224)",
    height: 50,
    borderRadius: 10,
    width: "75%",
    paddingHorizontal: 10,
  },
  searchDetails: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  FirstText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  filterImage: {
    width: 50,
    height: 50,
    backgroundColor: "rgb(106,119,197)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputAndButton: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  filter: {
    width: 20,
    height: 20,
  },
});

export default SearchBar;
