import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function FavoriteInput(props) {
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredValue, setEnteredValue] = useState("");

  function categoryInputHandler(enteredText) {
    setEnteredCategory(enteredText);
  }

  function valueInputHandler(valueInput) {
    setEnteredValue(valueInput);
  }

  function addFavoriteHandler() {
    props.onAddFavorite(enteredCategory, enteredValue);
    setEnteredCategory("");
    setEnteredValue("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Favorite Thing, ex 'Color'"
          placeholderTextColor={"#aaa"}
          onChangeText={categoryInputHandler}
          value={enteredCategory}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Favorite Item, ex 'Green'"
          placeholderTextColor={"#aaa"}
          onChangeText={valueInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#744" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addFavoriteHandler} color="#474" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default FavoriteInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#333",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#222",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
