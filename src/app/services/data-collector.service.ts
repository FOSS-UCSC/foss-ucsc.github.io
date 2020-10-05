import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../models/repo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {

  constructor(private http: HttpClient) { }

  getOrgRepos(): Observable<Repo[]> {
    let apiUrl = `https://api.github.com/orgs/FOSS-UCSC/repos`;
    return this.http.get(apiUrl).pipe(
      map((res: any[]) => {
        let lst = res.map(
          (repo: any) => new Repo(repo.id, repo.name, repo.private, repo.html_url, repo.url, repo.description, repo.created_at,
            repo.updated_at, repo.stargazers_count, repo.forks, repo.open_issues));
        return lst.sort(this.compareFn);
      })
    );
  }

  compareFn = (a: Repo, b: Repo) => {
    let a_count = a.stargazers_count + a.forks;
    let b_count = b.stargazers_count + b.forks;
    if (a_count < b_count)
      return 1;
    if (a_count >= b_count)
      return -1;
    return 0;
  };

}
