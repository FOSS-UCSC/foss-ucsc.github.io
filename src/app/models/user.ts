export class User {
  id?: number = 0;
  login?: string = null;
  name?: string = null;
  html_url?: string = null;
  url?: string = null;
  avatar_url?: string = null;
  created_at?: Date = null;
  updated_at?: Date = null;
  public_repos?: number = 0;
  public_gists?: number = 0;
  followers?: number = 0;
  following?: number = 0;

  constructor(opt?: User) {
    Object.assign(this, opt);
  }
}
