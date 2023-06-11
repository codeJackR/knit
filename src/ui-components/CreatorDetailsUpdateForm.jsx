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
export default function CreatorDetailsUpdateForm(props) {
  const {
    id: idProp,
    creatorDetails: creatorDetailsModelProp,
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
    linkedin_id: "",
    twitter_id: "",
    facebook_id: "",
    youtube_link1: "",
    youtube_link2: "",
    youtube_link3: "",
    linkedin_link1: "",
    linkedin_link2: "",
    linkedin_link3: "",
    twitter_link1: "",
    twitter_link2: "",
    twitter_link3: "",
    facebook_link1: "",
    facebook_link2: "",
    facebook_link3: "",
    description: "",
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
  const [linkedin_id, setLinkedin_id] = React.useState(
    initialValues.linkedin_id
  );
  const [twitter_id, setTwitter_id] = React.useState(initialValues.twitter_id);
  const [facebook_id, setFacebook_id] = React.useState(
    initialValues.facebook_id
  );
  const [youtube_link1, setYoutube_link1] = React.useState(
    initialValues.youtube_link1
  );
  const [youtube_link2, setYoutube_link2] = React.useState(
    initialValues.youtube_link2
  );
  const [youtube_link3, setYoutube_link3] = React.useState(
    initialValues.youtube_link3
  );
  const [linkedin_link1, setLinkedin_link1] = React.useState(
    initialValues.linkedin_link1
  );
  const [linkedin_link2, setLinkedin_link2] = React.useState(
    initialValues.linkedin_link2
  );
  const [linkedin_link3, setLinkedin_link3] = React.useState(
    initialValues.linkedin_link3
  );
  const [twitter_link1, setTwitter_link1] = React.useState(
    initialValues.twitter_link1
  );
  const [twitter_link2, setTwitter_link2] = React.useState(
    initialValues.twitter_link2
  );
  const [twitter_link3, setTwitter_link3] = React.useState(
    initialValues.twitter_link3
  );
  const [facebook_link1, setFacebook_link1] = React.useState(
    initialValues.facebook_link1
  );
  const [facebook_link2, setFacebook_link2] = React.useState(
    initialValues.facebook_link2
  );
  const [facebook_link3, setFacebook_link3] = React.useState(
    initialValues.facebook_link3
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = creatorDetailsRecord
      ? { ...initialValues, ...creatorDetailsRecord }
      : initialValues;
    setCreator_id(cleanValues.creator_id);
    setIdentity1(cleanValues.identity1);
    setIdentity2(cleanValues.identity2);
    setIdentity3(cleanValues.identity3);
    setIdentity4(cleanValues.identity4);
    setIdentity5(cleanValues.identity5);
    setKeyword1(cleanValues.keyword1);
    setKeyword2(cleanValues.keyword2);
    setKeyword3(cleanValues.keyword3);
    setKeyword4(cleanValues.keyword4);
    setKeyword5(cleanValues.keyword5);
    setInstagram_id(cleanValues.instagram_id);
    setYoutube_id(cleanValues.youtube_id);
    setLinkedin_id(cleanValues.linkedin_id);
    setTwitter_id(cleanValues.twitter_id);
    setFacebook_id(cleanValues.facebook_id);
    setYoutube_link1(cleanValues.youtube_link1);
    setYoutube_link2(cleanValues.youtube_link2);
    setYoutube_link3(cleanValues.youtube_link3);
    setLinkedin_link1(cleanValues.linkedin_link1);
    setLinkedin_link2(cleanValues.linkedin_link2);
    setLinkedin_link3(cleanValues.linkedin_link3);
    setTwitter_link1(cleanValues.twitter_link1);
    setTwitter_link2(cleanValues.twitter_link2);
    setTwitter_link3(cleanValues.twitter_link3);
    setFacebook_link1(cleanValues.facebook_link1);
    setFacebook_link2(cleanValues.facebook_link2);
    setFacebook_link3(cleanValues.facebook_link3);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [creatorDetailsRecord, setCreatorDetailsRecord] = React.useState(
    creatorDetailsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CreatorDetails, idProp)
        : creatorDetailsModelProp;
      setCreatorDetailsRecord(record);
    };
    queryData();
  }, [idProp, creatorDetailsModelProp]);
  React.useEffect(resetStateValues, [creatorDetailsRecord]);
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
    linkedin_id: [],
    twitter_id: [],
    facebook_id: [],
    youtube_link1: [],
    youtube_link2: [],
    youtube_link3: [],
    linkedin_link1: [],
    linkedin_link2: [],
    linkedin_link3: [],
    twitter_link1: [],
    twitter_link2: [],
    twitter_link3: [],
    facebook_link1: [],
    facebook_link2: [],
    facebook_link3: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
          linkedin_id,
          twitter_id,
          facebook_id,
          youtube_link1,
          youtube_link2,
          youtube_link3,
          linkedin_link1,
          linkedin_link2,
          linkedin_link3,
          twitter_link1,
          twitter_link2,
          twitter_link3,
          facebook_link1,
          facebook_link2,
          facebook_link3,
          description,
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
          await DataStore.save(
            CreatorDetails.copyOf(creatorDetailsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreatorDetailsUpdateForm")}
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
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
      <TextField
        label="Linkedin id"
        isRequired={false}
        isReadOnly={false}
        value={linkedin_id}
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
              youtube_id,
              linkedin_id: value,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.linkedin_id ?? value;
          }
          if (errors.linkedin_id?.hasError) {
            runValidationTasks("linkedin_id", value);
          }
          setLinkedin_id(value);
        }}
        onBlur={() => runValidationTasks("linkedin_id", linkedin_id)}
        errorMessage={errors.linkedin_id?.errorMessage}
        hasError={errors.linkedin_id?.hasError}
        {...getOverrideProps(overrides, "linkedin_id")}
      ></TextField>
      <TextField
        label="Twitter id"
        isRequired={false}
        isReadOnly={false}
        value={twitter_id}
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
              youtube_id,
              linkedin_id,
              twitter_id: value,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.twitter_id ?? value;
          }
          if (errors.twitter_id?.hasError) {
            runValidationTasks("twitter_id", value);
          }
          setTwitter_id(value);
        }}
        onBlur={() => runValidationTasks("twitter_id", twitter_id)}
        errorMessage={errors.twitter_id?.errorMessage}
        hasError={errors.twitter_id?.hasError}
        {...getOverrideProps(overrides, "twitter_id")}
      ></TextField>
      <TextField
        label="Facebook id"
        isRequired={false}
        isReadOnly={false}
        value={facebook_id}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id: value,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.facebook_id ?? value;
          }
          if (errors.facebook_id?.hasError) {
            runValidationTasks("facebook_id", value);
          }
          setFacebook_id(value);
        }}
        onBlur={() => runValidationTasks("facebook_id", facebook_id)}
        errorMessage={errors.facebook_id?.errorMessage}
        hasError={errors.facebook_id?.hasError}
        {...getOverrideProps(overrides, "facebook_id")}
      ></TextField>
      <TextField
        label="Youtube link1"
        isRequired={false}
        isReadOnly={false}
        value={youtube_link1}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1: value,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.youtube_link1 ?? value;
          }
          if (errors.youtube_link1?.hasError) {
            runValidationTasks("youtube_link1", value);
          }
          setYoutube_link1(value);
        }}
        onBlur={() => runValidationTasks("youtube_link1", youtube_link1)}
        errorMessage={errors.youtube_link1?.errorMessage}
        hasError={errors.youtube_link1?.hasError}
        {...getOverrideProps(overrides, "youtube_link1")}
      ></TextField>
      <TextField
        label="Youtube link2"
        isRequired={false}
        isReadOnly={false}
        value={youtube_link2}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2: value,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.youtube_link2 ?? value;
          }
          if (errors.youtube_link2?.hasError) {
            runValidationTasks("youtube_link2", value);
          }
          setYoutube_link2(value);
        }}
        onBlur={() => runValidationTasks("youtube_link2", youtube_link2)}
        errorMessage={errors.youtube_link2?.errorMessage}
        hasError={errors.youtube_link2?.hasError}
        {...getOverrideProps(overrides, "youtube_link2")}
      ></TextField>
      <TextField
        label="Youtube link3"
        isRequired={false}
        isReadOnly={false}
        value={youtube_link3}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3: value,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.youtube_link3 ?? value;
          }
          if (errors.youtube_link3?.hasError) {
            runValidationTasks("youtube_link3", value);
          }
          setYoutube_link3(value);
        }}
        onBlur={() => runValidationTasks("youtube_link3", youtube_link3)}
        errorMessage={errors.youtube_link3?.errorMessage}
        hasError={errors.youtube_link3?.hasError}
        {...getOverrideProps(overrides, "youtube_link3")}
      ></TextField>
      <TextField
        label="Linkedin link1"
        isRequired={false}
        isReadOnly={false}
        value={linkedin_link1}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1: value,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.linkedin_link1 ?? value;
          }
          if (errors.linkedin_link1?.hasError) {
            runValidationTasks("linkedin_link1", value);
          }
          setLinkedin_link1(value);
        }}
        onBlur={() => runValidationTasks("linkedin_link1", linkedin_link1)}
        errorMessage={errors.linkedin_link1?.errorMessage}
        hasError={errors.linkedin_link1?.hasError}
        {...getOverrideProps(overrides, "linkedin_link1")}
      ></TextField>
      <TextField
        label="Linkedin link2"
        isRequired={false}
        isReadOnly={false}
        value={linkedin_link2}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2: value,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.linkedin_link2 ?? value;
          }
          if (errors.linkedin_link2?.hasError) {
            runValidationTasks("linkedin_link2", value);
          }
          setLinkedin_link2(value);
        }}
        onBlur={() => runValidationTasks("linkedin_link2", linkedin_link2)}
        errorMessage={errors.linkedin_link2?.errorMessage}
        hasError={errors.linkedin_link2?.hasError}
        {...getOverrideProps(overrides, "linkedin_link2")}
      ></TextField>
      <TextField
        label="Linkedin link3"
        isRequired={false}
        isReadOnly={false}
        value={linkedin_link3}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3: value,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.linkedin_link3 ?? value;
          }
          if (errors.linkedin_link3?.hasError) {
            runValidationTasks("linkedin_link3", value);
          }
          setLinkedin_link3(value);
        }}
        onBlur={() => runValidationTasks("linkedin_link3", linkedin_link3)}
        errorMessage={errors.linkedin_link3?.errorMessage}
        hasError={errors.linkedin_link3?.hasError}
        {...getOverrideProps(overrides, "linkedin_link3")}
      ></TextField>
      <TextField
        label="Twitter link1"
        isRequired={false}
        isReadOnly={false}
        value={twitter_link1}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1: value,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.twitter_link1 ?? value;
          }
          if (errors.twitter_link1?.hasError) {
            runValidationTasks("twitter_link1", value);
          }
          setTwitter_link1(value);
        }}
        onBlur={() => runValidationTasks("twitter_link1", twitter_link1)}
        errorMessage={errors.twitter_link1?.errorMessage}
        hasError={errors.twitter_link1?.hasError}
        {...getOverrideProps(overrides, "twitter_link1")}
      ></TextField>
      <TextField
        label="Twitter link2"
        isRequired={false}
        isReadOnly={false}
        value={twitter_link2}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2: value,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.twitter_link2 ?? value;
          }
          if (errors.twitter_link2?.hasError) {
            runValidationTasks("twitter_link2", value);
          }
          setTwitter_link2(value);
        }}
        onBlur={() => runValidationTasks("twitter_link2", twitter_link2)}
        errorMessage={errors.twitter_link2?.errorMessage}
        hasError={errors.twitter_link2?.hasError}
        {...getOverrideProps(overrides, "twitter_link2")}
      ></TextField>
      <TextField
        label="Twitter link3"
        isRequired={false}
        isReadOnly={false}
        value={twitter_link3}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3: value,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.twitter_link3 ?? value;
          }
          if (errors.twitter_link3?.hasError) {
            runValidationTasks("twitter_link3", value);
          }
          setTwitter_link3(value);
        }}
        onBlur={() => runValidationTasks("twitter_link3", twitter_link3)}
        errorMessage={errors.twitter_link3?.errorMessage}
        hasError={errors.twitter_link3?.hasError}
        {...getOverrideProps(overrides, "twitter_link3")}
      ></TextField>
      <TextField
        label="Facebook link1"
        isRequired={false}
        isReadOnly={false}
        value={facebook_link1}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1: value,
              facebook_link2,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.facebook_link1 ?? value;
          }
          if (errors.facebook_link1?.hasError) {
            runValidationTasks("facebook_link1", value);
          }
          setFacebook_link1(value);
        }}
        onBlur={() => runValidationTasks("facebook_link1", facebook_link1)}
        errorMessage={errors.facebook_link1?.errorMessage}
        hasError={errors.facebook_link1?.hasError}
        {...getOverrideProps(overrides, "facebook_link1")}
      ></TextField>
      <TextField
        label="Facebook link2"
        isRequired={false}
        isReadOnly={false}
        value={facebook_link2}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2: value,
              facebook_link3,
              description,
            };
            const result = onChange(modelFields);
            value = result?.facebook_link2 ?? value;
          }
          if (errors.facebook_link2?.hasError) {
            runValidationTasks("facebook_link2", value);
          }
          setFacebook_link2(value);
        }}
        onBlur={() => runValidationTasks("facebook_link2", facebook_link2)}
        errorMessage={errors.facebook_link2?.errorMessage}
        hasError={errors.facebook_link2?.hasError}
        {...getOverrideProps(overrides, "facebook_link2")}
      ></TextField>
      <TextField
        label="Facebook link3"
        isRequired={false}
        isReadOnly={false}
        value={facebook_link3}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.facebook_link3 ?? value;
          }
          if (errors.facebook_link3?.hasError) {
            runValidationTasks("facebook_link3", value);
          }
          setFacebook_link3(value);
        }}
        onBlur={() => runValidationTasks("facebook_link3", facebook_link3)}
        errorMessage={errors.facebook_link3?.errorMessage}
        hasError={errors.facebook_link3?.hasError}
        {...getOverrideProps(overrides, "facebook_link3")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
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
              youtube_id,
              linkedin_id,
              twitter_id,
              facebook_id,
              youtube_link1,
              youtube_link2,
              youtube_link3,
              linkedin_link1,
              linkedin_link2,
              linkedin_link3,
              twitter_link1,
              twitter_link2,
              twitter_link3,
              facebook_link1,
              facebook_link2,
              facebook_link3,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || creatorDetailsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || creatorDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
