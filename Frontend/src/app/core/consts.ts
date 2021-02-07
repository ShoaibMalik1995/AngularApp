
export enum ApiMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH"
}

export enum AuthEndPoints {
  CHECK_SERVER = "/checkserver/",
  LOGIN = "/auth/token/login/",
  CURRENT_USER = "/auth/user/me/",
  LOGOUT_USER = "/auth/token/logout/",
  REGISTER = "/auth/users/",
  FORGET_PASSWORD = "",
  RESET_PASSSWORD = "",

  // Production Pipeline APi End Points
  Production_Pipeline_Months = "productionpipelinemonths/",

}
