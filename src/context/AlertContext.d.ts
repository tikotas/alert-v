import { AlertProps } from "../types";
type AlertContextType = {
    showAlert: (props: AlertProps) => void;
    hideAlert: () => void;
};
export declare const AlertContext: () => AlertContextType, AlertContextProvider: import("react").Provider<AlertContextType>;
export {};
