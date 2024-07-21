import {TextStyle, ViewStyle} from "react-native"

export type AlertTypes = {
    modalTransparencyStyle?: ViewStyle
    containerStyle?: ViewStyle
    textWrapperStyle?: ViewStyle
    title: string
    titleStyle?: TextStyle
    subTitle?: string
    subTitleStyle?: TextStyle
    cancelButtonTitle?: string
    cancelStyle?: TextStyle
    confirmButtonTitle?: string
    confirmStyle?: TextStyle
    cancelOnPress: () => void
    confirmOnPress?: () => void
    singleButton?: boolean
    backdropPress?: boolean
}