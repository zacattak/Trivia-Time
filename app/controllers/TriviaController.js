import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";

function _drawResults() {
    const results = AppState.results
    console.log('drawing results', results)
    let htmlString = ''
    results.forEach(result => htmlString += result.CardHTMLTemplate)
}

export class TriviaController {
    constructor() {
        console.log('trivia controller loaded')
        this.getResults()
        AppState.on('results', _drawResults)
    }

    async getResults() {
        try {
            await triviaService.getResults()
            Pop.success('get results')
        }
        catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async waitForPromise() {

        const message = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('running 3rd')
            }, 3000,)
        })
    }
}





