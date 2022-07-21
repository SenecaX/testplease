import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'testplease-task-list',
  template: `
    <div class="list-items">
      <testplease-please-task
        *ngFor="let task of tasksInOrder"
        [task]="task"
        (onArchiveTask)="onArchiveTask.emit($event)"
        (onPinTask)="onPinTask.emit($event)"
      >
      </testplease-please-task>
      <div
        *ngIf="tasksInOrder.length === 0 && !loading"
        class="wrapper-message"
      >
        <span class="icon-check"></span>
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
      <div *ngIf="loading">
        <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">
          <span class="glow-checkbox"></span>
          <span class="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['task-list.component.scss'],
})
export class PleaseTaskListComponent {
  //  @Input() tasks: any[] = [];

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  tasksInOrder: any[] = [];

  @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Input()
  set tasks(arr: any[]) {
    const initialTasks = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    this.tasksInOrder = filteredTasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}
