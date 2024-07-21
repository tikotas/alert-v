import { FC } from "react";
import { AlertTypes } from "../types";
interface ProviderAlertType extends AlertTypes {
    showAlert?: boolean;
    setShowAlert?: (show: boolean) => void;
}
export declare const CustomAlert: FC<ProviderAlertType>;
export {};
