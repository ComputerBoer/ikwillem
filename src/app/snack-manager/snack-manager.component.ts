import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackService } from '../../services/snack.service';
import { Snack } from '../../models/snack';

@Component({
  selector: 'app-snack-manager',
  standalone:true,
  templateUrl: './snack-manager.component.html',
  styleUrls: ['./snack-manager.component.css'],
  imports: [NgFor, NgIf, FormsModule],
})
export class SnackManagerComponent {
  snacks:Snack[] = [] 
  newSnack = '';

  constructor(
    private snackService: SnackService
  ) {
    this.snacks = this.snackService.getSnacks();

  }





  addSnack() {
    if (this.newSnack.trim()) {
      this.snacks.push({ id: this.snacks.length, name: this.newSnack, amount: 0 });
      this.snackService.saveSnacks(this.snacks);
      this.newSnack = '';
    }
  }
  removeSnack(id: number) {
    const snack = this.snacks.find(s => s.id === id);
    if (snack && confirm(`Weet je zeker dat je "${snack.name}" wilt verwijderen?`)) {
      this.snacks = this.snacks.filter(s => s.id !== id);
      this.snackService.saveSnacks(this.snacks);
    }
  }

  clearSnackAmounts() {
    this.snacks.forEach(snack => snack.amount = 0);
    this.snackService.saveSnacks(this.snacks);
  }

  incrementSnack(id: number) {
    const snack = this.snacks.find(s => s.id === id);
    if (snack) {
      snack.amount++;
      this.snackService.saveSnacks(this.snacks);
    }
  }

  decrementSnack(id: number) {
    const snack = this.snacks.find(s => s.id === id);
    if (snack && snack.amount > 0) {
      snack.amount--;
      this.snackService.saveSnacks(this.snacks);
    }
  }
}
