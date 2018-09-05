function handleResponse(response) {
  return response; // handle specifically on actions
}

function handleNetworkError(_error) {
  return Promise.reject(new Error('Network error'));
}

export const API = {
  parameters: (
    method,
    body,
  ) => {
    const params = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    };

    if (method === 'POST' || 'PUT') {
      params.body = JSON.stringify(body);
    }
    return params;
  },

  call: async (
    path,
    parameters,
  ) => {
    const url = `${path}`;
    return fetch(url, parameters).then(handleResponse, handleNetworkError);
  },

  get: async (path) => {
    return API.call(path, API.parameters('GET', undefined));
  },

  put: async (
    path,
    body,
  ) => {
    return API.call(path, API.parameters('PUT', body));
  },

  /*
  post: async (
    path: string,
    accessToken: AccessToken,
    body: object | undefined,
  ): Promise<Response> => {
    return API.call(path, API.parameters('POST', accessToken, body));
  },

  delete: async (
    path: string,
    accessToken: AccessToken,
    body: object | undefined,
  ): Promise<Response> => {
    return API.call(path, API.parameters('DELETE', accessToken, body));
  },
  */
};
