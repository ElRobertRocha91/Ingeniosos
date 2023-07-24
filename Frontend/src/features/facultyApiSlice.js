import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const facultyApiSlice = createSlice({
    reducerPath: 'facultyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        getFaculty: builder.query({
            query: () => "/faculty",
        }),
    }),
});

export const { useGetFacultyQuery } = facultyApiSlice;