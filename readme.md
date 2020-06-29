# Bottega TypeScript Course

### Create a js file from a ts file
```
$ tsc file-name.ts
```

### tsconfig.json
- This is used to configure your typescript files and convert them into javascript files, and possibly more things that I don't know right now.
- In order to convert a file now you just have to say tsc and it will convert all the files inside the files array.
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