import { triviaApi } from "./AxiosService.js"
class TriviaService {
    async getQuestions() {
        const response = await triviaApi.get('category/questions')
        console.log('from api', response.data);

    }
}
export const triviaService = new TriviaService()