export interface ApiResponse<T> {
  data: T | null;  // Allow data to be null
  status: number;
  message: string;
}
