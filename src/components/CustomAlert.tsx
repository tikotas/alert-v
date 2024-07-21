import {FC} from "react"
import {Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native"

import {customStyles} from "../utils/styleHelper"
import {COLORS} from "../constants/colors"
import {AlertTypes} from "../types"

interface ProviderAlertType extends AlertTypes {
    showAlert?: boolean
    setShowAlert?: (show: boolean) => void
}


export const CustomAlert: FC<ProviderAlertType> = (
    {
        showAlert = false,
        setShowAlert,
        modalTransparencyStyle,
        containerStyle,
        textWrapperStyle,
        title,
        titleStyle,
        subTitle,
        subTitleStyle,
        cancelButtonTitle,
        cancelStyle,
        confirmButtonTitle,
        confirmStyle,
        cancelOnPress,
        confirmOnPress,
        singleButton = false,
        backdropPress = false,
    }) => {

    const handleCancel = () => {
        if (cancelOnPress) {
            cancelOnPress()
        }
        setShowAlert(false)
    }

    const handleConfirm = () => {
        if (confirmOnPress) {
            confirmOnPress()
        }
        setShowAlert(false)
    }

    const activateBackDropPress = () => {
        if (!backdropPress) return
        handleCancel()
    }

    return (
        <Modal
            visible={showAlert}
            onRequestClose={handleCancel}
            transparent
        >
            <TouchableOpacity
                style={styles.modalInnerTouch}
                onPress={activateBackDropPress}
                activeOpacity={1}
            >
                <View style={[styles.modalInner, modalTransparencyStyle]}>
                    <View style={[styles.blockWrapper, containerStyle]}>
                        <View style={[styles.textWrapper, textWrapperStyle]}>
                            {title && (
                                <Text style={[styles.title, titleStyle]}>
                                    {title}
                                </Text>
                            )}
                            <Text style={[styles.subTitle, subTitleStyle]}>
                                {subTitle}
                            </Text>
                        </View>
                        {singleButton ? (
                            <View style={styles.buttonGroup}>
                                <TouchableHighlight
                                    underlayColor={
                                        COLORS.modalOpacity[20]
                                    }
                                    activeOpacity={0.4}
                                    style={styles.button}
                                    onPress={handleCancel}
                                >
                                    <View>
                                        <Text
                                            style={[
                                                styles.buttonText,
                                                cancelStyle,
                                            ]}
                                        >
                                            {cancelButtonTitle}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        ) : (
                            <View style={styles.buttonGroup}>
                                <TouchableHighlight
                                    underlayColor={
                                        COLORS.modalOpacity[20]
                                    }
                                    activeOpacity={0.4}
                                    style={styles.button}
                                    onPress={handleCancel}
                                >
                                    <View>
                                        <Text
                                            style={[
                                                styles.buttonText,
                                                cancelStyle,
                                            ]}
                                        >
                                            {cancelButtonTitle}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    underlayColor={
                                        COLORS.modalOpacity[20]
                                    }
                                    activeOpacity={0.4}
                                    style={[
                                        styles.button,
                                        styles.rightButton,
                                        confirmStyle,
                                    ]}
                                    onPress={handleConfirm}
                                >
                                    <View>
                                        <Text
                                            style={[
                                                styles.buttonText,
                                                confirmStyle,
                                            ]}
                                        >
                                            {confirmButtonTitle}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalInnerTouch: {
        flex: 1,
    },

    modalInner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.modalOpacity[10],
    },

    blockWrapper: {
        borderRadius: 14,
        backgroundColor: COLORS.secondary[100],
        width: 340,
        overflow: "hidden",
    },

    textWrapper: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        ...customStyles.borderBottom(1, "solid", COLORS.secondary[80]),
    },

    title: {
        textAlign: "center",
        fontSize: 17,
        color: COLORS.white[20],
        marginBottom: 10,
    },

    subTitle: {
        textAlign: "center",
        lineHeight: 20,
        fontSize: 15,
        color: COLORS.white[20],
    },

    buttonGroup: {
        flexDirection: "row",
    },

    button: {
        flex: 1,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        fontSize: 17,
        color: COLORS.primary[5],
        textAlign: "center",
    },

    rightButton: {
        ...customStyles.borderLeft(1, "solid", COLORS.secondary[80]),
    },
})
