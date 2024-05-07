---
title: 'Git aliases that might come in handy'
date: '2024-05-06'
short: "A bunch of useful Git aliases to speed up your workflow"
hashtags: "tech,git,productivity"
---

Git is a powerful tool, but it can be a bit verbose at times. So let me share some handy aliases that I use to speed up my workflow.

**TLDR:** Check the aliases list in my [public gist](https://gist.github.com/syntax-punk/eca9711b073a6f28d262cb9b6ce87e44#file-syntax-punk-git-aliases) {.margin1}

## **How to set em up** {.hero-margin}

An alias can be setup either globally (`--global`{.codeword}) or locally (`--local`{.codeword}). Global aliases are available across all your repositories, while local aliases are specific to a single repository.:

```bash
git config --global alias.st status
```

The command above creates an alias `st` for `status` keyword so that you can use a shorhand version of the command: `git st`{.codeword} instead of `git status`{.codeword}, dead simple.

The created alias is added globally as a key-value pair in the `.gitconfig`{.codeword} file and to view the file, you can run:

```bash
git config --global --list
```

You can also manually type in aliases directly into the `.gitconfig`{.codeword} file. Run the command below to open the file in your terminal:

```bash
git config --global --edit
```

The output will look something like this:

```text
[user]
  name = syntax-punk

[init]
  defaultBranch = main

[alias]
  st = status
```

And as you can see, the previously added `st`{.codeword} alias sits under the "`[alias]`" declaration, so if you want to add more aliases, you can just add them below the existing ones.

## **My aliases** {.hero-margin}

- **adog**: ` log --all --decorate --oneline --graph `{.codeword} - Displays your commit history in a nice and compact way. Usage: `git adog`{.codeword}

- **cob**: ` checkout -b `{.codeword} - Create a new branch and switch to it. Usage: `git cob my-new-branch`{.codeword}
  
- **wip**: ` commit -am "WIP" `{.codeword} - Add all changes and commit with a "WIP" message. Usage: `git wip`{.codeword}
  
- **undo**: ` reset --soft HEAD~1 `{.codeword} - Undo the last commit and keep the changes staged. Usage: `git undo`{.codeword}
  
- **hdr**: ` "!f(){ git checkout main && git pull && git checkout - && git rebase main; };f" `{.codeword} - `hdr` aka "hydrate", hydrates the feature branch that you're currently working on with changes in the main branch in remote repository. The command switches to your main branch, pulls latest changes from repository, switches back and then rebases your feature branch on top of main. Usage: `git hdr`{.codeword}

- **rimbr**: ` "!git checkout main && git branch | grep -v "main" | xargs git branch -D" `{.codeword} - `rimbr` aka "remove branch", it deletes all branches except the main branch. Usage: `git rimbr`{.codeword}
  

And that's about it, give these guys a go, but use them responsibly and I hope I could save you a some keystrokes.

Have a great one! {.margin2}
