import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/models/repo';
import { DataCollectorService } from 'src/app/services/data-collector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repoList: Observable<Repo[]>;
  memberList: Observable<any[]>;

  constructor(private dcService: DataCollectorService) { }

  ngOnInit(): void {
    this.repoList = this.dcService.getOrgRepos();
    this.memberList = this.dcService.getOrgMembers();
  }

  changeRepoDesc(desc: string): string {
    let outputDesc = "";
    if (desc && desc.length >= 80) {
      let trimmedString = desc.slice(0, 80);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
      outputDesc = trimmedString + " ...";
    } else if (desc && desc.length == 0 || desc == null) {
      outputDesc = "The description is not provided.";
    } else {
      outputDesc = desc;
    }
    return outputDesc;
  }

}
