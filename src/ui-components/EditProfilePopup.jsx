/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CreatorDetails } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditProfilePopup(props) {
  const { creator, creatorDetails, overrides, ...rest } = props;
  const [identityInputOneValue, setIdentityInputOneValue] =
    useStateMutationAction(creatorDetails?.identity1);
  const [identityInputTwoValue, setIdentityInputTwoValue] =
    useStateMutationAction(creatorDetails?.identity2);
  const [identityInputThreeValue, setIdentityInputThreeValue] =
    useStateMutationAction(creatorDetails?.identity3);
  const [identityInputFourValue, setIdentityInputFourValue] =
    useStateMutationAction(creatorDetails?.identity4);
  const [identityInputFiveValue, setIdentityInputFiveValue] =
    useStateMutationAction(creatorDetails?.identity5);
  const [youtubeIDInputValue, setYoutubeIDInputValue] = useStateMutationAction(
    creatorDetails?.youtube_id
  );
  const buttonOnClick = useDataStoreUpdateAction({
    model: CreatorDetails,
    id: creatorDetails?.id,
    fields: {
      identity1: identityInputOneValue,
      identity2: identityInputTwoValue,
      identity3: identityInputThreeValue,
      identity4: identityInputFourValue,
      identity5: identityInputFiveValue,
      youtube_id: youtubeIDInputValue,
    },
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1728px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "EditProfilePopup")}
      {...rest}
    >
      <View
        width="1082px"
        height="2496px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EditProfileFrame")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="1082px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Edit Profile38042978")}
          >
            <View
              width="36px"
              height="36px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon")}
            >
              <Icon
                width="21px"
                height="21px"
                viewBox={{ minX: 0, minY: 0, width: 21, height: 21 }}
                paths={[
                  {
                    d: "M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="20.83%"
                bottom="20.83%"
                left="20.83%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Edit Profile"
              {...getOverrideProps(overrides, "Edit Profile38042981")}
            ></Text>
          </Flex>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider38042982")}
          ></Divider>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Form")}
          >
            <TextField
              width="unset"
              height="unset"
              label="First Name"
              placeholder="John"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={true}
              labelHidden={false}
              variation="default"
              defaultValue={creator?.first_name}
              {...getOverrideProps(overrides, "FirstNameInput")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              label="Last Name"
              placeholder="Smith"
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={true}
              labelHidden={false}
              variation="default"
              defaultValue={creator?.last_name}
              {...getOverrideProps(overrides, "LastNameInput")}
            ></TextField>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CoverPhoto")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Cover Photo"
                {...getOverrideProps(overrides, "label38043079")}
              ></Text>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(174,179,183,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input38043080")}
              ></Flex>
            </Flex>
            <Flex
              gap="5px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "IdentityInput")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="What would you call yourself?"
                {...getOverrideProps(overrides, "label38043016")}
              ></Text>
              <TextField
                width="unset"
                height="unset"
                label="First Name"
                placeholder="Athlete"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                value={identityInputOneValue}
                onChange={(event) => {
                  setIdentityInputOneValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "IdentityInput1")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="First Name"
                placeholder="Fitness Trainer"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                value={identityInputTwoValue}
                onChange={(event) => {
                  setIdentityInputTwoValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "IdentityInput2")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="First Name"
                placeholder="Nutritionist"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                value={identityInputThreeValue}
                onChange={(event) => {
                  setIdentityInputThreeValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "IdentityInput3")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="First Name"
                placeholder="Entrepreneur"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                value={identityInputFourValue}
                onChange={(event) => {
                  setIdentityInputFourValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "IdentityInput4")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="First Name"
                placeholder="Influencer"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                value={identityInputFiveValue}
                onChange={(event) => {
                  setIdentityInputFiveValue(event.target.value);
                }}
                {...getOverrideProps(overrides, "IdentityInput5")}
              ></TextField>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Meet FirstName")}
            >
              <Flex
                gap="0"
                direction="column"
                width="287px"
                height="362px"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "ProfilePhoto")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="700"
                  color="rgba(48,64,80,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Profile Photo"
                  {...getOverrideProps(overrides, "label38043063")}
                ></Text>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  border="1px SOLID rgba(174,179,183,1)"
                  borderRadius="5px"
                  padding="8px 16px 8px 16px"
                  {...getOverrideProps(overrides, "Input38043075")}
                ></Flex>
              </Flex>
              <TextField
                width="unset"
                height="unset"
                label="How would you describe yourself? (Max. 1000 characters)"
                placeholder="I'm a fitness enthusiast turned aspiring trainer. I believe that health is wealth and I'm on a mission to help others unlock their full potential through fitness. With 5 years of experience in strength training, cardio, and nutrition, I'm dedicated to creating customized programs tailored to each individual's unique goals. Let's work together to transform your mind and body, one rep at a time. My approach to fitness is centered around building a positive mindset and creating sustainable habits. I understand that making lifestyle changes can be challenging, and I'm here to provide guidance, support, and accountability every step of the way. "
                grow="1"
                shrink="1"
                basis="0"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                defaultValue={creatorDetails?.description}
                {...getOverrideProps(overrides, "CreatorDescriptionInput")}
              ></TextField>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="10px 10px 10px 10px"
              {...getOverrideProps(overrides, "SocialMediaInputs")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "YoutubeInput")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Username Label38043138")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="700"
                    color="rgba(48,64,80,1)"
                    lineHeight="24px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="YouTube ID"
                    {...getOverrideProps(overrides, "label38043096")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Input38043126")}
                >
                  <TextField
                    width="unset"
                    height="unset"
                    label="First Name"
                    placeholder="youtube_id"
                    shrink="0"
                    alignSelf="stretch"
                    size="default"
                    isDisabled={false}
                    labelHidden={true}
                    variation="default"
                    value={youtubeIDInputValue}
                    onChange={(event) => {
                      setYoutubeIDInputValue(event.target.value);
                    }}
                    {...getOverrideProps(overrides, "youtubeIDInput")}
                  ></TextField>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Video Embed Links")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 138043121")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Video Embed Link 1"
                        {...getOverrideProps(overrides, "label38043122")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="YouTube Video Embed Link 1"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        backgroundColor="rgba(255,255,255,1)"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.youtube_link1}
                        {...getOverrideProps(overrides, "EmbedLink38344061")}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 238344124")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Video Embed Link 2"
                        {...getOverrideProps(overrides, "label38344125")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="YouTube Video Embed Link 2"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.youtube_link2}
                        {...getOverrideProps(overrides, "EmbedLink38344126")}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 338344273")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Video Embed Link 3"
                        {...getOverrideProps(overrides, "label38344274")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="YouTube Video Embed Link 3"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.youtube_link3}
                        {...getOverrideProps(overrides, "EmbedLink38344275")}
                      ></TextField>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "LinkedinInput")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Username Label38043140")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="700"
                    color="rgba(48,64,80,1)"
                    lineHeight="24px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="LinkedIn ID"
                    {...getOverrideProps(overrides, "label38043141")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Input38043142")}
                >
                  <TextField
                    width="unset"
                    height="unset"
                    label="First Name"
                    placeholder="linkedin_id"
                    shrink="0"
                    alignSelf="stretch"
                    size="default"
                    isDisabled={false}
                    labelHidden={true}
                    variation="default"
                    defaultValue={creatorDetails?.linkedin_id}
                    {...getOverrideProps(overrides, "linkedinIDInput")}
                  ></TextField>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="center"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(
                      overrides,
                      "Linkedin Post Embed Links"
                    )}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 138344346")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Post Embed Link 1"
                        {...getOverrideProps(overrides, "label38344347")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="LinkedIn Post Embed Link 1"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        backgroundColor="rgba(255,255,255,1)"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.linkedin_link1}
                        {...getOverrideProps(
                          overrides,
                          "LinkedinPostEmbedLink1"
                        )}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 238344349")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Post Embed Link 2"
                        {...getOverrideProps(overrides, "label38344350")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="LinkedIn Post Embed Link 2"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.linkedin_link2}
                        {...getOverrideProps(
                          overrides,
                          "LinkedinPostEmbedLink2"
                        )}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 338344352")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Post Embed Link 3"
                        {...getOverrideProps(overrides, "label38344353")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="LinkedIn Post Embed Link 3"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.linkedin_link3}
                        {...getOverrideProps(
                          overrides,
                          "LinkedinPostEmbedLink3"
                        )}
                      ></TextField>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "TwitterInput")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Username Label38043163")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="700"
                    color="rgba(48,64,80,1)"
                    lineHeight="24px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Twitter ID"
                    {...getOverrideProps(overrides, "label38043164")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Input38043165")}
                >
                  <TextField
                    width="unset"
                    height="unset"
                    label="First Name"
                    placeholder="twitter_id"
                    shrink="0"
                    alignSelf="stretch"
                    size="default"
                    isDisabled={false}
                    labelHidden={true}
                    variation="default"
                    defaultValue={creatorDetails?.twitter_id}
                    {...getOverrideProps(overrides, "twitterIDInput")}
                  ></TextField>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Tweet Embed Links")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 138344641")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Tweet Embed Link 1"
                        {...getOverrideProps(overrides, "label38344642")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="Tweet Embed Link 1"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        backgroundColor="rgba(255,255,255,1)"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.twitter_link1}
                        {...getOverrideProps(overrides, "TweetEmbedLink1")}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 238344644")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Tweet Embed Link 2"
                        {...getOverrideProps(overrides, "label38344645")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="Tweet Embed Link 2"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.twitter_link2}
                        {...getOverrideProps(overrides, "TweetEmbedLink2")}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 338344647")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Tweet Embed Link 3"
                        {...getOverrideProps(overrides, "label38344648")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="Tweet Embed Link 3"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.twitter_link3}
                        {...getOverrideProps(overrides, "TweetEmbedLink3")}
                      ></TextField>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "FacebookInput")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Username Label38043186")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="700"
                    color="rgba(48,64,80,1)"
                    lineHeight="24px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Facebook ID"
                    {...getOverrideProps(overrides, "label38043187")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="flex-start"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Input38043188")}
                >
                  <TextField
                    width="unset"
                    height="unset"
                    label="First Name"
                    placeholder="facebook_id"
                    shrink="0"
                    alignSelf="stretch"
                    size="default"
                    isDisabled={false}
                    labelHidden={true}
                    variation="default"
                    defaultValue={creatorDetails?.facebook_id}
                    {...getOverrideProps(overrides, "facebookIDInput")}
                  ></TextField>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(
                      overrides,
                      "Facebook Post Embed Links"
                    )}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 138344851")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Post Embed Link 1"
                        {...getOverrideProps(overrides, "label38344852")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="Facebook Post Embed Link 1"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        backgroundColor="rgba(255,255,255,1)"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.facebook_link1}
                        {...getOverrideProps(
                          overrides,
                          "FacebookPostEmbedLink1"
                        )}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 238344854")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Post Embed Link 2"
                        {...getOverrideProps(overrides, "label38344855")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="Facebook Post Embed Link 2"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.facebook_link2}
                        {...getOverrideProps(
                          overrides,
                          "FacebookPostEmbedLink2"
                        )}
                      ></TextField>
                    </Flex>
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      alignSelf="stretch"
                      position="relative"
                      padding="10px 10px 10px 10px"
                      {...getOverrideProps(overrides, "Embed Link 338344857")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="700"
                        color="rgba(48,64,80,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Post Embed Link 3"
                        {...getOverrideProps(overrides, "label38344858")}
                      ></Text>
                      <TextField
                        width="unset"
                        height="unset"
                        label="First Name"
                        placeholder="Facebook Post Embed Link 3"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        size="default"
                        isDisabled={false}
                        labelHidden={true}
                        variation="default"
                        defaultValue={creatorDetails?.facebook_link3}
                        {...getOverrideProps(
                          overrides,
                          "FacebookPostEmbedLink3"
                        )}
                      ></TextField>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider38042990")}
          ></Divider>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-end"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 324")}
          >
            <Button
              width="unset"
              height="unset"
              gap="25px"
              justifyContent="flex-end"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Save"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
}
