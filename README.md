# Jira to Branch Name

> A CLI which takes a Jira ID and summary then converts it to a GitHub
> branch name

![Example usage where you can copy a Jira ID and Summary and make it a branch name](./img/usage.gif)

## Installation

```bash
npm i -g jira-to-branch-name
```

## Usage

```bash
jbn <jira id> <summary>
```

```bash
git checkout -b $(jbn FOO 123 Make this great)
=> Switched to a new branch 'foo-123-make-this-great'
```
