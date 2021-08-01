# Tenkai (展開, てんかい)

It is a japanese word that means expansion, deployment.

This architecture is inspired by [Bulletproof React](https://github.com/alan2207/bulletproof-react) by [Alan Alickovic](https://github.com/alan2207) thanks for the hard work

## Getting Started

## Project Structure

```
src
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- context           # all of the global contexts
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- pages             # routes configuration
|
+-- public            # assets folder can contain all the static data such as images, fonts, etc.
|
+-- templates         # templates of different pages
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a specific feature. This will allow you to keep functionalities scoped to a feature and not mix it with the shared things. This is much easier to maintain than a flat folder structure with many files.

A feature could have the following structure:

```
src/features/awesome-feature
|
+-- api         # exported API request declarations related to the feature
|
+-- components  # components scoped to the feature, not used anywhere else
|
+-- hooks       # hooks scoped to the feature, not used anywhere else
|
+-- types       # typescript types for the given feature
|
+-- validations # for forms validations
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

A feature folder could also contain other features (if used only within the parent feature) or be kept separated, it's a matter of preference.

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.
