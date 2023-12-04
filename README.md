# Log In With Microsoft

Log in to your Flarum forum with Microsoft. Supports personal and organisational accounts. 
An addon for [FoF OAuth](https://github.com/friendsofflarum/oauth)

## Installation

Install with composer:

```sh
composer require nospi/oauth-microsoft
```

## Updating

```sh
composer update nospi/oauth-microsoft
```

## Setup
1) Register your site with [Microsoft](https://learn.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow) and obtain your unique `client_id` and `client_secret`
2) Once you have created your security profile for your forum, go to `Web Settings` and enter the redirect URL as provided in this extension's settings page.
3) Log in with Microsoft!

## Links

- [Packagist](https://packagist.org/packages/nospi/oauth-microsoft)
- [GitHub](https://github.com/nospi/flarum-ext-oauth-microsoft)
- [Discuss](https://github.com/nospi/flarum-ext-oauth-microsoft/issues)
