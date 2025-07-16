export type ApiResponse<T> = {
  message: string;
  data: T | null;
};

export function successResponse<T>(
  data: T | null = null,
  message: string = 'success',
): ApiResponse<T> {
  return {
    message,
    data,
  };
}
