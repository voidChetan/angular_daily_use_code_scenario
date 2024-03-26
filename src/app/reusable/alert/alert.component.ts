import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnChanges {

  @Input() isAlertVisible: boolean = false;
  @Input() message: string = '';
  showAlert: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isAlertVisible) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    }
  }
}
