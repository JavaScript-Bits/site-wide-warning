import {atom} from 'recoil';
import {SiteWarning} from '../models/SiteWideWarning';
// import {Warning} from '../models/SiteWideWarning';

export const nextSiteWarningState = atom<SiteWarning | null>({
  key: 'nextSiteWarning',
  default: null,
});
