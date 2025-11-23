---
title: 'Angular code formatting with Github actions'
date: '2025-11-23'
short: 'My favourite approach to Angular code formatting using with Prettier and Github actions'
hashtags: 'tech,dev,angular,github,prettier'
---

Hello folks! In this post, I'll share my preferred method for formatting Angular code using Prettier integrated with Github Actions. This setup ensures that your code remains clean and consistent across your team. Why you ask? Because I believe that well-formatted code is easier to read, maintain, and collaborate on. 
#
Let's dive in!

## **Installing Prettier** {.hero-margin}

**Prettier** is an opinionated code formatter, it doesn't change the code logic but makes it look consistent and clean. To install Prettier in your Angular project, run the following command in your terminal:

```bash
npm install --save-dev prettier
```

After the installation, create a configuration file in the root of your project to define your formatting rules. Now there are many ways to create a Prettier config file, the one I prefer is JavaScript format. Create a file named `prettier.config.js`{.codeword} and add the following content:

```javascript
module.exports = {
  printWidth: 80,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular'
      }
    }
  ]
};
```

Keep in mind that these settings are based on my personal preferences. Feel free to adjust them to suit your coding style. You can find more configuration options in the [here](https://prettier.io/docs/en/options.html).

Next, add a script to your `package.json`{.codeword} file to easily run Prettier on your codebase. Add the following line under the `scripts` section: {.margin1}

```json
"format": "prettier --write \"src/**/*.{ts,html,css,scss}\""
```

To run the formatter, simply execute:

```bash
npm run format
```

This command will format all `.ts`{.codeword}, `.html`{.codeword}, `.css`{.codeword}, and `.scss`{.codeword} files in the `src`{.codeword} directory according to the rules defined in your Prettier configuration. Next, let's jump into setting up a Github workflow to automate this process.

## **Setting Up Github Workflow** {.hero-margin}

I assume your project is already using Github, so, to create a Github workflow, navigate to `.github/workflows`{.codeword} directory in your repository (_If the folders don't exist, create them._) Then, create new YAML{.codeword} file, `formatting.yml`{.codeword} for instance, and then add the following content:

```yaml
name: formatting

on: [push]

jobs:
  format-check:
    runs-on: ubuntu-latest
    if: github.ref != 'refs/heads/main'

    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4

      - name: format with prettier
        run: |
          npm install
          npm run format

      - name: commit if changed
        run: |
          git config --global user.name 'github-actions'
          git config --global user.email 'github-actions@example.com'
          git add .
          git diff --quiet && git diff --staged --quiet || (git commit -m "chore: formatting" && git push)
```

Here is what is happening in this workflow:
 - The workflow is triggered on every push to the repository, except for pushes to the `main`{.codeword} branch, this is done deliberately so that code formatting is run on feature branches before merging into `main`{.codeword}
 - It checks out the code and sets up the environment, installs dependencies and then runs the format{.codeword} script that we defined in `package.json`
 - At last, it checks if there are any changes after formatting. And if there are, it commits and pushes those changes back to the branch.

And that's it! Now, every time you push code to a branch, Github Actions will automatically format your code using Prettier.

Cheers! 🍻 {.margin1}