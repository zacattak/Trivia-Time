import { TriviaController } from "./controllers/QuestionsController.js"
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TriviaController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])