/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreatorCreateFormInputValues = {
    username?: string;
    email_id?: string;
};
export declare type CreatorCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    email_id?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatorCreateFormOverridesProps = {
    CreatorCreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    email_id?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatorCreateFormProps = React.PropsWithChildren<{
    overrides?: CreatorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreatorCreateFormInputValues) => CreatorCreateFormInputValues;
    onSuccess?: (fields: CreatorCreateFormInputValues) => void;
    onError?: (fields: CreatorCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreatorCreateFormInputValues) => CreatorCreateFormInputValues;
    onValidate?: CreatorCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreatorCreateForm(props: CreatorCreateFormProps): React.ReactElement;
