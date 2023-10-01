import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent {
  d = new Date();
  planning = [
    {
      sujet: 'html5/css3',
      volume: 25,
      prix: 250,
      lieu: 'rue ankara ariana tunis tunisie',
      date: this.d,
      ouverte: true,
    },
    {
      sujet: 'react',
      volume: 30,
      prix: 400,
      lieu: 'rue de la bourse 34 les berges du lac 2 tunis tunisie',
      date: this.d,
      ouverte: false,
    },
    {
      sujet: 'angular',
      volume: 20,
      prix: 350,
      lieu: 'rue ankara ariana tunistunisie',
      date: this.d,
      ouverte: true,
    },
  ];
}
