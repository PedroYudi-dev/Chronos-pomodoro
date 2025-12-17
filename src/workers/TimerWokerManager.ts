import type { TaskStateModel } from "../Models/TaskStateModel";

let  instance: TimerWorkeManager | null

// vai ser uma classe que vai gerenciar nosso WORKER

export class TimerWorkeManager {
    private worker: Worker;

    private constructor(){
        this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
    }

    static getInstance(){
        if(!instance){
            instance = new TimerWorkeManager()
        }
        return instance;
    }

    // CRIA A MENSAGEM PARA VER SE ESTA EM ANDAMENTO OU NÃO
    postMessage(message: TaskStateModel){
        this.worker.postMessage(message)
    }

    // MOSTRA EM AÇÃO PARA RODAR OU PARA
    onmessage(callBack: (e: MessageEvent) => void){
        this.worker.onmessage = callBack
    }

    // AQUI FINALIZA 
    terminate(){
        this.worker.terminate()
        instance = null
    }
}