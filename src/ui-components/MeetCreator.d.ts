/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Creator } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetCreatorOverridesProps = {
    MeetCreator?: PrimitiveOverrideProps<FlexProps>;
    "photo-1548690312-e3b507d8c110 1"?: PrimitiveOverrideProps<ImageProps>;
    "Meet Creator Block"?: PrimitiveOverrideProps<FlexProps>;
    "Meet Creator Text"?: PrimitiveOverrideProps<TextProps>;
    "Meet Creator Description"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MeetCreatorProps = React.PropsWithChildren<Partial<FlexProps> & {
    creator?: Creator;
} & {
    overrides?: MeetCreatorOverridesProps | undefined | null;
}>;
export default function MeetCreator(props: MeetCreatorProps): React.ReactElement;
