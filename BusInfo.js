import { View, Text } from "react-native"
import BookmarkButton from "./BookmarkButton"
import { COLOR } from "./color"
import AlarmButton from "./AlarmButton"
import NextBusInfo from "./NextBusInfo"

export default ({
  isBookmarked,
  onPressBookmark,
  num,
  numColor,
  directionDescription,
  processedNextBusInfos
}) => {
  return (
    <View style={{ flexDirection: "row", height: 75, backgroundColor: COLOR.WHITE }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {/* 북마크 */}
        <BookmarkButton
          size={20}
          isBookmarked={isBookmarked}
          onPress={onPressBookmark}
          style={{ paddingHorizontal: 10 }}
        />
        {/* 버스 번호, 방향 */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Text style={{ color: COLOR.GRAY_3, fontSize: 13, marginRight: 5 }}>{directionDescription} 방향</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
        {processedNextBusInfos.map((info, index) => (
            // M분 S초 / N번째 전 / 여유
            <NextBusInfo
              key={index}
              hasInfo={info.hasInfo}
              remainedTimeText={info.remainedTimeText}
              numOfRemainedStops={info.numOfRemainedStops}
              seatStatusText={info.seatStatusText}
            />
          ))
          }
        </View>
        {/* 알람 아이콘 */}
        <AlarmButton
          onPress={() => {}}
          style={{ paddingHorizontal: 15 }}
        />
      </View>
    </View>
  )
}