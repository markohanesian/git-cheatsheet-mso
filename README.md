# Git Good
![Git Good Website Image](/public/gitgood-thumbnail.png)

## Links
* [Link to site](https://git-cheatsheet-mso.netlify.app/)

## Description
A cheatsheet of my most used/favorite git commands with copy to clipboard functionality

## User Story
I need a concise resource for useful git commands and an easy way to use and share them

## Instructions
To copy commands, click to copy it to your clipboard!

## Built With
* React
* react-copy-to-clipboard
* CSS Flexbox
* React-transition-group

## Planned Features/Outstanding Issues
* Dark/light modes
* Fix infinite click copy animation

## Authors
* [Mark Ohanesian](https://github.com/markohanesian) 

## Acknowledgments

## License

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
![GitHub release](https://img.shields.io/github/v/release/markohanesian/Burger-Logger)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)



[![Netlify Status](https://api.netlify.com/api/v1/badges/0c7ff7fe-2af1-4af5-8481-7a5ff9f25a10/deploy-status)](https://app.netlify.com/sites/armenian-names/deploys) coming soon

## Troubleshooting (Node/OpenSSL)

If you see an error like `ERR_OSSL_EVP_UNSUPPORTED` when running `npm start` with newer Node versions, set the `NODE_OPTIONS` env var before starting the dev server:

PowerShell:

```powershell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
npm start
```

Or persist the workaround by installing `cross-env` and using the modified `start` script:

```bash
npm install --save-dev cross-env
# then run
npm start
```
