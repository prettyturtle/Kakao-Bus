import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { COLOR } from "./color"

export default ({
  onPress,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Ionicons
        name="alarm-outline"
        size={24}
        color={COLOR.GRAY_3}
        style={style}
      />
    </TouchableOpacity>
  )
}