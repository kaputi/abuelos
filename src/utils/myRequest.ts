const myRequest = async (
  url: RequestInfo,
  { method, body, headers }: RequestInit
) => {
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    credentials: 'include',
    method,
    body,
  })
}
