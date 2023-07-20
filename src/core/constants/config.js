export const config = {
    mixpanel: {
        project_token: process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN,
        api_secret: process.env.NEXT_PUBLIC_MIXPANEL_API_SECRET,
    },
    environment: process.env.NODE_ENV,
}