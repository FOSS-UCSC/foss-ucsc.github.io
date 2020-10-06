export class Repo {
  id?: number = 0;
  name?: string = null;
  html_url?: string = null;
  url?: string = null;
  branches_url?: string = null;
  description?: string = null;
  created_at?: Date = null;
  updated_at?: Date = null;
  stargazers_count?: number = 0;
  forks?: number = 0;
  open_issues?: number = 0;

  constructor(opt?: Repo) {
    Object.assign(this, opt);
  }
}
