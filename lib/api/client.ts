// FIXME: remove
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const baseUrl = 'https://kqprknumdqwifwdehnht.supabase.co';

type ClientOpeion = Omit<RequestInit, 'method'>;

async function request<TResponse>(url: string, config: RequestInit): Promise<TResponse> {
  const response = await fetch(url, config);

  const data = await response.json();

  return data;
}

const client = {
  get: <TResponse>(url: string, option?: ClientOpeion | undefined) => {
    return request<TResponse>(`${baseUrl}${url}`, {
      ...option,
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ'
      },
      method: 'GET',
    });
  },
  post: <TResponse>(url: string, body: object, option?: ClientOpeion | undefined) => {
    return request<TResponse>(`${baseUrl}${url}`, {
      ...option,
      headers: {
        ...option?.headers,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
      method: 'POST',
    });
  },
};

export default client;
