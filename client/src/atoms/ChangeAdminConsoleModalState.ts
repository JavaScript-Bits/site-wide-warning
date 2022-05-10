import {atom} from 'recoil';

const showAdminCosoleModalState = atom<boolean>({
  key: 'showAdminCosoleModal',
  default: false,
});

export {showAdminCosoleModalState};
