import { FC, PropsWithChildren } from "react";
import { AlertTypes } from "../types";
export declare const AlertProvider: FC<PropsWithChildren>;
export declare const AlertV: {
    show: (props: AlertTypes) => void;
    hide: () => void;
};
