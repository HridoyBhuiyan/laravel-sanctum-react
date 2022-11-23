class ApiData{
    static baseURL = 'http://localhost:8000/api'
    static registration = this.baseURL+'/registration'
    static login = this.baseURL+'/login'
    static traffic = this.baseURL+'/trafficCheck/'
    static profile = this.baseURL+"/profile/"
    static sendEmail = this.baseURL+"/getEmail"
    static sendEmailAdmin = this.baseURL+"/sendEmail"

} export default ApiData;