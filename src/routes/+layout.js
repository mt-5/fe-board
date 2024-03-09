import Auth from "$lib/services/AuthService";
import GithubService from "$lib/services/GithubService";
export const load = async () => {
  const session = await Auth.ensureAuthenticated()
  if(session?.provider_token) {
    await GithubService.init(session.provider_token)
    console.log('GitHub Service Initialized')
  }
}
