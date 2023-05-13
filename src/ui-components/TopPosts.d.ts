/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopPostsOverridesProps = {
    TopPosts?: PrimitiveOverrideProps<FlexProps>;
    Post1?: PrimitiveOverrideProps<FlexProps>;
    Post2?: PrimitiveOverrideProps<FlexProps>;
    Post3?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type TopPostsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TopPostsOverridesProps | undefined | null;
}>;
export default function TopPosts(props: TopPostsProps): React.ReactElement;
