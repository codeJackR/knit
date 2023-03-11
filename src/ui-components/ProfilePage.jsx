/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfilePage(props) {
  const { creator, creatorDetails, overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="1045px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProfilePage")}
      {...rest}
    >
      <Image
        width="calc(100% - 0px)"
        height="calc(100% - 0px)"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="CreatorMedia/5aeda810-e9f5-4f87-9a97-0048b3492ffe/backgroundImage"
        {...getOverrideProps(overrides, "Creator Backgroud Image")}
      ></Image>
      <Flex
        gap="25px"
        direction="row"
        width="1728px"
        height="111px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "Creator Navigation Bar")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="88px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Meet Tab")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="25px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="34.04541015625px"
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
            children={`${"Meet "}${creator?.first_name}`}
            {...getOverrideProps(overrides, "Meet FirstName")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="110px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "Instagram Tab")}
        >
          <Image
            width="45px"
            height="45px"
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
            fontSize="24px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="32.68359375px"
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
            children={creatorDetails?.instagram_id}
            {...getOverrideProps(overrides, "insta_id")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="110px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "Youtube Tab")}
        >
          <Image
            width="56px"
            height="38px"
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
            fontSize="24px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="32.68359375px"
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
            children={creatorDetails?.youtube_id}
            {...getOverrideProps(overrides, "youtube_id")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="30px"
        direction="column"
        width="130px"
        height="290px"
        justifyContent="center"
        alignItems="flex-end"
        position="absolute"
        bottom="15px"
        right="0px"
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
  );
}
