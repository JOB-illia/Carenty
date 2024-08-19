import { carenty } from '~/src/shared/api';

export interface IApiSingUpViewerPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export type TRole = 'lessor';

export interface IApiSingUpViewerResponse {
  token: {
    token: string;
    role: TRole;
  };
  lessor: {
    id: number;
    first_name: string;
    last_name: string;
  };
}

export const apiSignUpViewer = (payload: IApiSingUpViewerPayload) => {
  return carenty.post<IApiSingUpViewerResponse>('/lessors/registration', { ...payload });
};
