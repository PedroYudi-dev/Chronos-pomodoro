import type { TaskModel } from "../../Models/TaskModel";

export enum TaskActionType {
  START_TASK = "START_TASK",
  INTERUPT_TASK = "INTERRUPT_TASK",
  RESET_TASK = "RESET_TASK",
}

export type TaskActionPayload = {
  type: TaskActionType.START_TASK;
  payload: TaskModel;
}; 

export type TaskActionOutPayload =
  | {
      type: TaskActionType.RESET_TASK;
    }
  | {
      type: TaskActionType.INTERUPT_TASK;
    };

export type TaskActionModel = TaskActionPayload | TaskActionOutPayload;

// ESSA FORMA É BOA PARA CRIAR POIS NÃO QUEBRA O SISTEMA, E ELE NÃO IRÁ FICAR PRESO EM UM TIPO SÓ
