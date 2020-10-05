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
      map((res: any[]) => res.map(
        (repo: any) => new Repo(repo.id, repo.name, repo.private, repo.html_url, repo.url, repo.description, repo.created_at,
          repo.updated_at, repo.stargazers_count, repo.forks, repo.open_issues)))
    );
  }

}
