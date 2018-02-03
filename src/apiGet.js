import qs from 'qs';

function handleResponse(res) {
  if (!res.ok) {
    const err = new Error(res.statusText);
    err.status = res.status;
    err.response = res;
    throw err;
  }
  return res.json();
}

export default function apiGet(resource, params = {}) {
  const fetchParams = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  const queryParams = qs.stringify(params);
  const query = `${process.env.REACT_APP_API_ENTRYPOINT}${resource}${
    queryParams ? `?${queryParams}` : ''
  }`;

  return fetch(query, fetchParams).then(handleResponse);
}
