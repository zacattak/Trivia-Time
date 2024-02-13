import { Question } from './models/trivia.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


results[]




}

export const AppState = createObservableProxy(new ObservableAppState())