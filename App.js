import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import FavoriteInput from "./components/FavoriteInput";
import FavoriteItem from "./components/FavoriteItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseFavorites, setCourseFavorites] = useState([]);

  function startAddFavoriteHandler() {
    setModalIsVisible(true);
  }

  function endAddFavoriteHandler() {
    setModalIsVisible(false);
  }

  function addFavoriteHandler(enteredCategory, enteredValue) {
    setCourseFavorites((currentCourseFavorites) => [
      ...currentCourseFavorites,
      {
        id: Math.random().toString(),
        category: enteredCategory,
        value: enteredValue,
      },
    ]);
    endAddFavoriteHandler();
  }

  function deleteFavoriteHandler(id) {
    setCourseFavorites((currentCourseFavorites) => {
      return currentCourseFavorites.filter((favorite) => favorite.id !== id);
    });
  }

  function renderItem({ item }) {
    return (
      <FavoriteItem
        id={item.id}
        category={item.category}
        value={item.value}
        onDeleteItem={deleteFavoriteHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Favorite"
          color="#474"
          onPress={startAddFavoriteHandler}
        />
        {modalIsVisible && (
          <FavoriteInput
            visible={modalIsVisible}
            onAddFavorite={addFavoriteHandler}
            onCancel={endAddFavoriteHandler}
          />
        )}
        <View style={styles.favoritesContainer}>
          <FlatList
            data={courseFavorites}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#333",
  },
  favoritesContainer: {
    flex: 5,
    marginVertical: 8,
  },
});
