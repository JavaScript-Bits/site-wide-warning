export type Warning =
  | 'DownloadServerUnavailableWarning'
  | 'UploadServerUnavailableWarning'
  | 'DataInconsistencyWarning';

export const siteMappedWideWarnings: Record<Warning, SiteWarning> = {
  DownloadServerUnavailableWarning: {
    title: 'Download Server Unavailable Warning',
    label:
      'We are currently experiencing issues with our download server, we’re working on fixing it as soon as possible',
    value: 'DownloadServerUnavailableWarning',
  },
  UploadServerUnavailableWarning: {
    title: 'Upload Server Unavailable Warning',
    label:
      'We are currently experiencing issues with our upload server, we’re working on fixing it as soon as possible',
    value: 'UploadServerUnavailableWarning',
  },
  DataInconsistencyWarning: {
    title: 'Data Inconsistency Warning',
    label:
      'We are currently experiencing some issues with data consistency, we’re working on fixing it as soon as possible',
    value: 'DataInconsistencyWarning',
  },
};

export interface SiteWarning {
  title: string;
  label: string;
  value: Warning;
}

interface WarningModel {
  _id: string;
  warning: Warning;
  updatedAt: Date;
}

export interface WarningGQLResponse {
  appWarningOne: WarningModel;
}
