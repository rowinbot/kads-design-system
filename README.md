# Kads Design System - vReact

> Disclaimer: This project is not intended for real-life use cases, specially not production! I'm doing it as an assignment (#3 week) for Dribbble's amazing [Scaling Design Systems course](https://dribbble.com/courses/design-systems) by Dan Mall.

## Getting started

The design system is developed under [Kads' Stackblitz project](https://stackblitz.com/edit/node-yprnnw) as a test of Stackblitz power with Web Containers. If you open it, it should automatically fire up the design system components showcase.

The project is structure as shown below:

- src
  - lib
    - components (where the components in the system lib)
  - index.js (entry point for showcase web view)
  - App.js (imports components from the lib to showcase them)
  - App.css (styles for the showcase)

> Note: The components hold their own styles to not have to worry about CSS-in-js management nor bundling css in the release.

## Installing

Install the system with your favorite node package manager, e.g with npm:

```bash
npm install @rowinbot/kads-react
```

And install importing components!

```javascript
import { Button } from "@rowinbot/kads-react";
```

## Using as a template

I setup this project so it could be used by my designer colleagues at my course cohort so it should be straightforward to clone and setup with automated publishing to NPM registry for distribution.

As a pre-requisite you'd need the following:

- A Github account.
- An NPM account.
- A Stackblitz account (you can sign up with your Github account).

Follow the following steps:

- Fork the [Stackblitz](https://stackblitz.com/edit/node-yprnnw) project.
- On the sidebar, click on the item `package.json` to update it (it's a file).
  - Update `name` to whatever you want to name your design system (e.g the-best-design-system) without spaces in the name.
  - Update `version` to whatever your initial version would be (e.g `0.0.1`).
  - Update `author` to your name (e.g your fullname/nickname).
- On the sidebar click on `Connect with Github` to setup a Github repository (you'll use this to publish your design system on NPM), this should ask for your permission to connect Stackblitz with your Github account, make sure to do this step correctly.
  - Enter a repository name and wait for it to finish.
- Follow the guide on [how to create an access token](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-access-tokens) on your NPM account and don't forget to momentarily store the token in a secure place or not close the browser tab to copy it later.
- Go to your Github account and find your newly created repository.
  - Follow the guide on [how to add protected secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to add the following:
    - NPM_AUTH_TOKEN (should be equal to the token you got from NPM).

### Making updates

When updating the design system, you'd want to publish an update to the NPM registry. After you're done with your changes (in this case, from Stackblitz):

- Increase the `version` in the `package.json` file (e.g if you had `0.0.1` you can put `0.0.2`, more info in [ELI5: Semantic Versioning](https://eli5.gg/Semantic%20Versioning)).
- Click on `Commit` in the nav-bar to update the repository over in Github.
  - Input a message reflecting your changes (e.g `Removed all components` / `Enhance button borders`)

Github should take care from here and automatically publish the new version to NPM's registry if there were no issues.
