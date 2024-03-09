import { PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createClient, type Session, type User, type UserResponse } from '@supabase/supabase-js'

export default {
  client: createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY),
  user: null as User | null,
  session: null as Session | null,
  async ensureAuthenticated() {
    const session = await this.client.auth.getSession()
    if (!session.data.session) await this.signIn()

    this.session = session.data.session
    this.user = (await this.client.auth.getUser()).data.user
    return this.session
  },
  signIn() {
    return this.client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        scopes: 'read:user,repo,repo_deployment'
      }
    })
  },
  signOut() {
    return this.client.auth.signOut()
  }
}