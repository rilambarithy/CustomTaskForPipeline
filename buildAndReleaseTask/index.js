"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
const fetch = require('node-fetch');
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userName = tl.getInput('userName', true);
            if (userName == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Hello', userName);
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
        try {
            const id = tl.getInput('instanceId', true);
            if (id == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Initiating Rest Call for ID ', id);
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }

        try{
            const urlString = tl.getInput('instanceId', true);
            console.log('calling rest service')
              fetch(urlString)
               .then(res => res.json())
                  .then(json => console.log(json));
            }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
             console.error();
        }
    });
}
run();