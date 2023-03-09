import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked() {
    this.cityClickedEvent.emit(this.city);
  }
}
