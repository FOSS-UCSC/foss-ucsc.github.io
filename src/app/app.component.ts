import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentSection = 'section1';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId || "section1";
  }

  scrollTo(section: string): void {
    if (this.router.url !== "/") {
      this.router.navigate(["/"]).then(() => {
        document.querySelector('#' + section).scrollIntoView({
          behavior: "smooth", block: "start", inline: "nearest"
        });
      }).catch(err => console.log(err));
    } else {
      document.querySelector('#' + section).scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
      });
    }
  }

  navItemStyles(section: string): string {
    return this.currentSection === section ? "nav-item active mr-1" : "nav-item mr-1";
  }

  onActivate(event: any): void {
    window.scroll(0, 0);
  }

}
