import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() {
    console.log('EditorService connected...');
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}