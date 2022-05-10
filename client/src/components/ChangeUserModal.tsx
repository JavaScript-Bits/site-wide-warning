import React, {useState} from 'react';
import {useSetRecoilState, useRecoilState} from 'recoil';
import ChangeUserDropdown from './ChangeUserDropdown';
import {currentUserState, nextUserState} from '../atoms/UserState';
import {showDropdownState} from '../atoms/ChangeUserDropdownState';
import {showModalState} from '../atoms/ChangeUserModalState';
import {User} from '../models/User';
import Logger from '../utils/Logger';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';
import LoadingOverlay from './LoadingOverlay';
import ErrorOverlay from './ErrorOverlay';
import {styles} from '../utils/Styles';
import {useGetUserHook} from '../hooks/userGetUserHook';

const ChangeUserModal = () => {
  const {loading, error, data} = useGetUserHook();

  const setShowModal = useSetRecoilState(showModalState);
  const [showDropdown, setShowDropdown] = useRecoilState(showDropdownState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [nextUser, setNextUser] = useRecoilState(nextUserState);
  const [cancelButtonOpacity, setCancelButtonOpacity] = useState(1.0);
  const [changeUserButtonOpacity, setChangeUserButtonOpacity] = useState(1.0);
  const [iconColor, setIconColor] = useState('#414141');
  const ChevronIcon = showDropdown ? GoChevronUp : GoChevronDown;

  if (loading) return <LoadingOverlay data-testid="loading" />;
  if (error) return <ErrorOverlay data-testid="error" />;

  const onExitModal = () => {
    setShowModal(false);
    setShowDropdown(false);
    setNextUser(null);
  };

  return (
    <div
      style={styles.root}
      data-testid="change_user_modal"
      onClick={onExitModal}
    >
      <div
        style={styles.modal}
        onClick={event => {
          event.stopPropagation();
          setShowDropdown(false);
        }}
      >
        <h1>
          {currentUser
            ? `Logged in as ${currentUser.firstName} ${currentUser.lastName}`
            : 'Not Logged In'}
        </h1>
        <h4>Change User</h4>
        <div
          style={styles.dropdownButton}
          onClick={event => {
            event.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          <div>
            {nextUser?.firstName} {nextUser?.lastName}
          </div>
          <ChevronIcon
            size={30}
            color={iconColor}
            onMouseEnter={() => setIconColor('#525252')}
            onMouseLeave={() => setIconColor('#414141')}
            onClick={event => {
              event.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
          />
        </div>
        {showDropdown ? (
          <ChangeUserDropdown
            users={
              data
                ? data.userMany.map(
                    ({
                      _id,
                      firstName,
                      lastName,
                      email,
                      userWarningClosedAt,
                    }) => {
                      return {
                        id: _id,
                        firstName,
                        lastName,
                        email,
                        userWarningClosedAt,
                      } as User;
                    }
                  )
                : []
            }
            onSelect={user => {
              setShowDropdown(!showDropdown);
              setNextUser(user);
            }}
          />
        ) : null}
        <div style={styles.footer}>
          <div
            style={{...styles.cancelButton, opacity: cancelButtonOpacity}}
            onClick={onExitModal}
            onMouseEnter={() => setCancelButtonOpacity(0.8)}
            onMouseLeave={() => setCancelButtonOpacity(1.0)}
          >
            Cancel
          </div>
          <div
            style={{
              ...styles.changeUserButton,
              opacity: nextUser === null ? 0.5 : changeUserButtonOpacity,
            }}
            onMouseEnter={() =>
              nextUser !== null && setChangeUserButtonOpacity(0.8)
            }
            onMouseLeave={() =>
              nextUser !== null && setChangeUserButtonOpacity(1.0)
            }
            onClick={event => {
              event.stopPropagation();
              if (nextUser !== null) {
                setShowModal(false);
                setCurrentUser(nextUser);
                Logger.info(
                  'Switched user to ' +
                    nextUser?.firstName +
                    ' ' +
                    nextUser?.lastName
                );
                onExitModal();
              }
            }}
          >
            Change User
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeUserModal;
