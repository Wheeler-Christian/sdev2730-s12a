import { StyleSheet, View, Text, Pressable } from "react-native";

function FavoriteItem(props) {
  return (
    <View style={styles.favoriteItem}>
      <Pressable
        android_ripple={{ color: "#114411" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.sideBySide}>
          <Text style={styles.favoriteText}>Favorite {props.category}</Text>
          <Text style={styles.favoriteText}>{props.value}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default FavoriteItem;

const styles = StyleSheet.create({
  favoriteItem: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: "#334433",
  },
  pressedItem: {
    opacity: 0.5,
  },
  sideBySide: {
    flexDirection: "row",
  },
  favoriteText: {
    color: "white",
    padding: 8,
    flex: 1,
  },
});
