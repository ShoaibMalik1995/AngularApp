using System.Text.Json;

namespace WebAPI.Errors
{
    public class ApiError
    {
        #region Properties
        public int ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
        public string ErrorDetail { get; set; }
        #endregion

        #region Constr
        public ApiError(int errocode,string errormsg, string errordetail = null){
            this.ErrorCode = errocode;
            this.ErrorMessage = errormsg;
            this.ErrorDetail = errordetail;
        }
        #endregion

        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }
    }
}