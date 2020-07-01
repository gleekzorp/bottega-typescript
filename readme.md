# Bottega TypeScript Course

### Create a js file from a ts file
```
$ tsc file-name.ts
OR if your json file is setup with an array of files
$ tsc
```

### tsconfig.json
- This is used to configure your typescript files and convert them into javascript files, and possibly more things that I don't know right now.
- In order to convert a file now you just have to say tsc and it will convert all the files inside the files array.
- Be mindful you might need some different configurations for different parts of this application.  For instance when you get into Promises and Decorators.
  - https://www.typescriptlang.org/docs/handbook/decorators.html
  - Promises
    - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#including-built-in-type-declarations-with---lib
    - https://stackoverflow.com/questions/27573365/how-to-use-typescript-with-native-es6-promises
```json
{
  "compilerOptions": {
    "sourceMap": true
  },
  "files": [
    "005_typescript_config.ts"
  ]
}
```

### Source Code
- https://github.com/rails-camp/typescript-introduction