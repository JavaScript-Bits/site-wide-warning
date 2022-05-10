export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userWarningClosedAt: string | null;
}

export interface UserGQLResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userWarningClosedAt: string | null;
}
