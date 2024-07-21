import createGenericContext from "../utils/createGenericContext"
import {AlertTypes} from "../types"

interface ProviderAlertType extends AlertTypes {
    showAlert?: boolean
    setShowAlert?: (show: boolean) => void
}

type AlertContextType = {
    showAlert: (props: ProviderAlertType) => void
    hideAlert: () => void
}


export const [AlertContext, AlertContextProvider] =
    createGenericContext<AlertContextType>("AlertContext")
