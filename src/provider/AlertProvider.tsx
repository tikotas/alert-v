import React, {FC, PropsWithChildren, useCallback, useMemo, useState} from "react"
import {AlertContextProvider} from "../context/AlertContext"
import {CustomAlert} from "../components/CustomAlert"
import {AlertProps} from "../types"

let showAlertGlobally: (props: AlertProps) => void = () => {
    throw new Error("showAlert not initialized")
}

let hideAlertGlobally: () => void = () => {
    throw new Error("hideAlert not initialized")
}

export const AlertProvider: FC<PropsWithChildren> = ({children}) => {

    const [alertState, setAlertState] = useState<AlertProps>({
        title: "",
        showAlert: false,
    })

    const showAlert = (props: AlertProps) => {
        setAlertState({
            ...props,
            showAlert: true,
        })
    }

    const hideAlert = useCallback(() => {
        setAlertState((prevState: AlertProps) => ({
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
    show: (props: AlertProps) => {
        showAlertGlobally(props)
    },

    hide: () => {
        hideAlertGlobally()
    },
}
