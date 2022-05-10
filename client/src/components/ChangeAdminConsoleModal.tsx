import React, {useEffect, useState} from 'react';
import {useSetRecoilState, useRecoilState} from 'recoil';
import {showDropdownState} from '../atoms/ChangeUserDropdownState';
import Logger from '../utils/Logger';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';
import {styles} from '../utils/Styles';
import ChangeSiteWarningDropdown from './ChangeSiteWarningDropdown';
import {nextSiteWarningState} from '../atoms/SiteWarningState';
import {showAdminCosoleModalState} from '../atoms/ChangeAdminConsoleModalState';
import ErrorOverlay from './ErrorOverlay';
import LoadingOverlay from './LoadingOverlay';
import {useAppWarningHook} from '../hooks/useSiteWarningHook';
import {siteMappedWideWarnings} from '../models/SiteWideWarning';

const ChangeAdminConsoleModal = () => {
  const setShowAdminCosoleModalState = useSetRecoilState(
    showAdminCosoleModalState
  );
  const [showDropdown, setShowDropdown] = useRecoilState(showDropdownState);
  const [nextSiteWarning, setNextSiteWarning] =
    useRecoilState(nextSiteWarningState);
  const [cancelButtonOpacity, setCancelButtonOpacity] = useState(1.0);
  const [changeUserButtonOpacity, setChangeUserButtonOpacity] = useState(1.0);
  const [iconColor, setIconColor] = useState('#414141');
  const ChevronIcon = showDropdown ? GoChevronUp : GoChevronDown;

  const onExitModal = () => {
    setShowAdminCosoleModalState(false);
    setShowDropdown(false);
  };

  const {loading, error, appWarning, addWarning, RemoveWarning, refetch} =
    useAppWarningHook();

  const removeWarning = async () => {
    await RemoveWarning({variables: {filter: {status: true}}});
    Logger.info('Removed Warning, name:' + nextSiteWarning?.value);
    setNextSiteWarning(null);
    refetch();
  };

  const handleWarningChange = async () => {
    if (appWarning?.appWarningOne) {
      await removeWarning();
    }
    await addWarning({
      variables: {record: {warning: nextSiteWarning?.value, status: true}},
    });
    refetch();
    Logger.info('Switched Warning to:' + nextSiteWarning?.value);
  };

  useEffect(() => {
    if (appWarning?.appWarningOne) {
      setNextSiteWarning(
        siteMappedWideWarnings[appWarning.appWarningOne.warning]
      );
    }
  }, [appWarning, setNextSiteWarning]);

  if (loading) return <LoadingOverlay data-testid="loading" />;
  if (error) return <ErrorOverlay data-testid="error" />;

  return (
    <div
      style={styles.root}
      data-testid="change_admin_panel_modal"
      onClick={onExitModal}
    >
      <div
        style={styles.modal}
        onClick={event => {
          event.stopPropagation();
          setShowDropdown(false);
        }}
      >
        <h1>Admin Console</h1>
        <h4>Start a Site Wide Warning</h4>
        <div
          style={styles.dropdownButton}
          onClick={event => {
            event.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          <div>{nextSiteWarning?.title} </div>
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
          <ChangeSiteWarningDropdown
            onSelect={warning => {
              setShowDropdown(!showDropdown);
              setNextSiteWarning(warning);
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
          <button
            style={{
              ...styles.changeUserButton,
              opacity: nextSiteWarning === null ? 0.5 : changeUserButtonOpacity,
            }}
            onMouseEnter={() =>
              nextSiteWarning !== null && setChangeUserButtonOpacity(0.8)
            }
            onMouseLeave={() =>
              nextSiteWarning !== null && setChangeUserButtonOpacity(1.0)
            }
            onClick={event => {
              event.stopPropagation();
              if (nextSiteWarning !== null) {
                setShowAdminCosoleModalState(false);
                removeWarning();
                onExitModal();
              }
            }}
            disabled={
              nextSiteWarning?.value !== appWarning?.appWarningOne?.warning
            }
          >
            End Warning
          </button>
          <button
            style={{
              ...styles.startWarningButton,
              opacity: nextSiteWarning === null ? 0.5 : changeUserButtonOpacity,
            }}
            onMouseEnter={() =>
              nextSiteWarning !== null && setChangeUserButtonOpacity(0.8)
            }
            onMouseLeave={() =>
              nextSiteWarning !== null && setChangeUserButtonOpacity(1.0)
            }
            onClick={event => {
              event.stopPropagation();
              if (nextSiteWarning !== null) {
                setShowAdminCosoleModalState(false);
                handleWarningChange();
                onExitModal();
              }
            }}
            disabled={
              nextSiteWarning === null ||
              nextSiteWarning?.value === appWarning?.appWarningOne?.warning
            }
          >
            Start warning
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAdminConsoleModal;
