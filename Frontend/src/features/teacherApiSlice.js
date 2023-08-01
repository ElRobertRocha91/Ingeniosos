import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
    reducerPath: 'teacherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: (builder) => ({
        getTeacher: builder.query({
            query: () => "/teacher",
        }),
    }),
});

export const { useGetTeacherQuery } = teacherApi;