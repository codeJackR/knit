/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationBarOverridesProps = {
    NavigationBar?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<TextProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    Messaging?: PrimitiveOverrideProps<TextProps>;
    Connections?: PrimitiveOverrideProps<TextProps>;
    "Sign In Button"?: PrimitiveOverrideProps<FlexProps>;
    "Sign in"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavigationBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    prop?: (event: SyntheticEvent) => void;
} & {
    overrides?: NavigationBarOverridesProps | undefined | null;
}>;
export default function NavigationBar(props: NavigationBarProps): React.ReactElement;
