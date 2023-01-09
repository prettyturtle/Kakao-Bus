import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { COLOR } from "./color"

export default ({
  onPress,
  isBookmarked
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Ionicons
        name="star"
        size={24}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1}
      />
    </TouchableOpacity>
  )
}