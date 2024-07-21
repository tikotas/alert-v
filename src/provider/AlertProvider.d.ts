import { FC, PropsWithChildren } from "react";
import { AlertProps } from "../types";
export declare const AlertProvider: FC<PropsWithChildren>;
export declare const AlertV: {
    show: (props: AlertProps) => void;
    hide: () => void;
};
