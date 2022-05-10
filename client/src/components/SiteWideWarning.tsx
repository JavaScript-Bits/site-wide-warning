import {gql, useMutation} from '@apollo/client';
import {useSetRecoilState} from 'recoil';
import {currentUserState} from '../atoms/UserState';
import {useGetUserHook} from '../hooks/userGetUserHook';
import {
  siteMappedWideWarnings,
  WarningGQLResponse,
} from '../models/SiteWideWarning';
import {User} from '../models/User';
import Logger from '../utils/Logger';
import {alertStyles, styles} from '../utils/Styles';

interface ViewProps {
  appWarning: WarningGQLResponse | undefined;
  currentUser: User | null;
}

const DISMISS_WARNING = gql`
  mutation UpdateUser($_id: MongoID!, $record: UpdateByIdUserInput!) {
    userUpdateById(_id: $_id, record: $record) {
      record {
        _id
        firstName
        lastName
        email
        userWarningClosedAt
      }
    }
  }
`;

export const SiteWideWarning = ({appWarning, currentUser}: ViewProps) => {
  const [dismissWarning] = useMutation(DISMISS_WARNING);
  const setCurrentUser = useSetRecoilState(currentUserState);
  const {data} = useGetUserHook();

  const handleDismissUserWarning = async () => {
    const time = new Date().toISOString();
    await dismissWarning({
      variables: {
        _id: currentUser?.id,
        record: {userWarningClosedAt: time},
      },
    });
    const updatedUser = data?.userMany.find(i => i._id === currentUser?.id);
    if (updatedUser) {
      setCurrentUser({
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        userWarningClosedAt: time,
      });
    }
    Logger.info(
      'User Switched off Warning: userName' +
        currentUser?.firstName +
        ' ' +
        currentUser?.lastName
    );
  };

  return (
    <div style={alertStyles.alert}>
      <p>{siteMappedWideWarnings[appWarning!.appWarningOne.warning].label}</p>{' '}
      <button
        onClick={handleDismissUserWarning}
        style={styles.dismissWarningButtonDisabled}
      >
        Dismiss
      </button>
    </div>
  );
};
