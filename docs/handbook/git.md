# Git Standards

Here at Carcosa, we're following [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) specification in writing commit messages. Having a coherent and standardized commit structure help us involved in a project understand the changes that have occured and write them easier.

## Structure

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

See <a href="#examples">examples</a> below.

## Types

Commits MUST be prefixed with a type, which consists of a noun, `feat`, `fix`, etc., followed by the `OPTIONAL scope`, `OPTIONAL !`, and REQUIRED terminal colon and space.

| Type     | Meaning                    | Description                                                                                                   |
| -------- | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| feat     | Features                   | MUST be used when a commit adds a new feature to your application or library.                                 |
| fix      | Bug Fixes                  | MUST be used when a commit represents a bug fix for your application.                                         |
| style    | Styles                     | Changes that do not affect the meaning of the code (white­-space, format­ting, missing semi-c­olons, etc)     |
| refactor | Code Refact­oring          | A code change that neither fixes a bug nor adds a feature                                                     |
| perf     | Perfor­mance Improv­ements | A code change that improves perfor­mance                                                                      |
| test     | Tests                      | Adding missing tests or correcting existing tests                                                             |
| build    | Builds                     | Changes that affect the build system or external depend­encies (example scopes: gulp, broccoli, npm)          |
| ci       | Continuous Integr­ations   | Changes to our CI config­uration files and scripts (example scopes: Travis, Circle, Browse­rStack, SauceLabs) |
| chore    | Chores                     | Other changes that don’t modify src or test files                                                             |
| revert   | Reverts                    | Reverts a previous commit                                                                                     |
| docs     | Documentation              | Documentation only changes                                                                                    |

## Description

A description should describe your changes in imperative mood.This means you need to eliminate the temptation to use gerunds or past tense in your description line. Don't write a git commit description line that talks about what you did, or what you are doing. Instead, describe what was done. A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., `fix: fix the fencepost error`.

## Scope (optional)

A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., `feat(ratings): add the ability to add star ratings to posts`.

## Breaking Changes

Breaking changes are indicated by putting BREAKING CHANGE: at the start of the message body, for any commit type. Optionally they may be emphasised by appending a ! after the type and scope. The message body should provide appropriate guidance for developers affected by the breaking change.

## <span id="examples">Examples</span>

### Commit message with no body

```
docs: correct spelling of CHANGELOG
```

### Commit message with scope

```
feat(lang): add polish language
```

### Commit message with description and breaking change footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit message with ! to draw attention to breaking change

```
refactor!: drop support for Node 6
```

### Commit message with scope and ! to draw attention to breaking change

```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### Commit message with multi-paragraph body and multiple footers

```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## Fixing up commits

If you already made commits and they don't meet the Conventional Commits specification, you have a couple of options:

- if there's only one commit to redo, the easiest option is to use `git commit --amend` with no staged changes, which will allow you to edit the commit message.
