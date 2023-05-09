export const FETCHING = 'signup/fetching'
export const RESOLVED = 'signup/resolved'
export const REJECTED = 'signup/rejected'

export const Fetching = () => ({ type: FETCHING });
export const Resolved = (data) => ({ type: RESOLVED, payload: data });
export const Rejected = (error) => ({ type: REJECTED, payload: error });
