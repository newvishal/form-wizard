import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SetupModel } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';



@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormPageComponent implements OnInit {
  currentSetup!: Observable<SetupModel| null>
  constructor(
    private router: Router,
    private stepsService: StepsService
  ) { }

  ngOnInit(): void {
    this.currentSetup = this.stepsService.getCurrentStep();
  }

  onNextStep(){
    if(!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep()
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel(): 'Continue' | 'Finish' {
    return !this.stepsService.isLastStep() ? 'Continue': 'Finish';
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }
}
