export class ApiResponse<T> {
  constructor(
      public data: T,  // Allow data to be null
      public status: number,
      public message: string
  ) {}

  isSuccess(): boolean {
    return this.status >= 200 && this.status < 300;
  }

  isConflict(): boolean {
    return this.status === 409;
  }

  hasData(): boolean {
    return this.data !== null && this.data !== undefined;
  }
}

