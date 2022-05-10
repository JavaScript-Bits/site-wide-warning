import {gql, useQuery} from '@apollo/client';
import {UserGQLResponse} from '../models/User';

interface UserManyData {
  userMany: UserGQLResponse[];
}

interface UserManyVars {
  limit: number;
}

export const GET_USERS = gql`
  query GetUser($limit: Int!) {
    userMany(limit: $limit) {
      _id
      firstName
      lastName
      email
      userWarningClosedAt
    }
  }
`;

export const useGetUserHook = () => {
  const {loading, error, data, refetch} = useQuery<UserManyData, UserManyVars>(
    GET_USERS,
    {variables: {limit: 100}}
  );

  return {
    loading,
    error,
    data,
    refetch,
  };
};
