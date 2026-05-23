
import { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import {
    FontAwesome5,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";

export default function FoodScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: "apps" },
      { name: "Pizza", icon: "fast-food" },
    { name: "Burger", icon: "lunch-dining" },
    { name: "Drinks", icon: "local-drink" },
    { name: "Desserts", icon: "icecream" },
  ];

  const foods = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$12.99",
      rating: "4.8",
      time: "25 min",
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    },
    {
      id: 2,
      name: "Classic Burger",
      price: "$8.99",
      rating: "4.6",
      time: "15 min",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    },
    {
      id: 3,
      name: "Chicken Wings",
      price: "$10.99",
      rating: "4.9",
      time: "20 min",
      img: "https://images.unsplash.com/photo-1608033193124-5c698fa23ddc?w=400",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: "$6.99",
      rating: "4.7",
      time: "10 min",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    },
  ];

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((f) => f.name.includes(selectedCategory));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.location}>New York, USA</Text>
          </View>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#1A1A1A"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cartBtn}>
              <Ionicons name="cart-outline" size={22} color="#fff" />

              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#999" />

            <TextInput
              style={styles.searchInput}
              placeholder="Search for food..."
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#999"
            />

            <TouchableOpacity>
              <Ionicons name="options-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerTitle}>50% OFF</Text>
            <Text style={styles.bannerSubtitle}>
              On your first order
            </Text>

            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.orderBtnText}>Order Now</Text>
            </TouchableOpacity>
          </View>

          <FontAwesome5 name="hamburger" size={70} color="#fff" />
        </View>

        {/* Categories */}
        <View style={styles.titleRow}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={[
                styles.categoryBtn,
                selectedCategory === cat.name &&
                  styles.categoryBtnActive,
              ]}
              onPress={() => setSelectedCategory(cat.name)}
            >
              <MaterialIcons
                name={cat.icon as any}
                size={20}
                color={
                  selectedCategory === cat.name
                    ? "#fff"
                    : "#FF6B35"
                }
              />

              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat.name &&
                    styles.categoryTextActive,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular */}
        <View style={styles.titleRow}>
          <Text style={styles.sectionTitle}>Popular Near You</Text>
          <Text style={styles.seeAll}>View More</Text>
        </View>

        <View style={styles.foodGrid}>
          {filteredFoods.map((food) => (
            <TouchableOpacity key={food.id} style={styles.foodCard}>
              <Image
                source={{ uri: food.img }}
                style={styles.foodImage}
              />

              {/* Heart Icon */}
              <TouchableOpacity style={styles.favoriteBtn}>
                <Ionicons
                  name="heart-outline"
                  size={18}
                  color="#FF6B35"
                />
              </TouchableOpacity>

              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{food.name}</Text>

                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={14} color="#FFB800" />
                  <Text style={styles.foodRating}>
                    {food.rating}
                  </Text>

                  <View style={styles.dot} />

                  <Ionicons
                    name="time-outline"
                    size={14}
                    color="#888"
                  />
                  <Text style={styles.foodTime}>
                    {food.time}
                  </Text>
                </View>

                <View style={styles.bottomRow}>
                  <Text style={styles.foodPrice}>
                    {food.price}
                  </Text>

                  <TouchableOpacity style={styles.addBtn}>
                    <Ionicons
                      name="add"
                      size={20}
                      color="#fff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    marginBottom: 20,
  },

  greeting: {
    fontSize: 14,
    color: "#666",
  },

  location: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1A1A1A",
    marginTop: 4,
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconBtn: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  cartBtn: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#FF6B35",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  cartBadge: {
    position: "absolute",
    top: -3,
    right: -3,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  cartBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },

  searchWrapper: {
    paddingHorizontal: 20,
    marginBottom: 22,
  },

  searchBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 58,
    gap: 10,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
  },

  banner: {
    marginHorizontal: 20,
    backgroundColor: "#FF6B35",
    borderRadius: 28,
    padding: 24,
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bannerTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#fff",
  },

  bannerSubtitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
    opacity: 0.9,
  },

  orderBtn: {
    marginTop: 18,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  orderBtnText: {
    color: "#FF6B35",
    fontWeight: "700",
  },

  titleRow: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1A1A1A",
  },

  seeAll: {
    color: "#FF6B35",
    fontWeight: "600",
  },

  categories: {
    paddingLeft: 20,
    marginBottom: 26,
  },

  categoryBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    marginRight: 12,
    gap: 8,
  },

  categoryBtnActive: {
    backgroundColor: "#FF6B35",
  },

  categoryText: {
    fontWeight: "600",
    color: "#555",
  },

  categoryTextActive: {
    color: "#fff",
  },

  foodGrid: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  foodCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    marginBottom: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 4,
  },

  foodImage: {
    width: "100%",
    height: 190,
  },

  favoriteBtn: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  foodInfo: {
    padding: 18,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1A1A1A",
    marginBottom: 10,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  foodRating: {
    marginLeft: 4,
    color: "#666",
    fontWeight: "600",
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#bbb",
    marginHorizontal: 10,
  },

  foodTime: {
    marginLeft: 4,
    color: "#888",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  foodPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FF6B35",
  },

  addBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#FF6B35",
    justifyContent: "center",
    alignItems: "center",
  },
});
