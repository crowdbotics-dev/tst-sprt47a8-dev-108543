import axios from "axios"
const tstsprtadevAPI = axios.create({
  baseURL: "https://tst-sprt47a8-dev-108543.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstsprtadevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_lappu_list(payload) {
  return tstsprtadevAPI.get(`/api/v1/lappu/`)
}
function api_v1_lappu_create(payload) {
  return tstsprtadevAPI.post(`/api/v1/lappu/`, payload)
}
function api_v1_lappu_retrieve(payload) {
  return tstsprtadevAPI.get(`/api/v1/lappu/${payload.id}/`)
}
function api_v1_lappu_update(payload) {
  return tstsprtadevAPI.put(`/api/v1/lappu/${payload.id}/`, payload)
}
function api_v1_lappu_partial_update(payload) {
  return tstsprtadevAPI.patch(`/api/v1/lappu/${payload.id}/`, payload)
}
function api_v1_lappu_destroy(payload) {
  return tstsprtadevAPI.delete(`/api/v1/lappu/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tstsprtadevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tstsprtadevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstsprtadevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstsprtadevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tstsprtadevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstsprtadevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstsprtadevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_lappu_list,
  api_v1_lappu_create,
  api_v1_lappu_retrieve,
  api_v1_lappu_update,
  api_v1_lappu_partial_update,
  api_v1_lappu_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
