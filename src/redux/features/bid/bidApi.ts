import { baseApi } from "@/redux/api/baseApi";

const bid = baseApi.injectEndpoints({
    endpoints: (build) => ({
        postBid: build.mutation({
            query: (data) => ({
                url: "/bids/create",
                method: "POST",
                body: data
            })
        })
    })
})

export const { usePostBidMutation } = bid