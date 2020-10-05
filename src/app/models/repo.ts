export class Repo {
  constructor(
    private id?: number,
    private name?: string,
    private is_private?: boolean,
    private html_url?: string,
    private url?: string,
    private description?: string,
    private created_at?: Date,
    private updated_at?: Date,
    private stargazers_count?: number,
    private forks?: number,
    private open_issues?: number
  ) {}
}
