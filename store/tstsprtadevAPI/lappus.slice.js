import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_lappu_list = createAsyncThunk(
  "lappus/api_v1_lappu_list",
  async payload => {
    const response = await apiService.api_v1_lappu_list(payload)
    return response.data
  }
)
export const api_v1_lappu_create = createAsyncThunk(
  "lappus/api_v1_lappu_create",
  async payload => {
    const response = await apiService.api_v1_lappu_create(payload)
    return response.data
  }
)
export const api_v1_lappu_retrieve = createAsyncThunk(
  "lappus/api_v1_lappu_retrieve",
  async payload => {
    const response = await apiService.api_v1_lappu_retrieve(payload)
    return response.data
  }
)
export const api_v1_lappu_update = createAsyncThunk(
  "lappus/api_v1_lappu_update",
  async payload => {
    const response = await apiService.api_v1_lappu_update(payload)
    return response.data
  }
)
export const api_v1_lappu_partial_update = createAsyncThunk(
  "lappus/api_v1_lappu_partial_update",
  async payload => {
    const response = await apiService.api_v1_lappu_partial_update(payload)
    return response.data
  }
)
export const api_v1_lappu_destroy = createAsyncThunk(
  "lappus/api_v1_lappu_destroy",
  async payload => {
    const response = await apiService.api_v1_lappu_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const lappusSlice = createSlice({
  name: "lappus",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_lappu_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lappu_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lappu_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lappu_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lappu_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lappu_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lappu_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lappu_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_lappu_list,
  api_v1_lappu_create,
  api_v1_lappu_retrieve,
  api_v1_lappu_update,
  api_v1_lappu_partial_update,
  api_v1_lappu_destroy,
  slice: lappusSlice
}
