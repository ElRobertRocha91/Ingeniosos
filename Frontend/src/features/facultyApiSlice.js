import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const facultyApi = createApi({
    reducerPath: 'facultyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: (builder) => ({
        getFaculty: builder.query({
            query: () => "/faculty",
        }),
    }),
});

export const { useGetFacultyQuery } = facultyApi;