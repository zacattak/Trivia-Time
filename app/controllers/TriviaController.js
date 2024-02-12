import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js";

export class TriviaController {
    constructor() {
        console.log('trivia controller loaded')
        this.getQuestions()
    }

    async getQuestions() {
        try {
            await triviaService.getQuestions()
            Pop.success('get questions')
        }
        catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }


}





