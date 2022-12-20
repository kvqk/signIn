module.exports = {
    "env": {
        browser: true,
        amd: true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "off",
            2,
        ],
        
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "@typescript-eslint/no-explicit-any": ["off"],
        "react/prop-types": ["off"],
        "max-lines-per-function": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/forbid-prop-types": "off",
        "react/display-name": "off",
        "cognitive-complexity": "off"
}};
