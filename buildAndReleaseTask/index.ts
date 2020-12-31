import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const userName: string | undefined = tl.getInput('userName', true);
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
        const id: string | undefined = tl.getInput('instanceId', true);
        if (id == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Initiating Rest Call for ID ', id);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }

}

run();