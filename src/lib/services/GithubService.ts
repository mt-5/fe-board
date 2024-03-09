import { Octokit } from "@octokit/rest"

export default {
  octokit: null as null | Octokit, 
  async init(authToken: string) {
    this.octokit = new Octokit({ auth: authToken});
    await this.octokit.rest.users.getAuthenticated()
  },
  async getRepos() {
    const res = await this.octokit?.rest.repos.listForAuthenticatedUser({
      sort: "updated",
      per_page: 100,
    })

    return res?.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      createdAt: repo.created_at,
      language: repo.language,
      owner: repo.owner.login,
      isPrivate: repo.private,
    })) ?? []
  },

  async getPullRequests(repoIds: number[]) {
    console.log('repoIds', repoIds)
  }
}