class FetchInstance {
  private baseUrl: string;
  private options: ResponseType;

  constructor({ baseUrl, options }) {}

  setBaseUrl() {
    return this;
  }

  setBaseOptions() {
    return this;
  }

  setMethod() {
    return this;
  }

  setParams() {
    return this;
  }

  request() {
    return fetch();
  }

  setErrorHandler() {}
}
// https://kentcdodds.com/blog/using-fetch-with-type-script
