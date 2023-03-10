/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfilePage(props) {
  const { creator, creatorDetails, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="800px"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfilePage")}
      {...rest}
    >
      <Icon
        width="1600px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1600, height: 1 }}
        paths={[
          {
            d: "M0 0L1600 0L1600 -1L0 -1L0 0Z",
            stroke: "rgba(169,169,169,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Flex
        gap="178px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="37px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="30px 0px 0px 0px"
          {...getOverrideProps(overrides, "Left Profile Bar")}
        >
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 17")}
          >
            <Flex
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 12")}
            >
              <View
                width="226px"
                height="226px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                borderRadius="267px"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(0,183,235,1)"
                {...getOverrideProps(overrides, "Frame 5")}
              >
                <Image
                  width="227px"
                  height="226px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="calc(50% - 113px - 0px)"
                  left="calc(50% - 113.5px - 0.5px)"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(
                    overrides,
                    "julian-wan-WNoLnJo7tS8-unsplash 1"
                  )}
                ></Image>
              </View>
              <Flex
                gap="15px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 11")}
              >
                <Flex
                  gap="6px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 10")}
                >
                  <Text
                    fontFamily="Open Sans"
                    fontSize="45px"
                    fontWeight="400"
                    color="rgba(0,19,25,1)"
                    lineHeight="61.28173828125px"
                    textAlign="center"
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
                    children={`${creator?.first_name}${" "}${
                      creator?.last_name
                    }`}
                    {...getOverrideProps(overrides, "Full Name")}
                  ></Text>
                  <Flex
                    gap="6px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 9")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Frame 6")}
                    >
                      <Icon
                        width="16px"
                        height="20px"
                        viewBox={{ minX: 0, minY: 0, width: 16, height: 20 }}
                        paths={[
                          {
                            d: "M8 10C8.55 10 9.021 9.804 9.413 9.412C9.805 9.02 10.0007 8.54933 10 8C10 7.45 9.804 6.979 9.412 6.587C9.02 6.195 8.54933 5.99933 8 6C7.45 6 6.979 6.196 6.587 6.588C6.195 6.98 5.99933 7.45067 6 8C6 8.55 6.196 9.021 6.588 9.413C6.98 9.805 7.45067 10.0007 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7873 12.525 12.262C13.5083 10.7367 14 9.38267 14 8.2C14 6.38333 13.4207 4.896 12.262 3.738C11.1033 2.58 9.68267 2.00067 8 2C6.31667 2 4.89567 2.57933 3.737 3.738C2.57833 4.89667 1.99933 6.384 2 8.2C2 9.38333 2.49167 10.7377 3.475 12.263C4.45833 13.7883 5.96667 15.484 8 17.35ZM8 20C5.31667 17.7167 3.31267 15.596 1.988 13.638C0.663333 11.68 0.000666667 9.86733 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.02167 0.741667 5.884 0 8 0C10.1167 0 11.9793 0.741667 13.588 2.225C15.1967 3.70833 16.0007 5.7 16 8.2C16 9.86667 15.3373 11.6793 14.012 13.638C12.6867 15.5967 10.6827 17.7173 8 20Z",
                            fill: "rgba(0,19,25,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        shrink="0"
                        position="relative"
                        {...getOverrideProps(overrides, "Vector35832954")}
                      ></Icon>
                      <Text
                        fontFamily="Open Sans"
                        fontSize="20px"
                        fontWeight="400"
                        color="rgba(0,19,25,1)"
                        lineHeight="27.236328125px"
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
                        children={creator?.location}
                        {...getOverrideProps(overrides, "Location")}
                      ></Text>
                    </Flex>
                    <Text
                      fontFamily="Open Sans"
                      fontSize="20px"
                      fontWeight="400"
                      color="rgba(0,19,25,1)"
                      lineHeight="27.236328125px"
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
                      children={creator?.username}
                      {...getOverrideProps(overrides, "Username")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="9px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 835832957")}
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
                    borderRadius="93px"
                    padding="8px 20px 8px 20px"
                    backgroundColor="rgba(0,183,235,1)"
                    {...getOverrideProps(overrides, "Frame 7")}
                  >
                    <Text
                      fontFamily="Open Sans"
                      fontSize="25px"
                      fontWeight="400"
                      color="rgba(251,251,251,1)"
                      lineHeight="34.04541015625px"
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
                      children="Follow"
                      {...getOverrideProps(overrides, "Follow")}
                    ></Text>
                  </Flex>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(0,0,0,1)"
                    borderRadius="93px"
                    padding="7px 19px 7px 19px"
                    {...getOverrideProps(overrides, "Frame 835832960")}
                  >
                    <Text
                      fontFamily="Open Sans"
                      fontSize="25px"
                      fontWeight="400"
                      color="rgba(0,19,25,1)"
                      lineHeight="34.04541015625px"
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
                      children="Message"
                      {...getOverrideProps(overrides, "Message")}
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
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 15")}
            >
              <Text
                fontFamily="Open Sans"
                fontSize="20px"
                fontWeight="400"
                color="rgba(0,19,25,1)"
                lineHeight="27.236328125px"
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
                children={creator?.email_id}
                {...getOverrideProps(overrides, "website")}
              ></Text>
              <Flex
                gap="6px"
                direction="column"
                width="133px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 16")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 13")}
                >
                  <Image
                    width="20px"
                    height="20px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "image 2")}
                  ></Image>
                  <Text
                    fontFamily="Open Sans"
                    fontSize="20px"
                    fontWeight="400"
                    color="rgba(0,19,25,1)"
                    lineHeight="27.236328125px"
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
                    children={creatorDetails?.instagram_id}
                    {...getOverrideProps(overrides, "insta_id35832967")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 14")}
                >
                  <Image
                    width="20px"
                    height="14.05px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(overrides, "image 3")}
                  ></Image>
                  <Text
                    fontFamily="Open Sans"
                    fontSize="20px"
                    fontWeight="400"
                    color="rgba(0,19,25,1)"
                    lineHeight="27.236328125px"
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
                    children={creatorDetails?.youtube_id}
                    {...getOverrideProps(overrides, "youtube_id35832970")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 25")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 23")}
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
                border="1px SOLID rgba(0,19,25,1)"
                borderRadius="60px"
                padding="9px 17px 9px 17px"
                {...getOverrideProps(overrides, "Frame 18")}
              >
                <Text
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(0,19,25,1)"
                  lineHeight="19.0654296875px"
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
                  children={creatorDetails?.keyword1}
                  {...getOverrideProps(overrides, "Keyword35832974")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(0,19,25,1)"
                borderRadius="60px"
                padding="9px 17px 9px 17px"
                {...getOverrideProps(overrides, "Frame 19")}
              >
                <Text
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(0,19,25,1)"
                  lineHeight="19.0654296875px"
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
                  children={creatorDetails?.keyword2}
                  {...getOverrideProps(overrides, "Keyword35832976")}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(0,19,25,1)"
                borderRadius="60px"
                padding="9px 17px 9px 17px"
                {...getOverrideProps(overrides, "Frame 20")}
              >
                <Text
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(0,19,25,1)"
                  lineHeight="19.0654296875px"
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
                  children={creatorDetails?.keyword3}
                  {...getOverrideProps(overrides, "Keyword35832978")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="5px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              opacity="0.800000011920929"
              {...getOverrideProps(overrides, "Frame 24")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(0,19,25,1)"
                borderRadius="60px"
                padding="9px 17px 9px 17px"
                {...getOverrideProps(overrides, "Frame 21")}
              >
                <Text
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(0,19,25,1)"
                  lineHeight="19.0654296875px"
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
                  children={creatorDetails?.keyword4}
                  {...getOverrideProps(overrides, "Keyword35832981")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(0,19,25,1)"
                borderRadius="60px"
                padding="9px 17px 9px 17px"
                {...getOverrideProps(overrides, "Frame 22")}
              >
                <Text
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(0,19,25,1)"
                  lineHeight="19.0654296875px"
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
                  children={creatorDetails?.keyword5}
                  {...getOverrideProps(overrides, "Keyword35832983")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <View
          width="1095px"
          height="800px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Creator Block")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="1272px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="-9px"
            left="-159px"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Creator Background Image")}
          >
            <Image
              width="unset"
              height="799px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "Creator Backgroud Image")}
            ></Image>
          </Flex>
          <View
            width="1095px"
            height="733px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Creator Block Sections")}
          >
            <Icon
              width="799px"
              height="0px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 0.00003814697265625,
                height: 799,
              }}
              paths={[
                {
                  d: "M0 0L799 0L799 -1L0 -1L0 0Z",
                  stroke: "rgba(169,169,169,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1px"
              left="-149px"
              transformOrigin="top left"
              transform="rotate(90deg)"
              {...getOverrideProps(overrides, "Line 1")}
            ></Icon>
            <View
              width="1095px"
              height="96px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="-149px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Creator Navigation Bar")}
            >
              <Flex
                gap="5px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                position="absolute"
                top="18px"
                left="446px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Youtube Tab")}
              >
                <Image
                  width="32px"
                  height="22.49px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "YoutubeIconImageLarge")}
                ></Image>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="400"
                  color="rgba(251,251,251,1)"
                  lineHeight="34.04541015625px"
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
                  children={creatorDetails?.youtube_id}
                  {...getOverrideProps(overrides, "youtube_id35832994")}
                ></Text>
              </Flex>
              <Flex
                gap="5px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                position="absolute"
                top="13px"
                left="289px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Instagram Tab")}
              >
                <Image
                  width="32px"
                  height="32px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  {...getOverrideProps(overrides, "InstagramIconImageLarge")}
                ></Image>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="400"
                  color="rgba(251,251,251,1)"
                  lineHeight="34.04541015625px"
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
                  children={creatorDetails?.instagram_id}
                  {...getOverrideProps(overrides, "insta_id35832991")}
                ></Text>
              </Flex>
              <Icon
                width="95px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 95 }}
                paths={[
                  {
                    d: "M0 0L95 0L95 -1L0 -1L0 0Z",
                    stroke: "rgba(251,251,251,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1px"
                left="255px"
                transformOrigin="top left"
                transform="rotate(90deg)"
                {...getOverrideProps(overrides, "Line 4")}
              ></Icon>
              <Icon
                width="95px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 95 }}
                paths={[
                  {
                    d: "M0 0L95 0L95 -1L0 -1L0 0Z",
                    stroke: "rgba(251,251,251,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1px"
                left="412px"
                transformOrigin="top left"
                transform="rotate(90deg)"
                {...getOverrideProps(overrides, "Line 5")}
              ></Icon>
              <Icon
                width="95px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 95 }}
                paths={[
                  {
                    d: "M0 0L95 0L95 -1L0 -1L0 0Z",
                    stroke: "rgba(251,251,251,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="610px"
                transformOrigin="top left"
                transform="rotate(90deg)"
                {...getOverrideProps(overrides, "Line 6")}
              ></Icon>
              <Text
                fontFamily="Open Sans"
                fontSize="25px"
                fontWeight="400"
                color="rgba(251,251,251,1)"
                lineHeight="34.04541015625px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="32px"
                left="34px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={`${"Meet "}${creator?.first_name}`}
                {...getOverrideProps(overrides, "Meet FirstName")}
              ></Text>
              <Icon
                width="1244px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 1244, height: 1 }}
                paths={[
                  {
                    d: "M0 0L1244 0L1244 -1L0 -1L0 0Z",
                    stroke: "rgba(251,251,251,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="96px"
                left="0px"
                {...getOverrideProps(overrides, "Line 3")}
              ></Icon>
            </View>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              position="absolute"
              top="136px"
              left="993px"
              border="1px SOLID rgba(251,251,251,1)"
              borderRadius="67px"
              padding="19px 19px 19px 19px"
              {...getOverrideProps(overrides, "Edit Profile Icon")}
            >
              <Icon
                width="37px"
                height="37px"
                viewBox={{ minX: 0, minY: 0, width: 37, height: 37 }}
                paths={[
                  {
                    d: "M36.2203 9.37015L27.6357 0.787424C27.386 0.537782 27.0896 0.339753 26.7634 0.204646C26.4372 0.0695388 26.0875 -6.82147e-16 25.7344 0C25.3813 -6.82147e-16 25.0317 0.0695388 24.7055 0.204646C24.3792 0.339753 24.0828 0.537782 23.8332 0.787424L0.787397 23.8283C0.28843 24.3359 0.00612386 25.0175 0 25.7292L0 34.3119C0 35.0248 0.28327 35.7086 0.787494 36.2127C1.29172 36.7168 1.97559 37 2.68867 37L11.2732 37C11.9851 36.9939 12.6667 36.7116 13.1745 36.2128L36.2203 13.1719C36.7199 12.6653 37 11.9825 37 11.271C37 10.5596 36.7199 9.87673 36.2203 9.37015ZM11.5421 34.5807C11.4712 34.6531 11.3745 34.6945 11.2732 34.6959L2.68867 34.6959C2.5868 34.6959 2.48911 34.6555 2.41708 34.5834C2.34504 34.5114 2.30458 34.4137 2.30458 34.3119L2.30458 25.7292C2.30602 25.6279 2.34744 25.5313 2.41981 25.4604L19.5889 8.29491L28.7112 17.4153L11.5421 34.5807ZM34.5879 11.5398L30.3436 15.7832L21.2213 6.66285L25.4656 2.41949C25.4998 2.38224 25.5413 2.3525 25.5876 2.33216C25.6339 2.31182 25.6839 2.30131 25.7344 2.30131C25.785 2.30131 25.835 2.31182 25.8813 2.33216C25.9276 2.3525 25.9691 2.38224 26.0033 2.41949L34.5879 11.0022C34.6251 11.0364 34.6549 11.0779 34.6752 11.1242C34.6956 11.1705 34.7061 11.2205 34.7061 11.271C34.7061 11.3216 34.6956 11.3716 34.6752 11.4178C34.6549 11.4641 34.6251 11.5057 34.5879 11.5398Z",
                    fill: "rgba(251,251,251,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector35833001")}
              ></Icon>
            </Flex>
            <Flex
              gap="30px"
              direction="column"
              width="486px"
              height="unset"
              justifyContent="center"
              alignItems="flex-end"
              position="absolute"
              top="472px"
              left="601px"
              padding="0px 20px 0px 0px"
              {...getOverrideProps(overrides, "Identities")}
            >
              <Text
                fontFamily="Open Sans"
                fontSize="25px"
                fontWeight="400"
                color="rgba(251,251,251,1)"
                lineHeight="34.04541015625px"
                textAlign="right"
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
                children={creatorDetails?.identity1}
                {...getOverrideProps(overrides, "Identity 1")}
              ></Text>
              <Text
                fontFamily="Open Sans"
                fontSize="25px"
                fontWeight="400"
                color="rgba(251,251,251,1)"
                lineHeight="34.04541015625px"
                textAlign="right"
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
                children={creatorDetails?.identity2}
                {...getOverrideProps(overrides, "Identity 2")}
              ></Text>
              <Text
                fontFamily="Open Sans"
                fontSize="25px"
                fontWeight="400"
                color="rgba(251,251,251,1)"
                lineHeight="34.04541015625px"
                textAlign="right"
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
                children={creatorDetails?.identity3}
                {...getOverrideProps(overrides, "Identity 3")}
              ></Text>
              <Text
                fontFamily="Open Sans"
                fontSize="25px"
                fontWeight="400"
                color="rgba(251,251,251,1)"
                lineHeight="34.04541015625px"
                textAlign="right"
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
                children={creatorDetails?.identity4}
                {...getOverrideProps(overrides, "Identity 4")}
              ></Text>
              <Text
                fontFamily="Open Sans"
                fontSize="25px"
                fontWeight="400"
                color="rgba(251,251,251,1)"
                lineHeight="34.04541015625px"
                textAlign="right"
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
                children={creatorDetails?.identity5}
                {...getOverrideProps(overrides, "Identity 5")}
              ></Text>
            </Flex>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
