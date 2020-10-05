import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentSection = 'section1';

  constructor() { }

  ngOnInit(): void { }

  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId || "section1";
  }

  scrollTo(section: string): void {
    document.querySelector('#' + section).scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest"
    });
  }

  navItemStyles(section: string): string {
    return this.currentSection === section ? "nav-item active mr-1" : "nav-item mr-1";
  }

}
