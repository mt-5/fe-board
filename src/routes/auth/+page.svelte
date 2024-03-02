<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";

  export let data
  let { supabase } = data
  $: ({ supabase } = data)

  let email: string
  let password: string

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }
</script>

<form on:submit="{handleSignUp}">
  <Input name="email" bind:value="{email}" />
  <Input type="password" name="password" bind:value="{password}" />
  <Button>Sign up</Button>
</form>

<Button on:click="{handleSignIn}">Sign in</Button>
<Button on:click="{handleSignOut}">Sign out</Button>