/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CreatorDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorDetailsUpdateFormInputValues = {
    creator_id?: string;
    identity1?: string;
    identity2?: string;
    identity3?: string;
    identity4?: string;
    identity5?: string;
    keyword1?: string;
    keyword2?: string;
    keyword3?: string;
    keyword4?: string;
    keyword5?: string;
    instagram_id?: string;
    youtube_id?: string;
    linkedin_id?: string;
    twitter_id?: string;
    facebook_id?: string;
    youtube_link1?: string;
    youtube_link2?: string;
    youtube_link3?: string;
    linkedin_link1?: string;
    linkedin_link2?: string;
    linkedin_link3?: string;
    twitter_link1?: string;
    twitter_link2?: string;
    twitter_link3?: string;
    facebook_link1?: string;
    facebook_link2?: string;
    facebook_link3?: string;
};
export declare type CreatorDetailsUpdateFormValidationValues = {
    creator_id?: ValidationFunction<string>;
    identity1?: ValidationFunction<string>;
    identity2?: ValidationFunction<string>;
    identity3?: ValidationFunction<string>;
    identity4?: ValidationFunction<string>;
    identity5?: ValidationFunction<string>;
    keyword1?: ValidationFunction<string>;
    keyword2?: ValidationFunction<string>;
    keyword3?: ValidationFunction<string>;
    keyword4?: ValidationFunction<string>;
    keyword5?: ValidationFunction<string>;
    instagram_id?: ValidationFunction<string>;
    youtube_id?: ValidationFunction<string>;
    linkedin_id?: ValidationFunction<string>;
    twitter_id?: ValidationFunction<string>;
    facebook_id?: ValidationFunction<string>;
    youtube_link1?: ValidationFunction<string>;
    youtube_link2?: ValidationFunction<string>;
    youtube_link3?: ValidationFunction<string>;
    linkedin_link1?: ValidationFunction<string>;
    linkedin_link2?: ValidationFunction<string>;
    linkedin_link3?: ValidationFunction<string>;
    twitter_link1?: ValidationFunction<string>;
    twitter_link2?: ValidationFunction<string>;
    twitter_link3?: ValidationFunction<string>;
    facebook_link1?: ValidationFunction<string>;
    facebook_link2?: ValidationFunction<string>;
    facebook_link3?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorDetailsUpdateFormOverridesProps = {
    CreatorDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    creator_id?: PrimitiveOverrideProps<TextFieldProps>;
    identity1?: PrimitiveOverrideProps<TextFieldProps>;
    identity2?: PrimitiveOverrideProps<TextFieldProps>;
    identity3?: PrimitiveOverrideProps<TextFieldProps>;
    identity4?: PrimitiveOverrideProps<TextFieldProps>;
    identity5?: PrimitiveOverrideProps<TextFieldProps>;
    keyword1?: PrimitiveOverrideProps<TextFieldProps>;
    keyword2?: PrimitiveOverrideProps<TextFieldProps>;
    keyword3?: PrimitiveOverrideProps<TextFieldProps>;
    keyword4?: PrimitiveOverrideProps<TextFieldProps>;
    keyword5?: PrimitiveOverrideProps<TextFieldProps>;
    instagram_id?: PrimitiveOverrideProps<TextFieldProps>;
    youtube_id?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin_id?: PrimitiveOverrideProps<TextFieldProps>;
    twitter_id?: PrimitiveOverrideProps<TextFieldProps>;
    facebook_id?: PrimitiveOverrideProps<TextFieldProps>;
    youtube_link1?: PrimitiveOverrideProps<TextFieldProps>;
    youtube_link2?: PrimitiveOverrideProps<TextFieldProps>;
    youtube_link3?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin_link1?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin_link2?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin_link3?: PrimitiveOverrideProps<TextFieldProps>;
    twitter_link1?: PrimitiveOverrideProps<TextFieldProps>;
    twitter_link2?: PrimitiveOverrideProps<TextFieldProps>;
    twitter_link3?: PrimitiveOverrideProps<TextFieldProps>;
    facebook_link1?: PrimitiveOverrideProps<TextFieldProps>;
    facebook_link2?: PrimitiveOverrideProps<TextFieldProps>;
    facebook_link3?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreatorDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    creatorDetails?: CreatorDetails;
    onSubmit?: (fields: CreatorDetailsUpdateFormInputValues) => CreatorDetailsUpdateFormInputValues;
    onSuccess?: (fields: CreatorDetailsUpdateFormInputValues) => void;
    onError?: (fields: CreatorDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorDetailsUpdateFormInputValues) => CreatorDetailsUpdateFormInputValues;
    onValidate?: CreatorDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorDetailsUpdateForm(props: CreatorDetailsUpdateFormProps): React.ReactElement;
