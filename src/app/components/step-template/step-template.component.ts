import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SetupModel } from 'src/app/models/step.model';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements OnInit {
  @Input() step!: SetupModel | null;
  constructor() { }

  ngOnInit(): void {
  }

  onCompleteStep() {
    if(!this.step) return
     this.step.isComplete = true;
  }

}
