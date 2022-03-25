import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SetupModel } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit {

  steps!: Observable<SetupModel[]>;
  currentStep!: Observable<SetupModel | null>;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: SetupModel) {
    this.stepsService.setCurrentStep(step);
  }

}
