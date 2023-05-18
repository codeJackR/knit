/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorCreateFormInputValues = {
    username?: string;
    email_id?: string;
    first_name?: string;
    last_name?: string;
    location?: string;
    is_test_account?: boolean;
};
export declare type CreatorCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    email_id?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    is_test_account?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorCreateFormOverridesProps = {
    CreatorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email_id?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    is_test_account?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CreatorCreateFormProps = React.PropsWithChildren<{
    overrides?: CreatorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreatorCreateFormInputValues) => CreatorCreateFormInputValues;
    onSuccess?: (fields: CreatorCreateFormInputValues) => void;
    onError?: (fields: CreatorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreatorCreateFormInputValues) => CreatorCreateFormInputValues;
    onValidate?: CreatorCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorCreateForm(props: CreatorCreateFormProps): React.ReactElement;
