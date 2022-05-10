import {gql, useMutation, useQuery} from '@apollo/client';
import {useState} from 'react';
import {WarningGQLResponse} from '../models/SiteWideWarning';

export const GET_WARNING = gql`
  query GetWarning {
    appWarningOne {
      _id
      warning
      updatedAt
    }
  }
`;

const ADD_WARNING = gql`
  mutation AddWarning($record: CreateOneAppWarningInput!) {
    appWarningCreateOne(record: $record) {
      record {
        _id
        warning
      }
    }
  }
`;

const REMOVE_WARNING = gql`
  mutation RemoveWarning($filter: FilterRemoveManyAppWarningInput!) {
    appWarningRemoveMany(filter: $filter) {
      numAffected
    }
  }
`;

export const useAppWarningHook = () => {
  const [showWarning, setShowWarning] = useState(false);

  const {
    loading,
    error,
    data: appWarning,
    refetch,
  } = useQuery<WarningGQLResponse>(GET_WARNING);

  const [addWarning, {loading: createLoading, error: createError}] =
    useMutation(ADD_WARNING);

  const [RemoveWarning] = useMutation(REMOVE_WARNING);

  return {
    loading,
    error,
    appWarning,
    createLoading,
    createError,
    addWarning,
    RemoveWarning,
    refetch,
    showWarning,
    setShowWarning,
  };
};
