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
  const {
    creator,
    creatorDetails,
    scrollToMeetCreator,
    editUserProfile,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1728px"
      height="1117px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProfilePage")}
      {...rest}
    >
      <View
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Overview")}
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
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="23px"
          right="38px"
          border="1px SOLID rgba(251,251,251,1)"
          borderRadius="67px"
          padding="19px 19px 19px 19px"
          onClick={editUserProfile}
          {...getOverrideProps(overrides, "Edit Profile Button")}
        >
          <Icon
            width="37px"
            height="37px"
            viewBox={{ minX: 0, minY: 0, width: 37, height: 37 }}
            paths={[
              {
                d: "M36.2203 9.37015L27.6357 0.787424C27.386 0.537782 27.0896 0.339753 26.7634 0.204646C26.4372 0.0695388 26.0875 -6.82147e-16 25.7344 4.63731e-30C25.3813 -6.82147e-16 25.0317 0.0695388 24.7055 0.204646C24.3792 0.339753 24.0828 0.537782 23.8332 0.787424L0.787397 23.8283C0.28843 24.3359 0.00612386 25.0175 0 25.7292L0 34.3119C0 35.0248 0.28327 35.7086 0.787494 36.2127C1.29172 36.7168 1.97559 37 2.68867 37L11.2732 37C11.9851 36.9939 12.6667 36.7116 13.1745 36.2128L36.2203 13.1719C36.7199 12.6653 37 11.9825 37 11.271C37 10.5596 36.7199 9.87673 36.2203 9.37015ZM11.5421 34.5807C11.4712 34.6531 11.3745 34.6945 11.2732 34.6959L2.68867 34.6959C2.5868 34.6959 2.48911 34.6555 2.41708 34.5834C2.34504 34.5114 2.30458 34.4137 2.30458 34.3119L2.30458 25.7292C2.30602 25.6279 2.34744 25.5313 2.41981 25.4604L19.5889 8.29491L28.7112 17.4153L11.5421 34.5807ZM34.5879 11.5398L30.3436 15.7832L21.2213 6.66285L25.4656 2.41949C25.4998 2.38224 25.5413 2.3525 25.5876 2.33216C25.6339 2.31182 25.6839 2.30131 25.7344 2.30131C25.785 2.30131 25.835 2.31182 25.8813 2.33216C25.9276 2.3525 25.9691 2.38224 26.0033 2.41949L34.5879 11.0022C34.6251 11.0364 34.6549 11.0779 34.6752 11.1242C34.6956 11.1705 34.7061 11.2205 34.7061 11.271C34.7061 11.3216 34.6956 11.3716 34.6752 11.4178C34.6549 11.4641 34.6251 11.5057 34.5879 11.5398Z",
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
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Flex
          gap="25px"
          direction="row"
          width="unset"
          height="111px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 10px 0px 10px"
          {...getOverrideProps(overrides, "Creator Navigation Bar")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="88px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            onClick={scrollToMeetCreator}
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
              objectFit="contain"
              {...getOverrideProps(overrides, "InstagramIcon")}
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
              objectFit="contain"
              {...getOverrideProps(overrides, "YoutubeIcon36102787")}
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
            {...getOverrideProps(overrides, "Linkedin Tab")}
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
              objectFit="contain"
              {...getOverrideProps(overrides, "YoutubeIcon38485274")}
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
              children="linkedin_id"
              {...getOverrideProps(overrides, "linkedin_id")}
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
            {...getOverrideProps(overrides, "Twitter Tab")}
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
              objectFit="contain"
              {...getOverrideProps(overrides, "YoutubeIcon38485277")}
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
              children="twitter_id"
              {...getOverrideProps(overrides, "twitter_id")}
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
            {...getOverrideProps(overrides, "Facebook Tab")}
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
              objectFit="contain"
              {...getOverrideProps(overrides, "YoutubeIcon38485280")}
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
              children="facebook_id"
              {...getOverrideProps(overrides, "facebook_id")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
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
            fontSize="36px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="49.025390625px"
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
            fontSize="36px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="49.025390625px"
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
            fontSize="36px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="49.025390625px"
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
            fontSize="36px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="49.025390625px"
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
            fontSize="36px"
            fontWeight="400"
            color="rgba(251,251,251,1)"
            lineHeight="49.025390625px"
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
    </Flex>
  );
}
