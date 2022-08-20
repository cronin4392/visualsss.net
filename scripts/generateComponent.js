// eslint-disable-next-line
const generator = require("component-file-generator");

generator.exec({
  service: {
    root: "./src/components",
    structure: {
      name: "[name]",
      children: [
        {
          type: "file",
          name: "index.tsx",
          content: `import styles from './styles.module.scss';\n\ntype [name]Props = {};\n\nconst [name]: React.FC<[name]Props> = () => {\n  return <div className={styles.Container}></div>;\n};\n\nexport default [name];\n`,
        },
        {
          type: "file",
          name: "styles.module.scss",
          content: '@import "@/styles/tools/main.scss";\n\n',
        },
      ],
    },
  },
});
