/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Creator, CreatorDetails } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfilePageOverridesProps = {
    ProfilePage?: PrimitiveOverrideProps<FlexProps>;
    Overview?: PrimitiveOverrideProps<ViewProps>;
    "Creator Backgroud Image"?: PrimitiveOverrideProps<ImageProps>;
    "Edit Profile Button"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Creator Navigation Bar"?: PrimitiveOverrideProps<FlexProps>;
    "Meet Tab"?: PrimitiveOverrideProps<FlexProps>;
    "Meet FirstName"?: PrimitiveOverrideProps<TextProps>;
    "Instagram Tab"?: PrimitiveOverrideProps<FlexProps>;
    InstagramIcon?: PrimitiveOverrideProps<ImageProps>;
    insta_id?: PrimitiveOverrideProps<TextProps>;
    "Youtube Tab"?: PrimitiveOverrideProps<FlexProps>;
    YoutubeIcon36102787?: PrimitiveOverrideProps<ImageProps>;
    youtube_id?: PrimitiveOverrideProps<TextProps>;
    "Linkedin Tab"?: PrimitiveOverrideProps<FlexProps>;
    YoutubeIcon38485274?: PrimitiveOverrideProps<ImageProps>;
    linkedin_id?: PrimitiveOverrideProps<TextProps>;
    "Twitter Tab"?: PrimitiveOverrideProps<FlexProps>;
    YoutubeIcon38485277?: PrimitiveOverrideProps<ImageProps>;
    twitter_id?: PrimitiveOverrideProps<TextProps>;
    "Facebook Tab"?: PrimitiveOverrideProps<FlexProps>;
    YoutubeIcon38485280?: PrimitiveOverrideProps<ImageProps>;
    facebook_id?: PrimitiveOverrideProps<TextProps>;
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
    scrollToMeetCreator?: (event: SyntheticEvent) => void;
    editUserProfile?: (event: SyntheticEvent) => void;
} & {
    overrides?: ProfilePageOverridesProps | undefined | null;
}>;
export default function ProfilePage(props: ProfilePageProps): React.ReactElement;
