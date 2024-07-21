type TBorderStyles = "solid" | "dotted" | "dashed" | undefined;
export declare const customStyles: {
    border: (width?: number, style?: TBorderStyles, color?: string) => {
        borderWidth: number;
        borderStyle: TBorderStyles;
        borderColor: string;
    };
    borderBottom: (width?: number, style?: TBorderStyles, color?: string) => {
        borderBottomWidth: number;
        borderBottomStyle: TBorderStyles;
        borderBottomColor: string;
    };
    borderTop: (width?: number, style?: TBorderStyles, color?: string) => {
        borderTopWidth: number;
        borderTopStyle: TBorderStyles;
        borderTopColor: string;
    };
    borderLeft: (width?: number, style?: TBorderStyles, color?: string) => {
        borderLeftWidth: number;
        borderLeftStyle: TBorderStyles;
        borderLeftColor: string;
    };
    borderRight: (width?: number, style?: TBorderStyles, color?: string) => {
        borderRightWidth: number;
        borderRightStyle: TBorderStyles;
        borderRightColor: string;
    };
    borderRadius: (topLeft: number, topRight: number, bottomRight: number, bottomLeft: number) => {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
        borderBottomLeftRadius: number;
    };
    boxShadow: (x: number, y: number, opacity: number, radius: number, color: string) => {
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        shadowColor: string;
        elevation: number;
    };
};
export {};
