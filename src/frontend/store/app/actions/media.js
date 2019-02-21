export const MEDIA_QUERY = 'MEDIA_QUERY';

export const actionMediaQuery = (mediaQuery, width, height) => ({
    type: MEDIA_QUERY,
    mediaQuery,
    width,
    height,
});
