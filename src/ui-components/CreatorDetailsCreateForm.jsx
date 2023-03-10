/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CreatorDetails } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreatorDetailsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    creator_id: "",
    identity1: "",
    identity2: "",
    identity3: "",
    identity4: "",
    identity5: "",
    keyword1: "",
    keyword2: "",
    keyword3: "",
    keyword4: "",
    keyword5: "",
    instagram_id: "",
    youtube_id: "",
  };
  const [creator_id, setCreator_id] = React.useState(initialValues.creator_id);
  const [identity1, setIdentity1] = React.useState(initialValues.identity1);
  const [identity2, setIdentity2] = React.useState(initialValues.identity2);
  const [identity3, setIdentity3] = React.useState(initialValues.identity3);
  const [identity4, setIdentity4] = React.useState(initialValues.identity4);
  const [identity5, setIdentity5] = React.useState(initialValues.identity5);
  const [keyword1, setKeyword1] = React.useState(initialValues.keyword1);
  const [keyword2, setKeyword2] = React.useState(initialValues.keyword2);
  const [keyword3, setKeyword3] = React.useState(initialValues.keyword3);
  const [keyword4, setKeyword4] = React.useState(initialValues.keyword4);
  const [keyword5, setKeyword5] = React.useState(initialValues.keyword5);
  const [instagram_id, setInstagram_id] = React.useState(
    initialValues.instagram_id
  );
  const [youtube_id, setYoutube_id] = React.useState(initialValues.youtube_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreator_id(initialValues.creator_id);
    setIdentity1(initialValues.identity1);
    setIdentity2(initialValues.identity2);
    setIdentity3(initialValues.identity3);
    setIdentity4(initialValues.identity4);
    setIdentity5(initialValues.identity5);
    setKeyword1(initialValues.keyword1);
    setKeyword2(initialValues.keyword2);
    setKeyword3(initialValues.keyword3);
    setKeyword4(initialValues.keyword4);
    setKeyword5(initialValues.keyword5);
    setInstagram_id(initialValues.instagram_id);
    setYoutube_id(initialValues.youtube_id);
    setErrors({});
  };
  const validations = {
    creator_id: [],
    identity1: [],
    identity2: [],
    identity3: [],
    identity4: [],
    identity5: [],
    keyword1: [],
    keyword2: [],
    keyword3: [],
    keyword4: [],
    keyword5: [],
    instagram_id: [],
    youtube_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          creator_id,
          identity1,
          identity2,
          identity3,
          identity4,
          identity5,
          keyword1,
          keyword2,
          keyword3,
          keyword4,
          keyword5,
          instagram_id,
          youtube_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new CreatorDetails(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreatorDetailsCreateForm")}
      {...rest}
    >
      <TextField
        label="Creator id"
        isRequired={false}
        isReadOnly={false}
        value={creator_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id: value,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.creator_id ?? value;
          }
          if (errors.creator_id?.hasError) {
            runValidationTasks("creator_id", value);
          }
          setCreator_id(value);
        }}
        onBlur={() => runValidationTasks("creator_id", creator_id)}
        errorMessage={errors.creator_id?.errorMessage}
        hasError={errors.creator_id?.hasError}
        {...getOverrideProps(overrides, "creator_id")}
      ></TextField>
      <TextField
        label="Identity1"
        isRequired={false}
        isReadOnly={false}
        value={identity1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1: value,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.identity1 ?? value;
          }
          if (errors.identity1?.hasError) {
            runValidationTasks("identity1", value);
          }
          setIdentity1(value);
        }}
        onBlur={() => runValidationTasks("identity1", identity1)}
        errorMessage={errors.identity1?.errorMessage}
        hasError={errors.identity1?.hasError}
        {...getOverrideProps(overrides, "identity1")}
      ></TextField>
      <TextField
        label="Identity2"
        isRequired={false}
        isReadOnly={false}
        value={identity2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2: value,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.identity2 ?? value;
          }
          if (errors.identity2?.hasError) {
            runValidationTasks("identity2", value);
          }
          setIdentity2(value);
        }}
        onBlur={() => runValidationTasks("identity2", identity2)}
        errorMessage={errors.identity2?.errorMessage}
        hasError={errors.identity2?.hasError}
        {...getOverrideProps(overrides, "identity2")}
      ></TextField>
      <TextField
        label="Identity3"
        isRequired={false}
        isReadOnly={false}
        value={identity3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3: value,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.identity3 ?? value;
          }
          if (errors.identity3?.hasError) {
            runValidationTasks("identity3", value);
          }
          setIdentity3(value);
        }}
        onBlur={() => runValidationTasks("identity3", identity3)}
        errorMessage={errors.identity3?.errorMessage}
        hasError={errors.identity3?.hasError}
        {...getOverrideProps(overrides, "identity3")}
      ></TextField>
      <TextField
        label="Identity4"
        isRequired={false}
        isReadOnly={false}
        value={identity4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4: value,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.identity4 ?? value;
          }
          if (errors.identity4?.hasError) {
            runValidationTasks("identity4", value);
          }
          setIdentity4(value);
        }}
        onBlur={() => runValidationTasks("identity4", identity4)}
        errorMessage={errors.identity4?.errorMessage}
        hasError={errors.identity4?.hasError}
        {...getOverrideProps(overrides, "identity4")}
      ></TextField>
      <TextField
        label="Identity5"
        isRequired={false}
        isReadOnly={false}
        value={identity5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5: value,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.identity5 ?? value;
          }
          if (errors.identity5?.hasError) {
            runValidationTasks("identity5", value);
          }
          setIdentity5(value);
        }}
        onBlur={() => runValidationTasks("identity5", identity5)}
        errorMessage={errors.identity5?.errorMessage}
        hasError={errors.identity5?.hasError}
        {...getOverrideProps(overrides, "identity5")}
      ></TextField>
      <TextField
        label="Keyword1"
        isRequired={false}
        isReadOnly={false}
        value={keyword1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1: value,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.keyword1 ?? value;
          }
          if (errors.keyword1?.hasError) {
            runValidationTasks("keyword1", value);
          }
          setKeyword1(value);
        }}
        onBlur={() => runValidationTasks("keyword1", keyword1)}
        errorMessage={errors.keyword1?.errorMessage}
        hasError={errors.keyword1?.hasError}
        {...getOverrideProps(overrides, "keyword1")}
      ></TextField>
      <TextField
        label="Keyword2"
        isRequired={false}
        isReadOnly={false}
        value={keyword2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2: value,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.keyword2 ?? value;
          }
          if (errors.keyword2?.hasError) {
            runValidationTasks("keyword2", value);
          }
          setKeyword2(value);
        }}
        onBlur={() => runValidationTasks("keyword2", keyword2)}
        errorMessage={errors.keyword2?.errorMessage}
        hasError={errors.keyword2?.hasError}
        {...getOverrideProps(overrides, "keyword2")}
      ></TextField>
      <TextField
        label="Keyword3"
        isRequired={false}
        isReadOnly={false}
        value={keyword3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3: value,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.keyword3 ?? value;
          }
          if (errors.keyword3?.hasError) {
            runValidationTasks("keyword3", value);
          }
          setKeyword3(value);
        }}
        onBlur={() => runValidationTasks("keyword3", keyword3)}
        errorMessage={errors.keyword3?.errorMessage}
        hasError={errors.keyword3?.hasError}
        {...getOverrideProps(overrides, "keyword3")}
      ></TextField>
      <TextField
        label="Keyword4"
        isRequired={false}
        isReadOnly={false}
        value={keyword4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4: value,
              keyword5,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.keyword4 ?? value;
          }
          if (errors.keyword4?.hasError) {
            runValidationTasks("keyword4", value);
          }
          setKeyword4(value);
        }}
        onBlur={() => runValidationTasks("keyword4", keyword4)}
        errorMessage={errors.keyword4?.errorMessage}
        hasError={errors.keyword4?.hasError}
        {...getOverrideProps(overrides, "keyword4")}
      ></TextField>
      <TextField
        label="Keyword5"
        isRequired={false}
        isReadOnly={false}
        value={keyword5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5: value,
              instagram_id,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.keyword5 ?? value;
          }
          if (errors.keyword5?.hasError) {
            runValidationTasks("keyword5", value);
          }
          setKeyword5(value);
        }}
        onBlur={() => runValidationTasks("keyword5", keyword5)}
        errorMessage={errors.keyword5?.errorMessage}
        hasError={errors.keyword5?.hasError}
        {...getOverrideProps(overrides, "keyword5")}
      ></TextField>
      <TextField
        label="Instagram id"
        isRequired={false}
        isReadOnly={false}
        value={instagram_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id: value,
              youtube_id,
            };
            const result = onChange(modelFields);
            value = result?.instagram_id ?? value;
          }
          if (errors.instagram_id?.hasError) {
            runValidationTasks("instagram_id", value);
          }
          setInstagram_id(value);
        }}
        onBlur={() => runValidationTasks("instagram_id", instagram_id)}
        errorMessage={errors.instagram_id?.errorMessage}
        hasError={errors.instagram_id?.hasError}
        {...getOverrideProps(overrides, "instagram_id")}
      ></TextField>
      <TextField
        label="Youtube id"
        isRequired={false}
        isReadOnly={false}
        value={youtube_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              creator_id,
              identity1,
              identity2,
              identity3,
              identity4,
              identity5,
              keyword1,
              keyword2,
              keyword3,
              keyword4,
              keyword5,
              instagram_id,
              youtube_id: value,
            };
            const result = onChange(modelFields);
            value = result?.youtube_id ?? value;
          }
          if (errors.youtube_id?.hasError) {
            runValidationTasks("youtube_id", value);
          }
          setYoutube_id(value);
        }}
        onBlur={() => runValidationTasks("youtube_id", youtube_id)}
        errorMessage={errors.youtube_id?.errorMessage}
        hasError={errors.youtube_id?.hasError}
        {...getOverrideProps(overrides, "youtube_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
