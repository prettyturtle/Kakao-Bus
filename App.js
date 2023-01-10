import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import BusInfo from './BusInfo';
import { COLOR } from './color';
import { busStop, getSections, getBusNumColorByType, getRemainedTimeText, getSeatStatusText } from './data';
import dayjs from 'dayjs';

export default function App() {

  const renderItem = ({ item: bus }) => {
    const now = dayjs()
    const numColor = getBusNumColorByType(bus.type)

    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null
    const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null
    const newNextBusInfos = !firstNextBusInfo && !secondNextBusInfo ? [null] : [firstNextBusInfo, secondNextBusInfo]

    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info) {
        return { hasInfo: false }
      }

      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info
      const remainedTimeText = getRemainedTimeText(now, arrivalTime)
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers)
      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        numOfPassengers
      }
    })
    return (
      <BusInfo
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => { }}
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfos={processedNextBusInfos}
      />
    )
  }
  const sections = getSections(busStop.buses)
  return (
    <SafeAreaView style={styles.container}>

      <SectionList
        style={{ flex: 1, width: "100%" }}
        sections={sections}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
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
