export type AmplifyDependentResourcesAttributes = {
  "api": {
    "knit": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "knit": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "founderGroupRole": "string"
    }
  },
  "storage": {
    "CreatorStorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}