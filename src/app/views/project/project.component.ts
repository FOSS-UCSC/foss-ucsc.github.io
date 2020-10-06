import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Repo } from 'src/app/models/repo';
import { DataCollectorService } from 'src/app/services/data-collector.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  repo$: Observable<Repo>;
  branches$: Observable<any>
  selectedBranch: string;
  markdownType: string;
  markdownLoadingError: {
    isError: boolean;
    msg: string;
  };

  constructor(private route: ActivatedRoute, private dcService: DataCollectorService) {
    this.markdownType = "readme";
    this.markdownLoadingError = {
      isError: false,
      msg: null
    };
  }

  ngOnInit(): void {
    this.repo$ = this.route.params.pipe(switchMap((param) => this.dcService.getRepo(parseInt(param.id))));
    this.branches$ = this.repo$
      .pipe(switchMap((repo) => this.dcService
        .getBranchesByUrl(repo.branches_url.replace("{/branch}", ""))
        .pipe(map((branches) => {
          branches.forEach((branch: any) => {
            if (branch.name === "master" || branch.name === "main") {
              this.selectedBranch = branch.name;
            }
          });
          return branches;
        }))));
  }

  setMarkdownType(type: string): void {
    this.markdownType = type;
    this.markdownLoadingError = {
      isError: false,
      msg: null
    };
  }

  onError(event: any) {
    this.markdownLoadingError = {
      isError: true,
      msg: event.error
    };
  }

  changeBranch(branchName: string) {
    this.selectedBranch = branchName;
    this.markdownLoadingError = {
      isError: false,
      msg: null
    };
  }

}
