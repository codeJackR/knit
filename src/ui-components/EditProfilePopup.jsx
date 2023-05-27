/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
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
          justifyContent="flex-start"
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
              placeholder={creator?.first_name}
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "FirstName")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              label="Last Name"
              placeholder={creator?.last_name}
              shrink="0"
              alignSelf="stretch"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "LastName")}
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
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Identity")}
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
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Identity138043018")}
              >
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
                  {...getOverrideProps(overrides, "Input38043019")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(128,128,128,1)"
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
                    placeholder="Athlete"
                    inputMode={creatorDetails?.identity1}
                    children="Athlete"
                    {...getOverrideProps(overrides, "placeholder38043020")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Identity2")}
              >
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
                  {...getOverrideProps(overrides, "Input38043027")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(128,128,128,1)"
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
                    placeholder="Fitness Trainer"
                    inputMode={creatorDetails?.identity2}
                    children="Fitness Trainer"
                    {...getOverrideProps(overrides, "placeholder38043028")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Identity3")}
              >
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
                  {...getOverrideProps(overrides, "Input38043023")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(128,128,128,1)"
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
                    placeholder="Nutritionist"
                    inputMode={creatorDetails?.identity3}
                    children="Nutritionist"
                    {...getOverrideProps(overrides, "placeholder38043024")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Identity4")}
              >
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
                  {...getOverrideProps(overrides, "Input38043031")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(128,128,128,1)"
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
                    placeholder={creatorDetails?.identity4}
                    inputMode={creatorDetails?.identity4}
                    children="Entrepreneur"
                    {...getOverrideProps(overrides, "placeholder38043032")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Identity5")}
              >
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
                  {...getOverrideProps(overrides, "Input38043035")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(128,128,128,1)"
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
                    placeholder="Influencer"
                    inputMode={creatorDetails?.identity5}
                    children="Influencer"
                    {...getOverrideProps(overrides, "placeholder38043038")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
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
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Description")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
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
                  children="How would you describe yourself? (Max. 1000 characters)"
                  {...getOverrideProps(overrides, "label38043040")}
                ></Text>
                <Flex
                  gap="0"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Identity138043042")}
                >
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
                    {...getOverrideProps(overrides, "Input38043043")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="16px"
                      fontWeight="400"
                      color="rgba(128,128,128,1)"
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
                      placeholder="I'm a fitness enthusiast turned aspiring trainer. I believe that health is wealth and I'm on a mission to help others unlock their full potential through fitness. With 5 years of experience in strength training, cardio, and nutrition, I'm dedicated to creating customized programs tailored to each individual's unique goals. Let's work together to transform your mind and body, one rep at a time. My approach to fitness is centered around building a positive mindset and creating sustainable habits. I understand that making lifestyle changes can be challenging, and I'm here to provide guidance, support, and accountability every step of the way."
                      inputMode={creatorDetails?.keyword1}
                      children="I'm a fitness enthusiast turned aspiring trainer. I believe that health is wealth and I'm on a mission to help others unlock their full potential through fitness. With 5 years of experience in strength training, cardio, and nutrition, I'm dedicated to creating customized programs tailored to each individual's unique goals. Let's work together to transform your mind and body, one rep at a time. My approach to fitness is centered around building a positive mindset and creating sustainable habits. I understand that making lifestyle changes can be challenging, and I'm here to provide guidance, support, and accountability every step of the way. "
                      {...getOverrideProps(overrides, "placeholder38043044")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
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
                  <Flex
                    gap="0"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Username38043097")}
                  >
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
                      {...getOverrideProps(overrides, "Input38102709")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(128,128,128,1)"
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
                        children="youtube_id"
                        {...getOverrideProps(overrides, "placeholder38102710")}
                      ></Text>
                    </Flex>
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
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043123")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233039")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="YouTube Video Embed Link 1"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233040"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 238043127")}
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
                        {...getOverrideProps(overrides, "label38043128")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043129")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233052")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="YouTube Video Embed Link 2"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233053"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 338043132")}
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
                        {...getOverrideProps(overrides, "label38043133")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043134")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233064")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="YouTube Video Embed Link 3"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233065"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                  <Flex
                    gap="0"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Username38043143")}
                  >
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
                      {...getOverrideProps(overrides, "Input38102711")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(128,128,128,1)"
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
                        children="linkedin_id"
                        {...getOverrideProps(overrides, "placeholder38102712")}
                      ></Text>
                    </Flex>
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
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Post Embed Links")}
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
                      {...getOverrideProps(overrides, "Embed Link 138043147")}
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
                        {...getOverrideProps(overrides, "label38043148")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043149")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233081")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="LinkedIn Post Embed Link 1"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233082"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 238043152")}
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
                        {...getOverrideProps(overrides, "label38043153")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043154")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233094")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="LinkedIn Post Embed Link 2"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233095"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 338043157")}
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
                        {...getOverrideProps(overrides, "label38043158")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043159")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233106")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="LinkedIn Post Embed Link 3"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233107"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                  <Flex
                    gap="0"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Username38043166")}
                  >
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
                      {...getOverrideProps(overrides, "Input38102713")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(128,128,128,1)"
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
                        children="twitter_id"
                        {...getOverrideProps(overrides, "placeholder38102714")}
                      ></Text>
                    </Flex>
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
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Embed Links38043169")}
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
                      {...getOverrideProps(overrides, "Embed Link 138043170")}
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
                        {...getOverrideProps(overrides, "label38043171")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043172")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233118")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="Tweet Embed Link 1"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233119"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 238043175")}
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
                        {...getOverrideProps(overrides, "label38043176")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043177")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233131")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="Tweet Embed Link 2"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233132"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 338043180")}
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
                        {...getOverrideProps(overrides, "label38043181")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043182")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233144")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="Tweet Embed Link 3"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233145"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                  <Flex
                    gap="0"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Username38043189")}
                  >
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
                      {...getOverrideProps(overrides, "Input38102715")}
                    >
                      <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(128,128,128,1)"
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
                        children="facebook_id"
                        {...getOverrideProps(overrides, "placeholder38102716")}
                      ></Text>
                    </Flex>
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
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Embed Links38043192")}
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
                      {...getOverrideProps(overrides, "Embed Link 138043193")}
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
                        {...getOverrideProps(overrides, "label38043194")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043195")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233156")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="Facebook Post Embed Link 1"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233157"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 238043198")}
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
                        {...getOverrideProps(overrides, "label38043199")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043200")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233168")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="Facebook Post Embed Link 2"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233169"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
                      {...getOverrideProps(overrides, "Embed Link 338043203")}
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
                        {...getOverrideProps(overrides, "label38043204")}
                      ></Text>
                      <Flex
                        gap="0"
                        direction="column"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        {...getOverrideProps(overrides, "InputGroup38043205")}
                      >
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
                          {...getOverrideProps(overrides, "Input38233181")}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(128,128,128,1)"
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
                            children="Facebook Post Embed Link 3"
                            {...getOverrideProps(
                              overrides,
                              "placeholder38233182"
                            )}
                          ></Text>
                        </Flex>
                      </Flex>
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
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
}
