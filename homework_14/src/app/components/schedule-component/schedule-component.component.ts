import { Component, OnInit, Injectable } from '@angular/core';
import { ClassComponent } from '../class-component/class-component.component';
import { Exercise } from '../../exercise-template';
import { EXERCISES } from '../../mock-exercises';

@Component({
    selector: 'app-schedule-component',
    templateUrl: './schedule-component.component.html',
    styleUrls: ['./schedule-component.component.css']
})
export class ScheduleComponent implements OnInit {

    constructor() { }

    exercises: Array<Exercise> = EXERCISES;

    ngOnInit() {
    }

    addExercise() {
        let uniqueId = this.exercises.length ? this.exercises[this.exercises.length - 1].id + 1 : 1;
        let newExercise: Exercise = {
            id: uniqueId,
            topic: 'none',
            date: 'none',
            lecturer: 'none'
        }

        this.exercises.push(newExercise);
    }

    deleteExercise(exercise: Exercise) {
        for (let i = 0; i < this.exercises.length; i++) {
            if (this.exercises[i].id === exercise.id) {
                this.exercises.splice(i, 1);
            }
        }
    }
}
