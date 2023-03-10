/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Creator, CreatorDetails } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfilePageOverridesProps = {
    ProfilePage?: PrimitiveOverrideProps<FlexProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Left Profile Bar"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 17"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 12"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<ViewProps>;
    "julian-wan-WNoLnJo7tS8-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 11"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "Full Name"?: PrimitiveOverrideProps<TextProps>;
    "Frame 9"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    Vector35832954?: PrimitiveOverrideProps<IconProps>;
    Location?: PrimitiveOverrideProps<TextProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    "Frame 835832957"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    Follow?: PrimitiveOverrideProps<TextProps>;
    "Frame 835832960"?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<TextProps>;
    "Frame 15"?: PrimitiveOverrideProps<FlexProps>;
    website?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    insta_id35832967?: PrimitiveOverrideProps<TextProps>;
    "Frame 14"?: PrimitiveOverrideProps<FlexProps>;
    "image 3"?: PrimitiveOverrideProps<ImageProps>;
    youtube_id35832970?: PrimitiveOverrideProps<TextProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 23"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 18"?: PrimitiveOverrideProps<FlexProps>;
    Keyword35832974?: PrimitiveOverrideProps<TextProps>;
    "Frame 19"?: PrimitiveOverrideProps<FlexProps>;
    Keyword35832976?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    Keyword35832978?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 21"?: PrimitiveOverrideProps<FlexProps>;
    Keyword35832981?: PrimitiveOverrideProps<TextProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    Keyword35832983?: PrimitiveOverrideProps<TextProps>;
    "Creator Block"?: PrimitiveOverrideProps<ViewProps>;
    "Creator Background Image"?: PrimitiveOverrideProps<FlexProps>;
    "Creator Backgroud Image"?: PrimitiveOverrideProps<ImageProps>;
    "Creator Block Sections"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Creator Navigation Bar"?: PrimitiveOverrideProps<ViewProps>;
    "Youtube Tab"?: PrimitiveOverrideProps<FlexProps>;
    YoutubeIconImageLarge?: PrimitiveOverrideProps<ImageProps>;
    youtube_id35832994?: PrimitiveOverrideProps<TextProps>;
    "Instagram Tab"?: PrimitiveOverrideProps<FlexProps>;
    InstagramIconImageLarge?: PrimitiveOverrideProps<ImageProps>;
    insta_id35832991?: PrimitiveOverrideProps<TextProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Meet FirstName"?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Edit Profile Icon"?: PrimitiveOverrideProps<FlexProps>;
    Vector35833001?: PrimitiveOverrideProps<IconProps>;
    Identities?: PrimitiveOverrideProps<FlexProps>;
    "Identity 1"?: PrimitiveOverrideProps<TextProps>;
    "Identity 2"?: PrimitiveOverrideProps<TextProps>;
    "Identity 3"?: PrimitiveOverrideProps<TextProps>;
    "Identity 4"?: PrimitiveOverrideProps<TextProps>;
    "Identity 5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfilePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    creator?: Creator;
    creatorDetails?: CreatorDetails;
} & {
    overrides?: ProfilePageOverridesProps | undefined | null;
}>;
export default function ProfilePage(props: ProfilePageProps): React.ReactElement;
