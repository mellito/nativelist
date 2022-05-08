import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Data from "../data";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    paddingHorizontal: 5,
    paddingTop: 50,

    backgroundColor: "rgb(0, 0, 0)",
  },
  container: {
    height: 250,
    backgroundColor: "rgb(159, 166, 161)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 5,
    paddingTop: 20,
    paddingBottom: 50,
    border: "1px solid rgb(0,0,0)",
    flexDirection: "row",
  },
  containerimg: {
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
    height: 200,
  },
  img: {
    width: 120,
    height: 200,

    resizeMode: "cover",
  },
  information: {
    flex: 2,
    width: 150,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  tags: {
    margin: 2,
    padding: 5,
    backgroundColor: "grey",
    color: "white",
    borderRadius: 5,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentslenght: {
    paddingLeft: 5,
  },
});

const Itemlist = () => {
  return (
    <FlatList
      style={styles.main}
      data={Data}
      renderItem={({ item }) => (
        <View style={styles.container} key={item.id}>
          <View style={styles.containerimg}>
            <Image style={styles.img} source={{ uri: item.picture }} />
          </View>
          <View style={styles.information}>
            <View>
              <Text style={styles.title}>{item.about.slice(0, 60)}</Text>
              <Text>by {item.author}</Text>
            </View>
            <Text>
              {item.tags.map((tag) => (
                <View>
                  <Text style={styles.tags} key={tag.id}>
                    {tag}
                  </Text>
                </View>
              ))}
            </Text>
            <View style={styles.comments}>
              <Icon size={24} color="black" name="comments" />
              <Text style={styles.commentslenght}>
                {" "}
                {item.comments.length} comments
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default Itemlist;
