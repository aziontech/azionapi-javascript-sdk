# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Engineering standard baseline: SECURITY.md, CODEOWNERS, MAINTAINERS.md, CONTRIBUTING.md and README
- Compliance, security (gitleaks, semgrep, osv-scanner), OSSF Scorecard, PR title, code quality and functional test workflows
- Vitest functional tests for every generated package

### Changed
- `bump_version.yml`: inline SemVer tagging replaces the deprecated `anothrNick/github-tag-action`

## [v0.82.0] - 2025-03-05

### Changed
- Generated packages as of the `generated-sdk` merge (#91)
