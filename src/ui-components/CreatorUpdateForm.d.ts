/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Creator } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorUpdateFormInputValues = {
    username?: string;
    email_id?: string;
    first_name?: string;
    last_name?: string;
    location?: string;
};
export declare type CreatorUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    email_id?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorUpdateFormOverridesProps = {
    CreatorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email_id?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreatorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    creator?: Creator;
    onSubmit?: (fields: CreatorUpdateFormInputValues) => CreatorUpdateFormInputValues;
    onSuccess?: (fields: CreatorUpdateFormInputValues) => void;
    onError?: (fields: CreatorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorUpdateFormInputValues) => CreatorUpdateFormInputValues;
    onValidate?: CreatorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorUpdateForm(props: CreatorUpdateFormProps): React.ReactElement;
