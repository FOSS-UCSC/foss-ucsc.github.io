import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../models/repo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataCollectorService {

  constructor(private http: HttpClient) { }

  // list of repos
  getOrgRepos(): Observable<Repo[]> {
    let apiUrl = `https://api.github.com/orgs/FOSS-UCSC/repos`;
    return this.http.get(apiUrl).pipe(
      map((res: any[]) => {
        let lst = res.map(
          (repo: any) => {
            return Object.keys(new Repo()).reduce((obj, key) => ({ ...obj, [key]: repo[key] }), {}) as Repo;
          });
        return lst.sort(this.compareRepoFn);
      })
    );
  }

  compareRepoFn = (a: Repo, b: Repo) => {
    let a_count = a.stargazers_count + a.forks;
    let b_count = b.stargazers_count + b.forks;
    if (a_count < b_count)
      return 1;
    if (a_count >= b_count)
      return -1;
    return 0;
  };

  // list of members
  getOrgMembers(): Observable<any[]> {
    let apiUrl = `https://api.github.com/orgs/FOSS-UCSC/members`;
    return this.http.get(apiUrl).pipe(
      map((res: any[]) => res.map((user: any) => {
        return Object.keys(new User()).reduce((obj, key) => ({ ...obj, [key]: user[key] }), {}) as User;
      }))
    );
  }

  // single repo
  getRepo(id: number): Observable<any> {
    let apiUrl = `https://api.github.com/repositories/${id}`;
    return this.http.get(apiUrl)
      .pipe(map((repo: any) => Object.keys(new Repo()).reduce((obj, key) => ({ ...obj, [key]: repo[key] }), {}) as Repo));
  }

  // branches list
  getBranchesByUrl(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl)
      .pipe(map((br: any) => br));
  }

}
