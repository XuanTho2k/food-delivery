"use client";

import { gql, DocumentNode } from "@apollo/client";

export const LOGIN_USER: DocumentNode = gql`
  mutation LoginUser($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      user {
        id
        name
        email
        password
        address
        phone_number
      }
      accessToken
      refreshToken
      error {
        message
      }
    }
  }
`;

export const REGISTER_USER: DocumentNode = gql`
  mutation RegisterUser(
    $name: String!
    $password: String!
    $email: String!
    $phone_number: Float!
  ) {
    register(
      registerDto: {
        name: $name
        email: $email
        password: $password
        phone_number: $phone_number
      }
    ) {
      activation_token
    }
  }
`;

export const ACTIVATE_USER: DocumentNode = gql`
  mutation ActivateUser(
    $activationToken: String!
    $activationCode: String!
  ) {
    activateUser(
      activationDto: {
        activationToken: $activationToken
        activationCode: $activationCode
      }
    ) {
      user {
        name
        email
        phone_number
        createAt
      }
    }
  }
`;

export const GET_USER: DocumentNode = gql`
  query {
    getLoggedInUser {
      user {
        id
        name
        email
        address
        password
      }
      accessToken
      refreshToken
    }
  }
`;

export const FORGOT_PW: DocumentNode = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(forgotPasswordDto: { email: $email }) {
      message
    }
  }
`;
export const LOGOUT_USER: DocumentNode = gql`
  query {
    logOutUser {
      message
    }
  }
`;
