import React, {FC, PropsWithChildren, useCallback, useMemo, useState} from "react"
import {AlertContextProvider} from "../context/AlertContext"
import {CustomAlert} from "../components/CustomAlert"
import {AlertTypes} from "../types"

interface ProviderAlertType extends AlertTypes {
    showAlert?: boolean
    setShowAlert?: (show: boolean) => void
}

let showAlertGlobally: (props: ProviderAlertType) => void = () => {
    throw new Error("showAlert not initialized")
}

let hideAlertGlobally: () => void = () => {
    throw new Error("hideAlert not initialized")
}

const defaultParams = {
    showAlert: false,
    setShowAlert: (show: boolean): void => {
    },
    backdropPress: false,
    singleButton: false,
    title: "My Title",
    subTitle: "My Subtitle",
    confirmButtonTitle: "Ok",
    cancelButtonTitle: "Cancel",
    cancelStyle: undefined,
    confirmStyle: undefined,
    containerStyle: undefined,
    modalTransparencyStyle: undefined,
    subTitleStyle: undefined,
    textWrapperStyle: undefined,
    titleStyle: undefined,
    cancelOnPress: () => {
    },
    confirmOnPress: () => {
    },
}

export const AlertProvider: FC<PropsWithChildren> = ({children}) => {

    const [alertState, setAlertState] = useState<ProviderAlertType>(defaultParams)

    const showAlert = (props: ProviderAlertType) => {
        setAlertState({
            ...props,
            showAlert: true,
        })
    }

    const hideAlert = useCallback(() => {
        setAlertState((prevState: ProviderAlertType) => ({
            ...prevState,
            showAlert: false,
        }))
    }, [])

    showAlertGlobally = showAlert
    hideAlertGlobally = hideAlert

    const value = useMemo(() => {
        return {showAlert, hideAlert}
    }, [])

    return (
        <AlertContextProvider value={value}>
            {children}
            {alertState.showAlert && (
                <CustomAlert {...alertState} setShowAlert={hideAlert} />
            )}
        </AlertContextProvider>
    )
}


export const AlertV = {
    show: (props: AlertTypes) => {
        showAlertGlobally(props)
    },

    hide: () => {
        hideAlertGlobally()
    },
}
