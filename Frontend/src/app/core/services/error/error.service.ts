import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export enum CustomErrorCode {
  UN_KNOWN = 0,
}

export enum RedirectionCode {
  HTTP_300_MULTIPLE_CHOICES = 300,
  HTTP_301_MOVED_PERMANENTLY = 301,
  HTTP_302_FOUND = 302,
  HTTP_303_SEE_OTHER = 303,
  HTTP_304_NOT_MODIFIED = 304,
  HTTP_305_USE_PROXY = 305,
  HTTP_306_RESERVED = 306,
  HTTP_307_TEMPORARY_REDIRECT = 307,
  HTTP_308_PERMANENT_REDIRECT = 308,
  HTTP_400_BAD_REQUEST = 309,
}

export enum ServerError {
  HTTP_500_INTERNAL_SERVER_ERROR = 500,
  HTTP_501_NOT_IMPLEMENTED = 501,
  HTTP_502_BAD_GATEWAY = 502,
  HTTP_503_SERVICE_UNAVILABLE = 503,
  HTTP_504_GATEWAY_TIMEOUT = 504,
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505,
  HTTP_506_VARIANT_ALSO_NEGOTIATES = 506,
  HTTP_507_INSUFFICIENT_STORAGE = 507,
  HTTP_508_LOOP_DETECTED = 508,
  HTTP_509_BANDWIDTH_LIMIT_EXCEEDED = 509,
  HTTP_510_NOT_EXTENDED = 510,
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export enum SuccessCodes {
  HTTP_200_OK = 200,
  HTTP_201_CREATED = 201,
  HTTP_202_ACCEPTED = 202,
  HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203,
  HTTP_204_NO_CONTENT = 204,
  HTTP_205_RESET_CONTENT = 205,
  HTTP_206_PARTIAL_CONTENT = 206,
  HTTP_207_MULTI_STATUS = 207,
  HTTP_208_ALREADY_REPORTED = 208,
  HTTP_226_IM_USED = 209,
}

export enum ClientError {
  HTTP_400_BAD_REQUEST = 400,
  HTTP_401_UNAUTHORIZED = 401,
  HTTP_402_PAYMENT_REQUIRED = 402,
  HTTP_403_FORBIDDEN = 403,
  HTTP_404_NOT_FOUND = 404,
  HTTP_405_METHOD_NOT_ALLOWED = 405,
  HTTP_406_NOT_ACCEPTABLE = 406,
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407,
  HTTP_408_REQUEST_TIMEOUT = 408,
  HTTP_409_CONFLICT = 409,
  HTTP_410_GONE = 410,
  HTTP_411_LENGTH_REQUIRED = 411,
  HTTP_412_PRECONDITION_FAILED = 412,
  HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413,
  HTTP_414_REQUEST_URI_TOO_LONG = 414,
  HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415,
  HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  HTTP_417_EXCEPTION_FAILED = 417,
  HTTP_422_ENPROCESSABLE_ENTITY = 418,
  HTTP_423_LOCKED = 419,

}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _alertService: ToastrService) { }

  whichError(errorCode: number, errorMessage: string) {
    switch (errorCode) {
      case CustomErrorCode.UN_KNOWN:
        this._alertService.error(errorMessage, "Alert!");
        break;
      case ClientError.HTTP_400_BAD_REQUEST:
        this._alertService.error(errorMessage, "Alert!");
        break;
      default:
        this._alertService.warning(errorMessage, "Warning!");
        break;
    }
  }

  userNotification(notificationCode: number, notification: string){
    switch (notificationCode) {
      case SuccessCodes.HTTP_200_OK:
        this._alertService.success(notification,"Success!");
        break;
      default:
        this._alertService.success(notification,"Success!");
        break;
    }
  }
}
