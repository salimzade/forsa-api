type ApiResponse<T = any> = {
  statusCode: number;
  message: string;
  data: T | null;
};

function createResponse<T = any>(statusCode: number, message: string, data: T | null = null): ApiResponse<T> {
  return { statusCode, message, data };
}

export const response = {
  /**
   * 200 OK: The request has succeeded.
   * @param message - The success message.
   * @param data - The payload (data) to be returned.
   */
  success: <T = any>(message: string = 'Success', data: T | null = null): ApiResponse<T> => {
    return createResponse(200, message, data);
  },

  /**
   * 201 Created: The resource has been successfully created.
   * @param message - The creation message.
   * @param data - The created resource.
   */
  created: <T = any>(message: string = 'Resource created successfully', data: T | null = null): ApiResponse<T> => {
    return createResponse(201, message, data);
  },

  /**
   * 400 Bad Request: The request was invalid (e.g., wrong data, validation failure).
   * @param message - The error message.
   * @param data - Additional error details (e.g., validation issues).
   */
  error: <T = any>(message: string = 'Bad Request', data: T | null = null): ApiResponse<T> => {
    return createResponse(400, message, data);
  },

  /**
   * 401 Unauthorized: Missing or invalid authentication token.
   * @param message - The message regarding unauthorized access.
   */
  unauthorized: (message: string = 'Unauthorized'): ApiResponse => {
    return createResponse(401, message);
  },

  /**
   * 403 Forbidden: Access is denied (lack of necessary permissions).
   * @param message - The message regarding the prohibition.
   */
  forbidden: (message: string = 'Forbidden'): ApiResponse => {
    return createResponse(403, message);
  },

  /**
   * 404 Not Found: The requested resource was not found.
   * @param message - The message indicating the resource was not found.
   */
  notFound: (message: string = 'Not Found'): ApiResponse => {
    return createResponse(404, message);
  },

  /**
   * 500 Internal Server Error: A generic server-side error occurred.
   * @param message - The error message.
   */
  serverError: (message: string = 'Internal Server Error'): ApiResponse => {
    return createResponse(500, message);
  }
};
