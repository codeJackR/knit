/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MeetCreator(props) {
  const { creator, overrides, ...rest } = props;
  return (
    <Flex
      gap="50px"
      direction="row"
      width="1728px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="78px 75px 78px 100px"
      backgroundColor="rgba(3,3,3,0.93)"
      {...getOverrideProps(overrides, "MeetCreator")}
      {...rest}
    >
      <Image
        width="502px"
        height="631px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "photo-1548690312-e3b507d8c110 1")}
      ></Image>
      <Flex
        gap="30px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Meet Creator Block")}
      >
        <Text
          fontFamily="Crete Round"
          fontSize="64px"
          fontWeight="400"
          color="rgba(255,253,244,1)"
          lineHeight="81.66400146484375px"
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
          children={`${"Meet "}${creator?.first_name}`}
          {...getOverrideProps(overrides, "Meet Creator Text")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="25px"
          fontWeight="600"
          color="rgba(255,253,244,1)"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="I'm a fitness enthusiast turned aspiring trainer. I believe that health is wealth and I'm on a mission to help others unlock their full potential through fitness. With [insert number of years] years of experience in strength training, cardio, and nutrition, I'm dedicated to creating customized programs tailored to each individual's unique goals. Let's work together to transform your mind and body, one rep at a time. My approach to fitness is centered around building a positive mindset and creating sustainable habits. I understand that making lifestyle changes can be challenging, and I'm here to provide guidance, support, and accountability every step of the way. I believe that fitness should be enjoyable and empowering, and I strive to create a fun and inclusive environment for all of my clients. Whether you're a seasoned gym-goer or just starting out, I'm confident that together we can achieve your fitness goals and unlock your full potential. Let's work together to create a stronger, healthier, and happier you!"
          {...getOverrideProps(overrides, "Meet Creator Description")}
        ></Text>
      </Flex>
    </Flex>
  );
}
