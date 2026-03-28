import { NewTask } from "./new-task/new-task";
import { Task } from "./task/task";
import { Tasks } from "./tasks";
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [Tasks , Task , NewTask],
  exports: [Tasks],
  imports: [SharedModule , FormsModule,DatePipe]
})

export class TasksModule {}