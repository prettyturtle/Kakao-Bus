import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BusInfo from './BusInfo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BusInfo
        isBookmarked={false}
        onPressBookmark={() => {}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
