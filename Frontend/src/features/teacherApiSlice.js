import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApiSlice = createSlice({
    reducerPath: 'teacherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        getTeacher: builder.query({
            query: () => "/teacher",
        }),
    }),
});

export const { useGetTeacherQuery } = teacherApiSlice;