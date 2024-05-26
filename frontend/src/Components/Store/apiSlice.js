import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:5000';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder => ({
        getAllData: builder.query({
            query: (websiteName) => `/api/getData/${websiteName}`,
            providesTags: ["websiteData"]
            
        }),

        
        getWebsiteData: builder.query({
            query: () => `/api/getWebsiteData`,
            providesTags: ['websiteTable']
        }),

        getReferrerData: builder.query({
            query: () => `api/getRefferrerData`,
            providesTags: ['referrerTable']
        }),

        getPagesData: builder.query({
            query: () => `/api/getPagesData`,
            providesTags: ['pagesTable']
        }),

        getPageSectionData: builder.query({
            query: () => `/api/getPageSectionData`,
            providesTags: ['pageSectionTable']
        }),

        getEventsData: builder.query({
            query: () => `/api/getEventsData`,
            providesTags: ['EventsTable']
        }),

        getSessionsData: builder.query({
            query: () => `/api/getSessionsData`,
            providesTags: ['SessionsTable']
        }),

        getSessionPagesData: builder.query({
            query: () => `/api/getSessionPagesData`,
            providesTags: ['SessionPagesTable']
        }),


        getUsersData: builder.query({
            query: () => `/api/getUserData`,
            providesTags: ['UsersTable']
        }),
        



        
    }),
});



export default apiSlice;