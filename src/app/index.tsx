import { Link } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
      >
        <Link href="/page2" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex01" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX1</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex02" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX2</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex03" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX3</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex04" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX4</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex05" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX5</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex06" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX6</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex07" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX7</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex08" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX8</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex09" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX9</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex10" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX10</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex11" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX11</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/ex12" asChild>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>EX12</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  link: {
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#2196F3",
    borderRadius: 8,
    width: "80%",
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
