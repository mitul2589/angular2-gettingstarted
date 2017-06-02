import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'star-rating',
    templateUrl: 'star.component.html'
})

export class StarComponent implements OnChanges {
   @Input() rating: number;
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
   starrating: number;

   ngOnChanges(): void {
       this.starrating = this.rating * 86/5;
   }

   onRatingClick(): void {
       this.ratingClicked.emit(' The rating ' + this.rating + ' was clicked');
   }
}