enum HttpCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

enum HttpMsg {
  OK = "Ok",
  NO_CONTENT = "NO CONTENT",
  BAD_REQUEST = "BAD REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  NOT_FOUND = "NOT FOUND",
  INTERNAL_SERVER_ERROR = "INTERNAL SERVERERROR",
  INVALID_EMAIL = "Invalid Email",
  INVALID_TEAMID = "Invalid Team ID",
  MANAGER_EXISTS = "Manager Exists",
  AUTH_DOES_NOT_EXIST = "Auth does not exist",
  PASSWORD_INCORRECT = "Password is incorrect",
  ERROR_CREATING_LOGIN = "Error creating login",
  ERROR_CREATING_JWT = "Error creating JWT",
  SESSION_SUCESS = "Session created successfully",
  SESSION_ERROR = "Error creating session",
  SESSION_ID_EXISTS = "Session ID already exists",
  MANAGER_LOGIN_FAILED = "Login failed",
  MANAGER_ADD_SUCCESS = "Manager added successfully",
  MANAGER_ADD_FAILED = "Manager added failed",
  MANAGER_NOT_FOUND = "Manager not found",
  TEAM_NOT_FOUND = "Team not found",
  MANAGER_DEOS_NOT_EXIST = "Manager does not exist",
  PLAYER_EXIT_ERROR = "Player exited error",
  PLAYER_ALREADY_HAS_ACCOUNT = "Player already has an account",
  PLAYER_ALREADY_EXISTS_IN_TEAM = "Player already exists in team",
  PLAYER_NOT_EXISTS_IN_TEAM = "Player does not exists in team",
  PLAYER_DOES_NOT_EXIST = "Player does not exist",
  PLAYER_REMOVE_FAILED = "Player remove failed",
  AUTHENTICATION_TOKEN_NOT_FOUND = "Authorization token not found",
  INVALID_USER = "Invalid user",
  INVALID_ACCESS_TOKEN = "Invalid access token",
  INVALID_REFRESH_TOKEN = "Invalid refresh token",
  HUB_EXIST = "Hub already exists",
  HUB_NOT_FOUND = "Hub not found",
}

export { HttpCode, HttpMsg };
