import { View } from "react-native"
import BookmarkButton from "./BookmarkButton"

export default ({
  isBookmarked,
  onPressBookmark
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <BookmarkButton
          isBookmarked={isBookmarked}
          onPress={onPressBookmark}
        />
      </View>
      <View style={{ flex: 1 }}>

      </View>
    </View>
  )
}