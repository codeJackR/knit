/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Creator, CreatorDetails } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfilePageOverridesProps = {
    ProfilePage?: PrimitiveOverrideProps<ViewProps>;
    "Creator Backgroud Image"?: PrimitiveOverrideProps<ImageProps>;
    "Creator Navigation Bar"?: PrimitiveOverrideProps<FlexProps>;
    "Meet Tab"?: PrimitiveOverrideProps<FlexProps>;
    "Meet FirstName"?: PrimitiveOverrideProps<TextProps>;
    "Instagram Tab"?: PrimitiveOverrideProps<FlexProps>;
    InstagramIcon?: PrimitiveOverrideProps<ImageProps>;
    insta_id?: PrimitiveOverrideProps<TextProps>;
    "Youtube Tab"?: PrimitiveOverrideProps<FlexProps>;
    YoutubeIcon?: PrimitiveOverrideProps<ImageProps>;
    youtube_id?: PrimitiveOverrideProps<TextProps>;
    Identities?: PrimitiveOverrideProps<FlexProps>;
    "Identity 1"?: PrimitiveOverrideProps<TextProps>;
    "Identity 2"?: PrimitiveOverrideProps<TextProps>;
    "Identity 3"?: PrimitiveOverrideProps<TextProps>;
    "Identity 4"?: PrimitiveOverrideProps<TextProps>;
    "Identity 5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfilePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    creator?: Creator;
    creatorDetails?: CreatorDetails;
} & {
    overrides?: ProfilePageOverridesProps | undefined | null;
}>;
export default function ProfilePage(props: ProfilePageProps): React.ReactElement;
