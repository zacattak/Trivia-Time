export const triviaApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=12&difficulty=hard&type=multiple',
    timeout: 8999
})