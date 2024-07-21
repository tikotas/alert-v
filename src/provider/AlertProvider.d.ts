import { FC, PropsWithChildren } from "react";
import { AlertProps } from "../types";
export declare const AlertProvider: FC<PropsWithChildren>;
export declare const AlertCustom: {
    show: (props: AlertProps) => void;
    hide: () => void;
};
