/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function NavigationBar(props) {
  const { prop, overrides, ...rest } = props;
  const signInButtonOnClick = useNavigateAction({ type: "reload" });
  return (
    <View
      width="1545px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavigationBar")}
      {...rest}
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
        position="absolute"
        top="16.5px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="logo"
        {...getOverrideProps(overrides, "logo")}
      ></Text>
      <Flex
        gap="37px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top="0px"
        right="-1px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 38")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="30px"
          fontWeight="400"
          color="rgba(0,19,25,1)"
          lineHeight="40.8544921875px"
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
          children="Messaging"
          {...getOverrideProps(overrides, "Messaging")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="30px"
          fontWeight="400"
          color="rgba(0,19,25,1)"
          lineHeight="40.8544921875px"
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
          children="Connections"
          {...getOverrideProps(overrides, "Connections")}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="66px"
          padding="13px 28px 13px 28px"
          backgroundColor="rgba(0,183,235,1)"
          onClick={() => {
            signInButtonOnClick();
          }}
          {...getOverrideProps(overrides, "Sign In Button")}
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
            children="Sign in"
            {...getOverrideProps(overrides, "Sign in")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
