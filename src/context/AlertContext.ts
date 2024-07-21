import createGenericContext from "../utils/createGenericContext"
import {AlertProps} from "../types"

type AlertContextType = {
    showAlert: (props: AlertProps) => void
    hideAlert: () => void
}


export const [AlertContext, AlertContextProvider] =
    createGenericContext<AlertContextType>("AlertContext")
