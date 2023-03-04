module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":"tsconfig.json",
    },
    "plugins": [
        "simple-import-sort",
        "react"
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
    },
    "settings":{
        "react":{
            "version": "detect"
        }
    }
}
