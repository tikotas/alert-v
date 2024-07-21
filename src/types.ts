import {TextStyle, ViewStyle} from "react-native"


export type AlertProps = {
    showAlert?: boolean
    setShowAlert?: (show: boolean) => void
    textWrapperStyle?: ViewStyle
    title: string
    titleStyle?: TextStyle
    subTitle?: string
    subTitleStyle?: TextStyle
    cancelButtonTitle?: string
    cancelStyle?: TextStyle
    confirmButtonTitle?: string
    confirmStyle?: TextStyle
    cancelOnPress?: () => void
    confirmOnPress?: () => void
    singleButton?: boolean
    backdropPress?: boolean
}