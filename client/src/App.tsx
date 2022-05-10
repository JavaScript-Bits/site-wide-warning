import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';

import './App.css';
import {showAdminCosoleModalState} from './atoms/ChangeAdminConsoleModalState';
import {showModalState} from './atoms/ChangeUserModalState';
import {showSettingsMenuState} from './atoms/SettingsMenuState';
import {currentUserState} from './atoms/UserState';
import ChangeAdminConsoleModal from './components/ChangeAdminConsoleModal';
import ChangeUserModal from './components/ChangeUserModal';
import LoadingOverlay from './components/LoadingOverlay';
import SettingsMenu from './components/SettingsMenu';
import {SiteWideWarning} from './components/SiteWideWarning';
import HomeScreen from './containers/HomeScreen';
import {useAppWarningHook} from './hooks/useSiteWarningHook';

const App = () => {
  const showChangeUserModal = useRecoilValue(showModalState);
  const showSettingsMenu = useRecoilValue(showSettingsMenuState);
  const setShowAdminCosoleModalState = useRecoilValue(
    showAdminCosoleModalState
  );
  const currentUser = useRecoilValue(currentUserState);

  const {loading, appWarning, showWarning, setShowWarning} =
    useAppWarningHook();

  useEffect(() => {
    if (
      appWarning?.appWarningOne &&
      ((currentUser?.userWarningClosedAt &&
        new Date(currentUser?.userWarningClosedAt) <
          new Date(appWarning.appWarningOne.updatedAt)) ||
        currentUser?.userWarningClosedAt === null)
    ) {
      setShowWarning(true);
    }
    if (
      appWarning?.appWarningOne &&
      currentUser?.userWarningClosedAt &&
      new Date(currentUser?.userWarningClosedAt) >
        new Date(appWarning.appWarningOne.updatedAt)
    ) {
      setShowWarning(false);
    }
  }, [appWarning, currentUser, setShowWarning]);

  if (loading) return <LoadingOverlay data-testid="loading" />;

  return (
    <div className="App">
      {appWarning?.appWarningOne && showWarning && (
        <SiteWideWarning appWarning={appWarning} currentUser={currentUser} />
      )}
      <HomeScreen />
      {showChangeUserModal ? <ChangeUserModal /> : null}
      {setShowAdminCosoleModalState ? <ChangeAdminConsoleModal /> : null}
      {showSettingsMenu ? <SettingsMenu /> : null}
    </div>
  );
};

export default App;
