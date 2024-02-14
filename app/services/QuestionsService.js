import { triviaApi } from "./AxiosService.js"
class TriviaService {
    async getResults() {
        const response = await triviaApi.get('category/question')
        console.log('from api', response.data);

    }
}
export const triviaService = new TriviaService()