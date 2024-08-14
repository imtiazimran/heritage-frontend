import { baseApi } from "@/redux/api/baseApi";

const property = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProperties: build.query({
            query: (args) => {
              // Check if args is undefined or empty
              if (!args || args.length === 0) {
                return {
                  url: `/property`, // Default URL without any query parameters
                  method: "GET",
                };
              }
          
              // If args is defined and not empty
              const queryString = args
                .map((item: { name: string; value: string }) => `${item.name}=${item.value}`)
                .join('&');
          
              return {
                url: `/property?${queryString}`,
                method: "GET",
              };
            },
          }),
          
        getProperty: build.query({
            query: (id) => ({
                url: `/property/${id}`,
            }),
        }),
        createProperty: build.mutation({
            query: (data) => ({
                url: "/property",
                method: "POST",
                body: data
            }),
        }),
        updateProperty: build.mutation({
            query: ({ id, data }) => ({
                url: `/property/${id}`,
                method: "PATCH",
                body: data
            }),
        }),
        deleteProperty: build.mutation({
            query: (id) => ({
                url: `/property/${id}`,
                method: "DELETE",
            }),
        }),
    }),
})

export const { useGetPropertiesQuery, useGetPropertyQuery, useCreatePropertyMutation, useUpdatePropertyMutation, useDeletePropertyMutation } = property