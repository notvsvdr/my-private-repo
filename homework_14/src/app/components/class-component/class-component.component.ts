import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../exercise-template';

@Component({
    selector: 'app-class-component',
    templateUrl: './class-component.component.html',
    styleUrls: ['./class-component.component.css']
})
export class ClassComponent implements OnInit {

    constructor() { }

    @Input() exercise: Exercise;
    @Output() deleteExercise = new EventEmitter();

    editing: boolean = false;
    exerciseOnDiscard: Exercise = { id: 0, topic: '', date: '', lecturer: '' };

    ngOnInit() {
    }

    editExercise() {
        this.editing = !this.editing;
        this.exerciseOnDiscard = Object.assign({}, this.exercise);
    }

    discardExerciseEdit() {
        this.editing = !this.editing;
        this.exercise = Object.assign({}, this.exerciseOnDiscard);
    }

    removeExercise(exercise) {
        this.deleteExercise.emit(exercise);
    }
}
