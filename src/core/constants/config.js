export const config = {
    googleAnalytics : {
        MEASUREMENT_ID : process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    },
    facebookPixel : {
        FACEBOOK_PIXEL_ID : process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    },
    googleTagManager : {
        GTM_ID : 'GTM-PB9LD2TF'
    },
    environment: process.env.APP_ENV,
}