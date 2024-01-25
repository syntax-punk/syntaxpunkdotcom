---
title: 'Multiple SSH keys for different Github accounts'
date: '2024-01-25'
short: "Managing ssh keys with ssh-agent."
hashtags: "tech,ssh,github"
---

Connecting to a Github account via `SSH` is my go to approach. It's easy, secure and allows me to avoid logging in every time I pull or push to a repo. Recently, I got into a situation where I had to use different Github accounts, accessing different Github organizations and of course I had an urge to authenticate my machine with the same SSH key for those accounts as well.

{.marginHalf}

And since we all know that using one password for multiple accounts is not a good idea, I'd assume that using the same ssh key-pair for authentication in several places is not a good practise either. 

{.marginHalf}

Ok, then generating several keys and naming those accordingly is one thing, but how to make sure that Github will be able to pick up the right one based on the remote repo I'm dealing with? Well, the solution turned out to be not so complicated.

## **Let's have a look:** {.hero-margin}

To solve the issue we will be using `ssh-keygen`{.codeword} and `ssh-agent`{.codeword} cli commands and if you're on Mac or a Linux machine there should be no issue with that, Windows users might need to install those tools, or use other tools.

{.marginHalf}

Now in this situation I have my personal Github account `syntax-punk`{.codeword} and two other accounts `foo-as`{.codeword} and `bar-as`{.codeword}. 
So let's start with generating keys first:

{.marginHalf}

Navigate to the `.ssh` folder in your home folder in your cli _(if the folder doesn't exist, create one)_ and generate key pairs for each account:

```bash
$ cd ~/.ssh

$ ssh-keygen -t ed25519 -C "your_email@example.com"

> Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

Note: if your system doesn't support `ed25519`{.codeword} algorithm, then you can use `rsa`{.codeword} instead.
```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Now in my case I've generated 3 pairs of public and private keys and named them accordingly:

```bash
> id_ed25519_syntax-punk
> id_ed25519_foo-as
> id_ed25519_bar-as
```

Now we need to run `ssh-agent`{.codeword} in the background in order to add private keys to it later on:

```bash
$ eval "$(ssh-agent -s)"
> Agent pid 51337
```

Next, we need to update our `~/.ssh/config`{.codeword} file _(if the file doesn't exist, create one)_ this will help our machine to correctly identify which key to use for the given account. 
Here is what we want to have in the config file:

```bash
Host github-<account-name>  # <account-name> is the name of your account
    HostName github.com     
    User git
    IdentityFile ~/.ssh/<your_private_key>s  # path to your private key
```

In my case the config would looks like this:

```bash
Host github-syntax-punk
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_syntax-punk

Host github-foo-as
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_foo-as

Host github-bar-as
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_bar-as
```
{.marginTop1}

And finally, let's add our private keys to the `ssh-agent`{.codeword}:

```bash
$ ssh-add ~/.ssh/id_ed25519_syntax-punk
$ ssh-add ~/.ssh/id_ed25519_foo-as
$ ssh-add ~/.ssh/id_ed25519_bar-as
```

If you're on Mac and have entered a passphrase in the previous step, you might want to store the passphrase in the keychain, so you don't have to enter it every time you use the key. Then the command will look like this for you:

```bash
$ ssh-add --apple-use-keychain ~/.ssh/your_key_name
```

And now we are all set to navigate to each Github account and add relevant **public** key to the account. I assume you know how to do that, but if not, here is a [link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to the Github docs.


{.margin2}

**P.S.** When you restart your machine you might want to start `ssh-agent`{.codeword} again, you can either run the 

```bash
$ eval "$(ssh-agent -s)"
```

command again or add the command to your `~/.bashrc`{.codeword}, `~/.bash_profile`{.codeword} or `~/.zshrc`{.codeword} file _(depends on the bash you're using)_.


Cheers! {.margin2}
