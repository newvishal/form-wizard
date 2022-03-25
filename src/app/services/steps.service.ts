import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SetupModel } from '../models/step.model';

const STEPS = [
  { setupIndex: 1, isComplete: false },
  { setupIndex: 2, isComplete: false },
  { setupIndex: 3, isComplete: false },
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps$: BehaviorSubject<SetupModel[]> = new BehaviorSubject<SetupModel[]>(STEPS);
  currentStep$:BehaviorSubject<SetupModel | null> = new BehaviorSubject<SetupModel | null>(null);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
   }
 
   setCurrentStep(setup: SetupModel): void {
    this.currentStep$.next(setup)
   }

   getCurrentStep(): Observable<SetupModel | null> {
     return this.currentStep$.asObservable()
   }

   getSteps():Observable<SetupModel[]> {
     return this.steps$.asObservable();
   }

   moveToNextStep(): void{
     const index = this.currentStep$.value?.setupIndex || 0;
     if(index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
     }
   }

   isLastStep(): boolean {
     return this.currentStep$.value?.setupIndex === this.steps$.value.length;
   }
}
