export const getUrl = (data) => ({
    type: 'GET_URL',
    url: data
});

export const setUrl = (url) => ({
    type: 'SET_URL',
    url
});