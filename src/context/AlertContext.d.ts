import { AlertTypes } from "../types";
interface ProviderAlertType extends AlertTypes {
    showAlert?: boolean;
    setShowAlert?: (show: boolean) => void;
}
type AlertContextType = {
    showAlert: (props: ProviderAlertType) => void;
    hideAlert: () => void;
};
export declare const AlertContext: () => AlertContextType, AlertContextProvider: import("react").Provider<AlertContextType>;
export {};
