export class Repo {
  id?: number;
  name?: string;
  is_private?: boolean;
  html_url?: string;
  url?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  stargazers_count?: number;
  forks?: number;
  open_issues?: number;

  constructor(
    id?: number,
    name?: string,
    is_private?: boolean,
    html_url?: string,
    url?: string,
    description?: string,
    created_at?: Date,
    updated_at?: Date,
    stargazers_count?: number,
    forks?: number,
    open_issues?: number
  ) {
    this.id = id
    this.name = name;
    this.is_private = is_private;
    this.html_url = html_url;
    this.url = url;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.stargazers_count = stargazers_count;
    this.forks = forks;
    this.open_issues = open_issues;
  }
}
