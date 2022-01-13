module.exports = {
  "stories": [
    '../src/components/**/*.stories.*'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "typescript": {
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false,
      },
    }
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
//
// module.exports = {
//   //👇 Location of our stories
//   stories: ["../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/preset-create-react-app',
//   ],
// };
