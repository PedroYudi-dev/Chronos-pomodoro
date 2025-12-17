import type { TaskModel } from "../../Models/TaskModel";

export enum TaskActionType {
  START_TASK = "START_TASK",
  INTERUPT_TASK = "INTERRUPT_TASK",
  RESET_TASK = "RESET_TASK",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export type TaskActionPayload =
  | {
      type: TaskActionType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionType.COUNT_DOWN;
      payload: { secondsRemaining : number};
    }; 

export type TaskActionOutPayload =
  | {
      type: TaskActionType.RESET_TASK;
    }
  | {
      type: TaskActionType.INTERUPT_TASK;
    }
  | {
      type: TaskActionType.COMPLETE_TASK;
    };

export type TaskActionModel = TaskActionPayload | TaskActionOutPayload;

// ESSA FORMA É BOA PARA CRIAR POIS NÃO QUEBRA O SISTEMA, E ELE NÃO IRÁ FICAR PRESO EM UM TIPO SÓ
